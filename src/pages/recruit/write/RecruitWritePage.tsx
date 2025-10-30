import RecruitWriteContent from '@/components/recruit/write/RecruitWriteContent'
import RecruitWriteSkeleton from '@/components/recruit/write/RecruitWriteSkeleton'

const RecruitWritePage = () => {
  const isPending = false
  if (isPending) {
    return <RecruitWriteSkeleton />
  }

  return <RecruitWriteContent />
}

export default RecruitWritePage
