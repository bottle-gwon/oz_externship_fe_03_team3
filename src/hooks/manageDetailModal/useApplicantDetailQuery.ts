import api from '@/api/api'
import useApplicantDetailStore from '@/store/recruit/manageDetailModal/applicantDetailstore'
import type { ApplicantDetail } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

const useApplicantDetailQuery = (applicantId: number) => {
  const applicantsQueryEndpoint = `/recruitments/applications/${applicantId}`

  const setApplicantDetail = useApplicantDetailStore(
    (state) => state.setApplicantDetail
  )

  const { data, isPending, error } = useQuery({
    queryKey: [applicantsQueryEndpoint],
    queryFn: async () => {
      const response = await api.get(applicantsQueryEndpoint)
      return response.data as ApplicantDetail
    },
  })

  useEffect(() => {
    if (!data) {
      return
    }
    setApplicantDetail(data)
  }, [data])

  return {
    isPending,
    error,
  }
}

export default useApplicantDetailQuery
