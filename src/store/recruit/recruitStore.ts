import { create } from 'zustand'
import type { RecruitStoreState } from './_recruitStoreInterface'

const useRecruitStore = create<RecruitStoreState>()((set) => ({
  recruitArray: [],
  setRecruitArray: (recruitArray) => set({ recruitArray }),
  recommendedRecruitArray: [],
  setRecommendedRecruitArray: (recommendedRecruitArray) =>
    set({ recommendedRecruitArray }),
  hasBeenOpened: false,
  setHasBeenOpened: (hasBeenOpened) => set({ hasBeenOpened }),
  searchText: '',
  setSearchText: (searchText) => set({ searchText }),
  selectedTag: null,
  setSelectedTag: (selectedTag) => set({ selectedTag }),
  selectedOrderingInText: '최신순',
  setSelectedOrdingInText: (selectedArrangementInText) =>
    set({ selectedOrderingInText: selectedArrangementInText }),
  debounceValue: '',
  setDebounceValue: (debounceValue) => set({ debounceValue }),

  requestNextPage: () => {},
  setRequestNextPage: (requestNextPage) => set({ requestNextPage }),

  hasNextPage: false,
  setHasNextPage: (hasNextPage) => set({ hasNextPage }),
  totalCount: 0,
  setTotalCount: (totalCount) => set({ totalCount }),
}))

export default useRecruitStore
