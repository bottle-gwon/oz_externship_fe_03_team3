import useStudyHubStore from '@/store/store'
import { useMemo } from 'react'

const useMemoCategoryRecords = () => {
  const lectureArray = useStudyHubStore((state) => state.lectureArray)
  const categoryRecords = useMemo(() => {
    return lectureArray.reduce((outerAcc, lecture) => {
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
  }, [lectureArray])

  return categoryRecords
}

const LectureCategorySelect = () => {
  const categoryRecords = useMemoCategoryRecords()
  return <div>{JSON.stringify(categoryRecords)}</div>
}

export default LectureCategorySelect
