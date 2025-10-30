import RecruitDetailSkeleton from '@/components/recruit/detail/RecruitDetailSkeleton'
import RecruitWriteContent from '@/components/recruit/write/RecruitWriteContent'
import { useParams } from 'react-router'

const RecruitWritePage = () => {
  const recruitId = useParams().recuitId

  const isPending = false
  if (isPending) {
    return <RecruitDetailSkeleton />
  }
  return <RecruitWriteContent recruitId={recruitId} />
}

export default RecruitWritePage
