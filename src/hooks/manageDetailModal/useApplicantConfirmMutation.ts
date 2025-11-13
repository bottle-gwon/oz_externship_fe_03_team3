import api from '@/api/api'
import useSimpleMutation from '../useSimpleMutation'
import type { Applicant, ApplicantResponseData } from '@/types'
import type { InfiniteData } from '@tanstack/react-query'

const approveApplicant = (data: Applicant) => {
  return api.post(`/recruitments/applications/${data.uuid}/approve`)
}

const rejectApplicant = (data: Applicant) => {
  return api.post(`/recruitments/applications/${data.uuid}/reject`)
}

const updateApplicationCache = (
  previous: InfiniteData<ApplicantResponseData, unknown>,
  newOne: Applicant
) => ({
  ...previous,
  pages: previous.pages.map((page) => ({
    ...page,
    results: page.results.map((applicant) =>
      applicant.uuid === newOne.uuid ? newOne : applicant
    ),
  })),
})

const useApplicantConfirmMutation = () => {
  const approveApplicantMutation = useSimpleMutation({
    queryEndpoint: '/applications', // 실제 queryKey에 맞게 수정 필요
    mutationFnWithData: approveApplicant,
    updateCacheForUi: updateApplicationCache,
  })

  const rejectApplicantMutation = useSimpleMutation({
    queryEndpoint: '/applications', // 실제 queryKey에 맞게 수정 필요
    mutationFnWithData: rejectApplicant,
    updateCacheForUi: updateApplicationCache,
  })

  return { approveApplicantMutation, rejectApplicantMutation }
}

export default useApplicantConfirmMutation
