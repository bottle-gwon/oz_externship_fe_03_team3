import { Vstack } from '@/components/commonInGeneral/layout'
import Select from '@/components/commonInGeneral/select/Select'
import {
  recruitArrangementInTextArray,
  type RecruitArrangementInText,
} from '@/types'

interface RecruitArrangementSelectProps {
  setSelectedArrangementInText: React.Dispatch<
    React.SetStateAction<RecruitArrangementInText>
  >
}

const RecruitArrangementSelect = ({
  setSelectedArrangementInText,
}: RecruitArrangementSelectProps) => {
  return (
    <Vstack gap="none" className="w-full">
      <p className="mb-oz-sm">정렬</p>
      <Select
        onOptionSelect={(option) =>
          setSelectedArrangementInText(option as RecruitArrangementInText)
        }
      >
        <Select.Trigger>최신순</Select.Trigger>
        <Select.Content>
          {recruitArrangementInTextArray.map((arrangementInText) => (
            <Select.Option key={arrangementInText}>
              {arrangementInText}
            </Select.Option>
          ))}
        </Select.Content>
      </Select>
    </Vstack>
  )
}

export default RecruitArrangementSelect
