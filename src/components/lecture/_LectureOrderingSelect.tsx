import Select from '../commonInGeneral/select/Select'
import { lectureOrderingInTextArray, type LectureOrderingInText } from '@/types'

interface LectureOrderingSelect {
  setSelectedOrderingInText: React.Dispatch<
    React.SetStateAction<LectureOrderingInText>
  >
}

const LectureOrderingSelect = () => {
  return (
    <Select onOptionSelect={() => {}}>
      <Select.Trigger>최신순</Select.Trigger>
      <Select.Content>
        {lectureOrderingInTextArray.map((orderingInText) => (
          <Select.Option key={orderingInText}>{orderingInText}</Select.Option>
        ))}
      </Select.Content>
    </Select>
  )
}

export default LectureOrderingSelect
