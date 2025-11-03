import { create } from 'zustand'
import type { LectureStoreState } from './_lectureStoreInterfaces'

const useLectureStore = create<LectureStoreState>()((set, get) => ({
  lectureArray: [],
  resetLectureArray: () => set({ lectureArray: [] }),
  appendLectureArray: (lectureArray) => {
    const prev = get().lectureArray
    const newLectureArray = [...prev, ...lectureArray]
    set({ lectureArray: newLectureArray })
  },

  recommendedLectureArray: [],
  setRecommendedLectureArray: (recommendedLectureArray) =>
    set({ recommendedLectureArray }),

  isSearching: false,
  setIsSearching: (isSearching) => set({ isSearching }),
  searchText: '',
  setSearchText: (searchText) => set({ searchText }),
  selectedCategory: null,
  setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
  selectedOrderingInText: '최신순',
  setSelectedOrdingInText: (selectedOrderingInText) =>
    set({ selectedOrderingInText }),
  debounceValue: '',
  setDebounceValue: (debounceValue) => set({ debounceValue }),
}))

export default useLectureStore
