import type { Replacing } from '@/types'

export interface RecruitWriteStoreState {
  insertingTextArray: string[]
  setInsertingTextArray: (insertingTextArray: string[]) => void

  replacingArray: Replacing[]
  setReplacingArray: (replacingArray: Replacing[]) => void
}
