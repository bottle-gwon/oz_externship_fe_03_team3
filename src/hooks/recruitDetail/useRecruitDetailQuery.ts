import api from '@/api/api'
import type { RecruitDetail } from '@/types'
import { useQuery } from '@tanstack/react-query'

const useRecruitDetailQuery = (recruitUuid: string) => {
  const endpoint = `/recruitments/${recruitUuid}`
  const { data, isPending, error } = useQuery({
    queryKey: [endpoint],
    queryFn: async () => (await api.get(endpoint)).data as RecruitDetail,
  })

  return { data, isPending, error }
}

export default useRecruitDetailQuery
