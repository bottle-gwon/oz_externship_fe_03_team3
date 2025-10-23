import useStudyHubStore from '@/store/store'
import Select from '../commonInGeneral/select/Select'
import { dummyLectureArray } from './dummyLectureArray'

// TODO: LECT 카테고리 목록 API & LECT-001 강의 목록 조회 API 연결되면 삭제
const dummyFilterApi = (category: string) => {
  const setLectureArray = useStudyHubStore.getState().setLectureArray
  const filteredLectureArray = dummyLectureArray.filter((lecture) => {
    const nameArray = lecture.categories.map(
      (tempCategory) => tempCategory.name
    )
    return nameArray.includes(category)
  })
  setLectureArray(filteredLectureArray)
}

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

  return categoryRecords
}

const LectureCategorySelect = () => {
  const categoryRecords = calcCategoryArray()
  // TODO: push 전에 처음부터 array로 로직 짜기
  const categoryArray = Object.values(categoryRecords).sort() as string[]

  return (
    <Select onOptionSelect={dummyFilterApi}>
      <Select.Trigger>카테고리 어쩌구</Select.Trigger>
      <Select.Content>
        {categoryArray.map((category) => (
          <Select.Option key={category}>{category}</Select.Option>
        ))}
      </Select.Content>
    </Select>
  )
}

export default LectureCategorySelect
