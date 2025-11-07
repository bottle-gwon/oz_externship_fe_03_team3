import type { Notification, NotificationTab } from '@/types'

export interface NotificationStoreState {
  selectedTab: NotificationTab
  setSelectedTab: (selectedTab: NotificationTab) => void

  notificationArray: Notification[]
  setNotificationArray: (notificationArray: Notification[]) => void

  allNotificationArray: Notification[]
  setAllNotificationArray: (notificationArray: Notification[]) => void

  requestNextPage: () => void
  setRequestNextPage: (requestNextPage: () => void) => void
}
