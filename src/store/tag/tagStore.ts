import { create } from 'zustand'
import type { TagStoreState } from './_tagStoreInterface'

const useTagStore = create<TagStoreState>()((set, get) => ({
  currentTagArray: [],
  setCurrentTagArray: (currentTagArray) => set({ currentTagArray }),
  deleteCurrentTagArray: (tag: string) => {
    const state = get()
    const prevArray = state.currentTagArray

    if (prevArray.includes(tag)) {
      set({ currentTagArray: prevArray.filter((prev) => prev !== tag) })
    }
  },
  addCurrentTagArray: (tag: string) => {
    const state = get()
    const prevArray = state.currentTagArray

    if (prevArray.length < 5 && !prevArray.includes(tag)) {
      set({ currentTagArray: [...prevArray, tag] })
    }
  },
  tagSearch: '',
  setTagSearch: (tagSearch) => set({ tagSearch }),
}))

export default useTagStore
