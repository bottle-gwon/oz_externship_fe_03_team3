import type { NotificationTab } from '@/types'

export interface NotificationStoreState {
  selectedTab: NotificationTab
  setSelectedTab: (selectedTab: NotificationTab) => void
}
