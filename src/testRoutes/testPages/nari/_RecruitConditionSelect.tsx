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
}

const _RecruitConditionSelect = ({
  setRecruitConditionSelectProps,
  selectedCondition = '전체',
}: RecruitConditionSelectProps) => {
  return (
    <Select
      onOptionSelect={(option) =>
        setRecruitConditionSelectProps(option as RecruitConditionInText)
      }
    >
      <Select.Trigger>{selectedCondition}</Select.Trigger>
      <Select.Content>
        {recruitConditionInTextArray.map((conditionInText) => (
          <Select.Option key={conditionInText}>{conditionInText}</Select.Option>
        ))}
      </Select.Content>
    </Select>
  )
}

export default _RecruitConditionSelect
