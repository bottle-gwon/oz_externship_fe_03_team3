import api from '@/api/api'
import type { RecruitsManageResponse, RecruitDelete } from '@/types'
import type { InfiniteData } from '@tanstack/react-query'
import useSimpleMutation from '../useSimpleMutation'

const updateManageDeleteCache = (
  previous: InfiniteData<RecruitsManageResponse, unknown>,
  removedRecruit: RecruitDelete
) => ({
  ...previous,
  pages: previous.pages.map((page) => {
    const filteredResults = page.results.filter(
      (recruitment) => recruitment.uuid !== removedRecruit.uuid
    )

    const pageStatus = page.status
    const { total, open, closed } = page.count
    const decreaseOpen = removedRecruit.is_closed ? 0 : 1
    const decreaseClosed = removedRecruit.is_closed ? 1 : 0

    const updatedCount = {
      total: Math.max(0, total - 1),
      open: pageStatus === 'closed' ? open : Math.max(0, open - decreaseOpen),
      closed:
        pageStatus === 'open' ? closed : Math.max(0, closed - decreaseClosed),
    }

    return {
      ...page,
      results: filteredResults,
      count: updatedCount,
    }
  }),
})

const useManageDeleteMutation = (opts?: {
  onSuccess?: () => void
  onError?: (error: Error) => void
}) => {
  const queryEndpoint = `/recruitments/mine`

  const deleteRecruitmentMutation = useSimpleMutation({
    queryEndpoint,
    mutationFnWithData: async (recruitmentId: string) => {
      await api.delete(`/recruitments/${recruitmentId}`)
    },
    updateCacheForUi: updateManageDeleteCache,
    handleSuccess: opts?.onSuccess,
    handleError: opts?.onError,
  })

  return { deleteRecruitmentMutation }
}

export default useManageDeleteMutation
