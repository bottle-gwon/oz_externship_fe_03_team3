import RecruitDetailContent from '@/components/recruit/detail/RecruitDetailContent'
import RecruitDetailSkeleton from '@/components/recruit/detail/RecruitDetailSkeleton'

const RecruitDetailPage = () => {
  const dummyIsPending = false
  if (dummyIsPending) {
    return <RecruitDetailSkeleton />
  }

  return <RecruitDetailContent />
}

export default RecruitDetailPage
