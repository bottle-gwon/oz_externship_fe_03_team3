import type { RecruitDetail } from '@/types'
import useSimpleMutation from '../useSimpleMutation'
import api from '@/api/api'

const useRecruitDetailMutation = (recruitDetail: RecruitDetail) => {
  const queryEndpoint = `/recruitments/${recruitDetail}/`
  const toggleBookmarkMutation = useSimpleMutation({
    queryEndpoint: queryEndpoint,
    mutationFnWithData: () => api.post(`${queryEndpoint}bookmark`),
    updateCacheForUi: (_previous: RecruitDetail, newOne: RecruitDetail) =>
      newOne,
  })

  return { toggleBookmarkMutation }
}

export default useRecruitDetailMutation
