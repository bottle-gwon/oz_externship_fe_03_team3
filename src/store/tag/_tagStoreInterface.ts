export interface TagStoreState {
  currentTagArray: string[]
  setCurrentTagArray: (currentTagArray: string[]) => void
  addCurrentTagArray: (tag: string) => void
  deleteCurrentTagArray: (tag: string) => void
  tagSearch: string
  setTagSearch: (tagSearch: string) => void
}
