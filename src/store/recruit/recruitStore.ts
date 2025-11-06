import { create } from 'zustand'
import type { RecruitStoreState } from './_recruitStoreInterface'

const useRecruitStore = create<RecruitStoreState>()((set) => ({
  recruitArray: [],
  setRecruitArray: (recruitArray) => set({ recruitArray }),
  recommendedRecruitArray: [],
  setRecommendedRecruitArray: (recommendedRecruitArray) =>
    set({ recommendedRecruitArray }),
  isSearching: false,
  setIsSearching: (isSearching) => set({ isSearching }),
  searchText: '',
  setSearchText: (searchText) => set({ searchText }),
  selectedTag: null,
  setSelectedTag: (selectedTag) => set({ selectedTag }),
  selectedArrangementInText: '최신순',
  setSelectedOrdingInText: (selectedArrangementInText) =>
    set({ selectedArrangementInText }),
  debounceValue: '',
  setDebounceValue: (debounceValue) => set({ debounceValue }),

  requestNextPage: () => {},
  setRequestNextPage: (requestNextPage) => set({ requestNextPage }),
}))

export default useRecruitStore
