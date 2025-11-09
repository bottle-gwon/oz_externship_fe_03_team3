import type {
  Recruit,
  RecruitArrangementInText,
  RecruitConditionInText,
} from '@/types'

export interface RecruitManageStoreState {
  recruitManageArray: Recruit[]
  setRecruitManageArray: (recruitManageArray: Recruit[]) => void
  appendRecruitManageArray: (recruitManageArray: Recruit[]) => void
  selectedStatusInText: RecruitConditionInText
  setSelectedStatusInText: (
    selectedStatusInText: RecruitConditionInText
  ) => void
  selectedOrderingInText: RecruitArrangementInText
  setSelectedOrderingInText: (
    selectedOrderingInText: RecruitArrangementInText
  ) => void
  debounceValue: string
  setDebounceValue: (debounceValue: string) => void

  requestNextPage: () => void
  setRequestNextPage: (requestNextPage: () => void) => void

  count: { total: number; open: number; closed: number }
  setCount: (count: { total: number; open: number; closed: number }) => void
}
