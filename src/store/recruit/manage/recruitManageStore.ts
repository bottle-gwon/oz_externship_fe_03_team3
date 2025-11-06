import { create } from 'zustand'
import type { RecruitManageStoreState } from './_recruitManageStoreInterface'

const useRecruitManageStore = create<RecruitManageStoreState>()((set, get) => ({
  recruitManageArray: [],
  setRecruitManageArray: (recruitManageArray) => set({ recruitManageArray }),
  appendRecruitManageArray: (recruitManageArray) => {
    const prev = get().recruitManageArray
    const newRecruitManageArray = [...prev, ...recruitManageArray]
    set({ recruitManageArray: newRecruitManageArray })
  },
  selectedStatusInText: '전체',
  setSelectedStatusInText: (selectedStatusInText) =>
    set({ selectedStatusInText }),

  selectedOrderingInText: '최신순',
  setSelectedOrderingInText: (selectedOrderingInText) =>
    set({ selectedOrderingInText }),
  debounceValue: '',
  setDebounceValue: (debounceValue) => set({ debounceValue }),
  requestNextPage: () => {},
  setRequestNextPage: (requestNextPage) => set({ requestNextPage }),
}))

export default useRecruitManageStore
