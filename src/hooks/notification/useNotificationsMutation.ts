import type {
  Notification,
  NotificationsResponseData,
} from '@/types/_notificationInterfaces'
import useSimpleMutation from '../useSimpleMutation'
import api from '@/api/api'
import type { InfiniteData } from '@tanstack/react-query'

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
  const queryEndpoint = '/notifications'
  const readSingleMutation = useSimpleMutation({
    queryEndpoint,
    mutationFnWithData: (data: Notification) =>
      api.patch(`${queryEndpoint}/${data.id}/read`),
    updateCacheForUi: updateOneNotificationCache,
  })

  const readAllMutation = useSimpleMutation({
    queryEndpoint,
    mutationFnWithData: () => api.patch(`${queryEndpoint}/read-all`),
    updateCacheForUi: updateAllNotificationCache,
  })

  return { readSingleMutation, readAllMutation }
}
export default useNotificationMutation
