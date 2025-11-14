import type { RecruitDetail } from '@/types'
import useSimpleMutation from '../useSimpleMutation'
import api from '@/api/api'

const useRecruitDetailMutation = (recruitDetail: RecruitDetail) => {
  const queryEndpoint = `/recruitments/${recruitDetail.uuid}/`
  const toggleBookmarkMutation = useSimpleMutation({
    queryEndpoint: queryEndpoint,
    mutationFnWithData: () =>
      api.post(`/recruitments/bookmarks/${recruitDetail.uuid}`),
    updateCacheForUi: (_previous: RecruitDetail, newOne: RecruitDetail) => {
      return newOne
    },
  })

  return { toggleBookmarkMutation }
}

export default useRecruitDetailMutation
