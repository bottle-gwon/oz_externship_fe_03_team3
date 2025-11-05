import api from '@/api/api'
import RecruitDetailContent from '@/components/recruit/detail/RecruitDetailContent'
import RecruitDetailSkeleton from '@/components/recruit/detail/RecruitDetailSkeleton'
import useStudyHubStore from '@/store/store'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

const RecruitDetailPage = () => {
  const me = useStudyHubStore((state) => state.me)
  const params = useParams()
  const recruitId = Number(params.recruitId)

  const endpoint = `/recruitments/${recruitId}/`
  const { data, isPending, error } = useQuery({
    queryKey: [endpoint],
    queryFn: async () => (await api.get(endpoint)).data,
  })

  if (isPending) {
    return <RecruitDetailSkeleton />
  }

  if (error) {
    return (
      <p>오류가 나면 이게 보입니다. 여기를 대체할 컴포넌트를 만들어야 합니다</p>
    )
  }

  const isMine = me && me.nickname === data.author
  return <RecruitDetailContent recruitDetail={data} isMine={isMine ?? false} />
}

export default RecruitDetailPage
