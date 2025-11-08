import { create } from 'zustand'
import type { RecruitWriteStoreState } from './_recruitWriteStoreInterfaces'

const useRecruitWriteStore = create<RecruitWriteStoreState>()((set, _get) => ({
  insertingTextArray: [],
  setInsertingTextArray: (insertingTextArray) => set({ insertingTextArray }),

  replacingArray: [],
  setReplacingArray: (replacingArray) => set({ replacingArray }),
}))

export default useRecruitWriteStore
