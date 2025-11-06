import api from '@/api/api'
import type { RecruitDetail } from '@/types'
import { useQuery } from '@tanstack/react-query'

const useRecruitDetailQuery = (recruitId: number) => {
  // NOTE: 공고 세부 페이지 엔드포인트 마지막을 `/`로 해서 여기서도 그리 함
  const endpoint = `/recruitments/${recruitId}/`
  const { data, isPending, error } = useQuery({
    queryKey: [endpoint],
    queryFn: async () => (await api.get(endpoint)).data as RecruitDetail,
  })

  return { data, isPending, error }
}

export default useRecruitDetailQuery
