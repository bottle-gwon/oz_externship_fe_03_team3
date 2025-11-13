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
      console.log('Page results:', page.results)
      return {
        ...page,
        results: page.results.map((applicant) => {
          const isMatch = applicant.uuid === newOne.uuid
          console.log(
            `Applicant ${applicant.uuid} === ${newOne.uuid}:`,
            isMatch
          )
          return isMatch ? newOne : applicant
        }),
      }
    }),
  }

  console.log('Updated cache:', updated)
  return updated
}

const useApplicantConfirmMutation = (recruitmentId: string) => {
  const setModalKeyArray = useStudyHubStore((state) => state.setModalKeyArray)
  const approveApplicantMutation = useSimpleMutation({
    queryEndpoint: `/recruitments/${recruitmentId}/applications/list`,
    mutationFnWithData: approveApplicant,
    updateCacheForUi: updateApplicationCache,
    handleSuccess: () => {
      setModalKeyArray(['manage', 'manageDetail', 'resultApprove'])
    },
  })

  const rejectApplicantMutation = useSimpleMutation({
    queryEndpoint: `/recruitments/${recruitmentId}/applications/list`,
    mutationFnWithData: rejectApplicant,
    updateCacheForUi: updateApplicationCache,
    handleSuccess: () => {
      setModalKeyArray(['manage', 'manageDetail', 'resultReject'])
    },
  })

  return { approveApplicantMutation, rejectApplicantMutation }
}

export default useApplicantConfirmMutation
