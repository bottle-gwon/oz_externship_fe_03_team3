import RecruitDetailContent from '@/components/recruit/detail/RecruitDetailContent'
import RecruitDetailSkeleton from '@/components/recruit/detail/RecruitDetailSkeleton'
import useRecruitDetailQuery from '@/hooks/recruitDetail/useRecruitDetailQuery'
import useStudyHubStore from '@/store/store'
import { useParams } from 'react-router'

const RecruitDetailPage = () => {
  const me = useStudyHubStore((state) => state.me)
  const params = useParams()
  const recruitId = Number(params.recruitId)

  const { data, isPending, error } = useRecruitDetailQuery(recruitId)

  if (isPending) {
    return <RecruitDetailSkeleton />
  }

  if (error || !data) {
    return (
      // TODO: 여기 적당한 것으로 교체해야 함
      <p>오류가 나면 이게 보입니다. 여기를 대체할 컴포넌트를 만들어야 합니다</p>
    )
  }

  const isMine = me && me.nickname === data.author_nickname
  return <RecruitDetailContent recruitDetail={data} isMine={isMine ?? false} />
}

export default RecruitDetailPage
