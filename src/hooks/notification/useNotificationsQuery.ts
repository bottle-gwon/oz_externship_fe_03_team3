import api from '@/api/api'
import queryClient from '@/lib/tanstackQueryClient'
import useNotificationStore from '@/store/notification/notificationStore'
import type {
  Notification,
  NotificationsResponseData,
  NotificationTab,
} from '@/types'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

const endpoint = '/notifications'

const tabToIsRead: Record<NotificationTab, boolean | null> = {
  total: null,
  read: true,
  unread: false,
}

const getNotifications = async (params: object, pageParam: number) => {
  const state = useNotificationStore.getState()
  const selectedTab = state.selectedTab
  const allNotificationArray = state.allNotificationArray
  const setNotificationArray = state.setNotificationArray

  const previous = queryClient.getQueryData([endpoint, selectedTab])
  if (!previous) {
    const filteredNotificationArray = allNotificationArray.filter(
      (notification) => notification.is_read === tabToIsRead[selectedTab]
    )
    setNotificationArray(filteredNotificationArray)
  }

  const response = await api.get(endpoint, {
    params: { ...params, page: pageParam },
  })
  return response.data as NotificationsResponseData
}

const useNotificationsQuery = () => {
  const selectedTab = useNotificationStore((state) => state.selectedTab)
  const setNotificationArray = useNotificationStore(
    (state) => state.setNotificationArray
  )
  const setAllNotificationArray = useNotificationStore(
    (state) => state.setAllNotificationArray
  )
  const setNotificationCounts = useNotificationStore(
    (state) => state.setNotificationCounts
  )

  const params = { is_read: tabToIsRead[selectedTab] }

  const { data, isPending, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: [endpoint, selectedTab],
      queryFn: ({ pageParam }) => getNotifications(params, pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage, _allPages, lastPageParam) =>
        lastPage.next ? lastPageParam + 1 : null,
    })

  useEffect(() => {
    // data의 초깃값은 undefined입니다. 이는 무시합니다
    if (!data) {
      return
    }

    // NOTE: 캐시로 받는 데이터는 페이지별로 구분된 이중 배열로 들어가 있습니다.
    // NOTE: 그리고 이는 data.pages에 저장되어 있습니다
    // NOTE: data.pages = [ [{...}, {...}], [{...}, {...}], [{...}, {...}] ]
    const reducedArray = data.pages.reduce((acc: Notification[], page) => {
      return [...acc, ...page.results]
    }, [])
    setNotificationArray(reducedArray)

    if (selectedTab === 'total') {
      setAllNotificationArray(reducedArray)
    }

    const counts = data.pages[0].counts
    setNotificationCounts(counts)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return { isPending, error, hasNextPage, fetchNextPage }
}

export default useNotificationsQuery
