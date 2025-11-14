import type { Notification, NotificationCounts, NotificationTab } from '@/types'

export interface NotificationStoreState {
  selectedTab: NotificationTab
  setSelectedTab: (selectedTab: NotificationTab) => void

  notificationArray: Notification[]
  setNotificationArray: (notificationArray: Notification[]) => void

  allNotificationArray: Notification[]
  setAllNotificationArray: (notificationArray: Notification[]) => void

  notificationCounts: NotificationCounts | null
  setNotificationCounts: (notificationCounts: NotificationCounts) => void

  error: Error | null
  setError: (error: Error | null) => void
  hasNextPage: boolean
  setHasNextPage: (hasNextPage: boolean) => void
  requestNextPage: () => void
  setRequestNextPage: (requestNextPage: () => void) => void
}
