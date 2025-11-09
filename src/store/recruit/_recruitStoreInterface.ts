import type { Recruit, RecruitArrangementInText } from '@/types'

export interface RecruitStoreState {
  recruitArray: Recruit[]
  setRecruitArray: (recruitArray: Recruit[]) => void
  recommendedRecruitArray: Recruit[]
  setRecommendedRecruitArray: (recommendedRecruitArray: Recruit[]) => void

  isSearching: boolean
  setIsSearching: (isSearching: boolean) => void
  searchText: string
  setSearchText: (searchText: string) => void
  selectedTag: string | null
  setSelectedTag: (selectedTag: string | null) => void
  selectedArrangementInText: RecruitArrangementInText
  setSelectedOrdingInText: (
    selectedArrangementInText: RecruitArrangementInText
  ) => void
  debounceValue: string
  setDebounceValue: (debounceValue: string) => void

  requestNextPage: () => void
  setRequestNextPage: (requestNextPage: () => void) => void
}
