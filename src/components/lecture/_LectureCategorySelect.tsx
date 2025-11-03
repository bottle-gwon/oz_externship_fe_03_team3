import { Folder } from 'lucide-react'
import Select from '../commonInGeneral/select/Select'
import { dummyLectureArray } from './dummyLectureArray'
import useLectureStore from '@/store/lecture/lectureStore'

const calcCategoryArray = () => {
  const categoryRecords = dummyLectureArray.reduce((outerAcc, lecture) => {
    const dict = lecture.categories.reduce(
      (innerAcc: Record<number, string>, category) => {
        innerAcc[category.id] = category.name
        return innerAcc
      },
      {}
    )

    const newOuterAcc = { ...outerAcc, ...dict }
    return newOuterAcc
  }, {})

  const categoryArray = Object.values(categoryRecords).sort() as string[]
  return categoryArray
}

const LectureCategorySelect = () => {
  const setSelectedCategory = useLectureStore(
    (state) => state.setSelectedCategory
  )
  const categoryArray = calcCategoryArray()
  // TODO: API 연결하면 calc... 와 교체하기

  const handleOptionSelect = (option: string | number) => {
    if (typeof option !== 'string') {
      throw new Error('---- 카테고리는 스트링이어야 합니다!')
    }
    setSelectedCategory(option)
  }

  return (
    <Select onOptionSelect={handleOptionSelect}>
      <Select.Trigger icon={<Folder size={16} />}>전체 카테고리</Select.Trigger>
      <Select.Content>
        <Select.Option>전체 카테고리</Select.Option>
        {categoryArray.map((category) => (
          <Select.Option key={category}>{category}</Select.Option>
        ))}
      </Select.Content>
    </Select>
  )
}

export default LectureCategorySelect
