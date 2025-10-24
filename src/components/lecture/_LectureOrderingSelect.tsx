import Select from '../commonInGeneral/select/Select'
import { lectureOrderingInTextArray, type LectureOrderingInText } from '@/types'
import SortIcon from '@/assets/sort.svg'

interface LectureOrderingSelectProps {
  setSelectedOrderingInText: React.Dispatch<
    React.SetStateAction<LectureOrderingInText>
  >
}

const LectureOrderingSelect = ({
  setSelectedOrderingInText,
}: LectureOrderingSelectProps) => {
  return (
    <Select
      onOptionSelect={(option) =>
        setSelectedOrderingInText(option as LectureOrderingInText)
      }
    >
      <Select.Trigger icon={<img src={SortIcon} />}>최신순</Select.Trigger>
      <Select.Content>
        {lectureOrderingInTextArray.map((orderingInText) => (
          <Select.Option key={orderingInText}>{orderingInText}</Select.Option>
        ))}
      </Select.Content>
    </Select>
  )
}

export default LectureOrderingSelect
