import type { Lecture, LectureOrderingInText } from '@/types'

export interface LectureStoreState {
  lectureArray: Lecture[]
  resetLectureArray: () => void
  appendLectureArray: (lectureArray: Lecture[]) => void
  recommendedLectureArray: Lecture[]
  setRecommendedLectureArray: (recommendedLectureArray: Lecture[]) => void

  isSearching: boolean
  setIsSearching: (isSearching: boolean) => void
  searchText: string
  setSearchText: (searchText: string) => void
  selectedCategory: string | null
  setSelectedCategory: (selectedCategory: string | null) => void
  selectedOrderingInText: LectureOrderingInText
  setSelectedOrdingInText: (
    selectedOrderingInText: LectureOrderingInText
  ) => void
  debounceValue: string
  setDebounceValue: (debounceValue: string) => void

  requestNextPage: () => void
  setRequestNextPage: (requestNextPage: () => void) => void
}
