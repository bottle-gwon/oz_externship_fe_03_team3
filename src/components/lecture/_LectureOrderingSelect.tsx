import Select from '../commonInGeneral/select/Select'
import { lectureOrderingInTextArray, type LectureOrderingInText } from '@/types'
import SortIcon from '@/assets/sort.svg'
import useLectureStore from '@/store/lecture/lectureStore'
import { textToLectureOrdering } from '@/utils/simpleMaps'

const LectureOrderingSelect = () => {
  const selectedOrderingInText = useLectureStore(
    (state) => state.selectedOrderingInText
  )
  const setSelectedOrderingInText = useLectureStore(
    (state) => state.setSelectedOrdingInText
  )

  return (
    <Select
      onOptionSelect={(option) =>
        setSelectedOrderingInText(option as LectureOrderingInText)
      }
      value={textToLectureOrdering[selectedOrderingInText]}
      label={selectedOrderingInText}
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
