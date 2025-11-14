import { create } from 'zustand'
import type { NotificationStoreState } from './_notificationStoreInterfaces'

const useNotificationStore = create<NotificationStoreState>()((set, _get) => ({
  selectedTab: 'total',
  setSelectedTab: (selectedTab) => set({ selectedTab }),

  notificationArray: [],
  setNotificationArray: (notificationArray) => set({ notificationArray }),

  allNotificationArray: [],
  setAllNotificationArray: (allNotificationArray) =>
    set({ allNotificationArray }),

  notificationCounts: null,
  setNotificationCounts: (notificationCounts) => set({ notificationCounts }),

  error: null,
  setError: (error) => set({ error }),
  hasNextPage: false,
  setHasNextPage: (hasNextPage) => set({ hasNextPage }),
  requestNextPage: () => {},
  setRequestNextPage: (requestNextPage) => set({ requestNextPage }),
}))

export default useNotificationStore
