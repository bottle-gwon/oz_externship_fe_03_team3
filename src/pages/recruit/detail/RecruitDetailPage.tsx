import NotFoundContent from '@/components/commonInGeneral/error/NotFoundContent'
import RecruitDetailContent from '@/components/recruit/detail/RecruitDetailContent'
import RecruitDetailSkeleton from '@/components/recruit/detail/RecruitDetailSkeleton'
import useRecruitDetailQuery from '@/hooks/recruitDetail/useRecruitDetailQuery'
import useStudyHubStore from '@/store/store'
import { useParams } from 'react-router'

const RecruitDetailPage = () => {
  const me = useStudyHubStore((state) => state.me)
  const params = useParams()
  const recruitUuid = params.recruitUuid ?? ''

  const { data, isPending, error } = useRecruitDetailQuery(recruitUuid)

  if (isPending) {
    return <RecruitDetailSkeleton />
  }

  if (error || !data) {
    return <NotFoundContent path="/recruit" label="구인 공고로" />
  }

  const isMine = me && me.nickname === data.author_nickname
  return <RecruitDetailContent recruitDetail={data} isMine={isMine ?? false} />
}

export default RecruitDetailPage
