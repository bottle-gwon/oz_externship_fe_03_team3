import { textToLectureOrdering } from '@/utils/simpleMaps'
import Select from '../commonInGeneral/select/Select'
import { lectureOrderingInTextArray, type LectureOrderingInText } from '@/types'
import { useState } from 'react'

const LectureOrderingSelect = () => {
  const [selectedOrdering, setSelectedOrdering] =
    useState<LectureOrderingInText>('최신순')
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
