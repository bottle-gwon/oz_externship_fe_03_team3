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

  requestNextPage: () => {},
  setRequestNextPage: (requestNextPage) => set({ requestNextPage }),
}))

export default useNotificationStore
