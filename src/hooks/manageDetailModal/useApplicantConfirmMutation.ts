import api from '@/api/api'
import useSimpleMutation from '../useSimpleMutation'
import type { Applicant, ApplicantResponseData } from '@/types'
import type { InfiniteData } from '@tanstack/react-query'
import useStudyHubStore from '@/store/store'

const approveApplicant = (data: Applicant) => {
  return api.post(`/recruitments/applications/${data.uuid}/approve`)
}

const rejectApplicant = (data: Applicant) => {
  return api.post(`/recruitments/applications/${data.uuid}/reject`)
}

const updateApplicationCache = (
  previous: InfiniteData<ApplicantResponseData, unknown>,
  newOne: Applicant
) => {
  const updated = {
    ...previous,
    pages: previous.pages.map((page) => {
      return {
        ...page,
        results: page.results.map((applicant) => {
          const isMatch = applicant.uuid === newOne.uuid
          return isMatch ? newOne : applicant
        }),
      }
    }),
  }

  return updated
}

const useApplicantConfirmMutation = (recruitmentId: string) => {
  const setModalKeyArray = useStudyHubStore((state) => state.setModalKeyArray)

  const approveApplicantMutation = useSimpleMutation({
    queryKey: ['applicants', recruitmentId],
    mutationFnWithData: approveApplicant,
    updateCacheForUi: updateApplicationCache,
    handleSuccess: () => {
      setModalKeyArray(['manage', 'manageDetail', 'resultApprove'])
    },
    handleError: () => {
      setModalKeyArray(['manage', 'manageDetail', 'errorMessage'])
    },
  })

  const rejectApplicantMutation = useSimpleMutation({
    queryKey: ['applicants', recruitmentId],
    mutationFnWithData: rejectApplicant,
    updateCacheForUi: updateApplicationCache,
    handleSuccess: () => {
      setModalKeyArray(['manage', 'manageDetail', 'resultReject'])
    },
    handleError: () => {
      setModalKeyArray(['manage', 'manageDetail', 'errorMessage'])
    },
  })

  return { approveApplicantMutation, rejectApplicantMutation }
}

export default useApplicantConfirmMutation
