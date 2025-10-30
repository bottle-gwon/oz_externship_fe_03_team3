import useStudyHubStore from '@/store/store'
import { useParams } from 'react-router'
import RecruitWriteContent from '../RecruitWriteContent'
import { useEffect } from 'react'
import { mockRecruits } from '@/testRoutes/testPages/nari/_TestMokData'

const RecruitEditPage = () => {
  // NOTE: 101로 하면 될 겁니다
  const recruitId = Number(useParams().recruitId)

  // TODO: useMyRecruitQuery 여기서 호출해야

  const recruitArray = useStudyHubStore((state) => state.recruitArray)
  const setRecruitArray = useStudyHubStore((state) => state.setRecruitArray)
  const editingRecruit = recruitArray.find(
    (recruit) => recruit.id === recruitId
  )

  useEffect(() => {
    setRecruitArray(mockRecruits)
  }, [])

  if (!editingRecruit) {
    return <p>이건 생각 못 했는데...</p>
  }

  return <RecruitWriteContent editingRecruit={editingRecruit} />
}

export default RecruitEditPage
