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
    const removedOnPage = page.results.some(
      (recruitment) => recruitment.uuid === removedRecruit.uuid
    )
    const filteredResults = page.results.filter(
      (recruitment) => recruitment.uuid !== removedRecruit.uuid
    )

    const { total, open, closed } = page.count

    const isClosed = removedRecruit.is_closed
    const openDelta = !isClosed && removedOnPage ? 1 : 0
    const closedDelta = isClosed && removedOnPage ? 1 : 0

    const updatedCount = {
      total: removedOnPage ? Math.max(0, total - 1) : total,
      open: Math.max(0, open - openDelta),
      closed: Math.max(0, closed - closedDelta),
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
    mutationFnWithData: async (recruitmentUuid: string) => {
      await api.delete(`/recruitments/${recruitmentUuid}`)
    },
    updateCacheForUi: updateManageDeleteCache,
    handleSuccess: opts?.onSuccess,
    handleError: opts?.onError,
  })

  return { deleteRecruitmentMutation }
}

export default useManageDeleteMutation
