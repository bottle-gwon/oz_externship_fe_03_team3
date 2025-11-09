type Load = 'paginating' | 'searching' | 'pending' | 'false'

export interface TagStoreState {
  currentTagArray: string[]
  setCurrentTagArray: (currentTagArray: string[]) => void
  addCurrentTagArray: (tag: string) => void
  deleteCurrentTagArray: (tag: string) => void

  // 검색
  tagSearchInput: string
  setTagSearchInput: (tagSearchInput: string) => void
  tagSearchKeyword: string
  setTagSearchKeyword: (tagSearch: string) => void

  //신규 태그 추가
  addTagMutate: ((newTag: string) => void) | undefined
  setAddTagMutation: (mutateFn: ((newTag: string) => void) | undefined) => void

  //페이지
  page: number
  setPage: (newPage: number) => void
  totalPage: number
  setTotalPage: (newTotal: number) => void

  //태그 모달 로딩
  tagListLoading: Load
  setTagListLoading: (LoadingStatus: Load) => void
}
