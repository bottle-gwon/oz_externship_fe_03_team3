import { create } from 'zustand'
import type { NotificationStoreState } from './_notificationStoreInterfaces'

const useNotificationStore = create<NotificationStoreState>()((set, _get) => ({
  selectedTab: 'all',
  setSelectedTab: (selectedTab) => set({ selectedTab }),

  notificationArray: [],
  setNotificationArray: (notificationArray) => set({ notificationArray }),

  allNotificationArray: [],
  setAllNotificationArray: (allNotificationArray) =>
    set({ allNotificationArray }),

  notificationCounts: null,
  setNotificationCounts: (notificationCounts) => set({ notificationCounts }),
}))

export default useNotificationStore
