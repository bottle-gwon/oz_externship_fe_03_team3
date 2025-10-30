import RecruitDetailContent from '@/components/recruit/detail/RecruitDetailContent'
import RecruitDetailSkeleton from '@/components/recruit/detail/RecruitDetailSkeleton'
import { useParams } from 'react-router'
import dummyRecruitDetailResponse from './_dummyRecruitDetailResponse'

const RecruitDetailPage = () => {
  const params = useParams()
  const recuitId = Number(params.recruitId)

  // TODO: api 연결하면 api로 받아오고 이걸 삭제해야 함
  // NOTE: 401만 가능합니다
  const recruitDetail = dummyRecruitDetailResponse
  if (recruitDetail.id !== recuitId) {
    return <p>404 PLACEHOLDER</p>
  }

  const dummyIsPending = false
  if (dummyIsPending) {
    return <RecruitDetailSkeleton />
  }

  return <RecruitDetailContent recruitDetail={recruitDetail} />
}

export default RecruitDetailPage
