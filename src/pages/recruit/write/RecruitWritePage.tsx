import RecruitWriteContent from '@/components/recruit/write/RecruitWriteContent'
import RecruitWriteSkeleton from '@/components/recruit/write/RecruitWriteSkeleton'
import { useParams } from 'react-router'

const RecruitWritePage = () => {
  const params = useParams()
  const recruitId = params.recruitId

  const isPending = false
  if (isPending) {
    return <RecruitWriteSkeleton />
  }

  if (!recruitId) {
    return <RecruitWriteContent />
  }

  return <RecruitWriteContent />
}

export default RecruitWritePage
