import api from '@/api/api'
import useStudyHubStore from '@/store/store'
import type { RecruitDetail } from '@/types'
import { useQuery } from '@tanstack/react-query'

const useRecruitDetailQuery = (recruitUuid: string) => {
  const endpoint = `/recruitments/${recruitUuid}`
  const accessToken = useStudyHubStore((state) => state.accessToken)
  const queryKey = [endpoint, accessToken]

  const { data, isPending, error } = useQuery({
    queryKey,
    queryFn: async () => (await api.get(endpoint)).data as RecruitDetail,
  })

  return { data, isPending, error }
}

export default useRecruitDetailQuery
