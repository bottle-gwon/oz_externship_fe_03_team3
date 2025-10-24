import { Folder } from 'lucide-react'
import Select from '../commonInGeneral/select/Select'
import { dummyLectureArray } from './dummyLectureArray'

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

interface LectureCategorySelectProps {
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>
}

const LectureCategorySelect = ({
  setSelectedCategory,
}: LectureCategorySelectProps) => {
  const categoryArray = calcCategoryArray()
  // TODO: push 전에 처음부터 array로 로직 짜기

  return (
    <Select onOptionSelect={(option) => setSelectedCategory(option)}>
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
