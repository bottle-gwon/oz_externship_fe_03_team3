import useStudyHubStore from '@/store/store'
import RecruitWriteContent from '../RecruitWriteContent'
import { useEffect } from 'react'
import dummyRecruitDetailResponse from '../../detail/_dummyRecruitDetailResponse'

const RecruitEditPage = () => {
  // TODO: url 파라미터 -> 내 공고 api -> editingRecruit에 저장
  // const recruitId = Number(useParams().recruitId)
  const setEditingRecruit = useStudyHubStore((state) => state.setEditingRecruit)

  // TODO: useMyRecruitQuery 여기서 호출해야
  // NOTE: api 연결 후 삭제될 부분입니다
  useEffect(() => {
    setEditingRecruit(dummyRecruitDetailResponse)
  }, [setEditingRecruit])
  // NOTE: ---- 여기까지

  return <RecruitWriteContent />
}

export default RecruitEditPage
