import dummyRecruitDetailResponse from '@/components/recruit/detail/_dummyRecruitDetailResponse'
import RecruitDetailContent from '@/components/recruit/detail/RecruitDetailContent'
import RecruitDetailSkeleton from '@/components/recruit/detail/RecruitDetailSkeleton'
import useStudyHubStore from '@/store/store'
// import { useParams } from 'react-router'

const RecruitDetailPage = () => {
  const me = useStudyHubStore((state) => state.me)
  // const params = useParams()
  // const recuitId = Number(params.recruitId)

  // TODO: api 연결하면 api로 받아오고 이걸 삭제해야 함
  const recruitDetail = dummyRecruitDetailResponse
  const dummyIsPending = false
  // ---- 여기까지

  const isMine = me && me.nickname === recruitDetail.author_nickname

  if (dummyIsPending) {
    return <RecruitDetailSkeleton />
  }

  return (
    <RecruitDetailContent
      recruitDetail={recruitDetail}
      isMine={isMine ?? false}
    />
  )
}

export default RecruitDetailPage
