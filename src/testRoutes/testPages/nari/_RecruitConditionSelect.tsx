import Select from '@/components/commonInGeneral/select/Select'
import {
  recruitConditionInTextArray,
  type RecruitConditionInText,
} from '@/types'

interface RecruitConditionSelectProps {
  setRecruitConditionSelectProps: React.Dispatch<
    React.SetStateAction<RecruitConditionInText>
  >
  selectedCondition?: RecruitConditionInText
  triggerLabel?: string
}

const RecruitConditionSelect = ({
  setRecruitConditionSelectProps,
  selectedCondition = '전체',
  triggerLabel,
}: RecruitConditionSelectProps) => {
  return (
    <Select
      onOptionSelect={(option) =>
        setRecruitConditionSelectProps(option as RecruitConditionInText)
      }
    >
      <Select.Trigger>{triggerLabel ?? selectedCondition}</Select.Trigger>
      <Select.Content>
        {recruitConditionInTextArray.map((conditionInText) => (
          <Select.Option key={conditionInText}>{conditionInText}</Select.Option>
        ))}
      </Select.Content>
    </Select>
  )
}

export default RecruitConditionSelect
