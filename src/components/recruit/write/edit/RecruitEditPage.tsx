import useStudyHubStore from '@/store/store'
import { useParams } from 'react-router'
import RecruitWriteContent from '../RecruitWriteContent'
import { useEffect } from 'react'
import { mockRecruits } from '@/testRoutes/testPages/nari/_TestMokData'

const RecruitEditPage = () => {
  // NOTE: 101로 하면 될 겁니다
  const recruitId = Number(useParams().recruitId)
  const setEditingRecruit = useStudyHubStore((state) => state.setEditingRecruit)

  // TODO: useMyRecruitQuery 여기서 호출해야
  // NOTE: api 연결 후 삭제될 부분입니다
  const recruitArray = useStudyHubStore((state) => state.recruitArray)
  const setRecruitArray = useStudyHubStore((state) => state.setRecruitArray)
  const result = recruitArray.find((recruit) => recruit.id === recruitId)
  useEffect(() => {
    setRecruitArray(mockRecruits)
  }, [setRecruitArray])
  // NOTE: ---- 여기까지

  if (!result) {
    return <p>이건 생각 못 했는데...</p>
  }

  setEditingRecruit(result)

  return <RecruitWriteContent />
}

export default RecruitEditPage
