import api from '@/api/api'
import type {
  Notification,
  NotificationsResponseData,
} from '@/types/_notificationInterfaces'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

const useNotificationsQuery = () => {
  const [notificationArray, setNotificationArray] = useState<Notification[]>([])
  const endpoint = '/notifications'
  const { data } = useInfiniteQuery({
    queryKey: [endpoint],
    queryFn: async () =>
      (await api.get(endpoint)).data as NotificationsResponseData,
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
