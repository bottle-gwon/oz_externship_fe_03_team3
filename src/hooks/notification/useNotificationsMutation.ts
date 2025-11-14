import type {
  Notification,
  NotificationsResponseData,
} from '@/types/_notificationInterfaces'
import useSimpleMutation from '../useSimpleMutation'
import api from '@/api/api'
import type { InfiniteData } from '@tanstack/react-query'
import useNotificationStore from '@/store/notification/notificationStore'

const updateOneNotificationCache = (
  previous: InfiniteData<NotificationsResponseData, unknown>,
  newOne: Notification
) => ({
  ...previous,
  pages: previous.pages.map((page) => ({
    ...page,
    results: page.results.map((notification) =>
      notification.id === newOne.id ? newOne : notification
    ),
  })),
})

const updateAllNotificationCache = (
  previous: InfiniteData<NotificationsResponseData, unknown>
) => ({
  ...previous,
  pages: previous.pages.map((page) => ({
    ...page,
    results: page.results.map((notification) => ({
      ...notification,
      is_read: true,
    })),
  })),
})

const useNotificationMutation = () => {
  const selectedTab = useNotificationStore((state) => state.selectedTab)
  const queryEndpoint = '/notifications'

  const postSingleMutation = useSimpleMutation({
    queryKey: [queryEndpoint, selectedTab],
    mutationFnWithData: (data: Notification) =>
      api.post(`${queryEndpoint}/${data.id}/read`),
    updateCacheForUi: updateOneNotificationCache,
  })

  const patchAllMutation = useSimpleMutation({
    queryEndpoint,
    mutationFnWithData: () => api.patch(`${queryEndpoint}/read-all`),
    updateCacheForUi: updateAllNotificationCache,
  })

  return { patchSingleMutation: postSingleMutation, patchAllMutation }
}
export default useNotificationMutation
