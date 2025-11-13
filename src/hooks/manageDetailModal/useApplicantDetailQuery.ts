import api from '@/api/api'
import type { ApplicantDetail } from '@/types'
import { useQuery } from '@tanstack/react-query'

const useApplicantDetailQuery = (applicantId: string) => {
  const applicantsQueryEndpoint = `/recruitments/applications/${applicantId}`

  const { data, isPending, error } = useQuery({
    queryKey: [applicantsQueryEndpoint],
    queryFn: async () => {
      const response = await api.get(applicantsQueryEndpoint)
      return response.data as ApplicantDetail
    },
  })

  return {
    data,
    isPending,
    error,
  }
}

export default useApplicantDetailQuery
