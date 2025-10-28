import Select from '@/components/commonInGeneral/select/Select'
import {
  recruitArrangementInTextArray,
  type RecruitArrangementInText,
} from '@/types'

interface RecruitManageSelectProps {
  selectedArrangement: RecruitArrangementInText
  setRecruitArrangementInText: React.Dispatch<
    React.SetStateAction<RecruitArrangementInText>
  >
}

const RecruitManageSelect = ({
  selectedArrangement,
  setRecruitArrangementInText,
}: RecruitManageSelectProps) => {
  return (
    <Select
      onOptionSelect={(option) =>
        setRecruitArrangementInText(option as RecruitArrangementInText)
      }
    >
      <Select.Trigger>{selectedArrangement}</Select.Trigger>
      <Select.Content>
        {recruitArrangementInTextArray.map((arrangementInText) => (
          <Select.Option key={arrangementInText}>
            {arrangementInText}
          </Select.Option>
        ))}
      </Select.Content>
    </Select>
  )
}

export default RecruitManageSelect
