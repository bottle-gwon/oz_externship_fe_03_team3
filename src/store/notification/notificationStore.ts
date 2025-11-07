import { create } from 'zustand'
import type { NotificationStoreState } from './_notificationStoreInterfaces'

const useNotificationStore = create<NotificationStoreState>()((set, _get) => ({
  selectedTab: 'all',
  setSelectedTab: (selectedTab) => set({ selectedTab }),
}))

export default useNotificationStore
