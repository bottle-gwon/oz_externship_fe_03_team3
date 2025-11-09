import { Vstack } from '@/components/commonInGeneral/layout'
import Select from '@/components/commonInGeneral/select/Select'
import useRecruitManageStore from '@/store/recruit/manage/recruitManageStore'
import { type RecruitConditionInText } from '@/types'

const RecruitManageStatusSelect = () => {
  const selectedStatusInText = useRecruitManageStore(
    (state) => state.selectedStatusInText
  )
  const setSelectedStatusInText = useRecruitManageStore(
    (state) => state.setSelectedStatusInText
  )
  const count = useRecruitManageStore((state) => state.count)

  const total = count?.total ?? 0
  const open = count?.open ?? 0
  const closed = count?.closed ?? 0

  const conditionTriggerLabel =
    selectedStatusInText === '전체'
      ? `전체 (${count.total})`
      : selectedStatusInText === '모집중'
        ? `모집중 (${count.open})`
        : `마감됨 (${count.closed})`

  return (
    <Vstack gap="none" className="w-full">
      <p className="mb-oz-sm">상태</p>
      <Select
        onOptionSelect={(option) =>
          setSelectedStatusInText(option as RecruitConditionInText)
        }
      >
        <Select.Trigger>{conditionTriggerLabel}</Select.Trigger>

        <Select.Content>
          <Select.Option value="전체">{`전체 (${total})`}</Select.Option>
          <Select.Option value="모집중">{`모집중 (${open})`}</Select.Option>
          <Select.Option value="마감됨">{`마감됨 (${closed})`}</Select.Option>
        </Select.Content>
      </Select>
    </Vstack>
  )
}

export default RecruitManageStatusSelect
