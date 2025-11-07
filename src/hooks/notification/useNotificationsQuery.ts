import api from '@/api/api'
import useNotificationStore from '@/store/notification/notificationStore'
import type {
  Notification,
  NotificationsResponseData,
  NotificationTab,
} from '@/types'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

const tabToIsRead: Record<NotificationTab, boolean | null> = {
  all: null,
  read: true,
  unread: false,
}

const useNotificationsQuery = () => {
  const [notificationArray, setNotificationArray] = useState<Notification[]>([])
  const selectedTab = useNotificationStore((state) => state.selectedTab)

  const endpoint = '/notifications'
  const params = { is_read: tabToIsRead[selectedTab] }

  const { data } = useInfiniteQuery({
    queryKey: [endpoint, selectedTab],
    queryFn: async () =>
      (await api.get(endpoint, { params })).data as NotificationsResponseData,
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
  }, [data])

  return { notificationArray }
}

export default useNotificationsQuery
