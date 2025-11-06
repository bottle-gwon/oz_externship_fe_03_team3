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

  // 검색
  tagSearchInput: '',
  setTagSearchInput: (tagSearchInput) => set({ tagSearchInput }),
  tagSearchKeyword: '',
  setTagSearchKeyword: (tagSearchKeyword) => set({ tagSearchKeyword }),

  //신규 태그 추가
  addTagMutate: undefined,
  setAddTagMutation: (addTagMutate) => set({ addTagMutate }),

  //페이지
  page: 1,
  setPage: (page) => set({ page }),
  totalPage: 1,
  setTotalPage: (totalPage) => set({ totalPage }),

  //태그 모달 로딩
  tagListLoading: 'false',
  setTagListLoading: (tagListLoading) => set({ tagListLoading }),
}))

export default useTagStore
