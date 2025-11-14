import type { RecruitDetail } from '@/types'
import useSimpleMutation from '../useSimpleMutation'
import api from '@/api/api'
import { useQueryClient } from '@tanstack/react-query'

const useRecruitDetailMutation = (recruitDetail: RecruitDetail) => {
  const queryClient = useQueryClient()
  const queryEndpoint = `/recruitments/${recruitDetail.uuid}`
  const toggleBookmarkMutation = useSimpleMutation({
    queryEndpoint,
    mutationFnWithData: () =>
      api.post(`/recruitments/bookmarks/${recruitDetail.uuid}`),
    updateCacheForUi: (_previous: RecruitDetail, newOne: RecruitDetail) => {
      return newOne
    },
    handleSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/recruitments'] })
      queryClient.invalidateQueries({ queryKey: ['/recruitments/mine'] })
    },
  })

  return { toggleBookmarkMutation }
}

export default useRecruitDetailMutation
