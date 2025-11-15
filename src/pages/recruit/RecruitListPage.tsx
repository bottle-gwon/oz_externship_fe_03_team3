import RecruitContent from '@/components/recruit/title/RecruitContent'
import useRecruitsQuery from '@/hooks/recruit/title/useRecruitsQuery'
import RecruitSkeletone from '../../components/recruit/title/RecruitSkeletone'
import UnknwonErrorContent from '@/components/commonInGeneral/error/UnknownErrorContent'

const RecruitListPage = () => {
  const { isPending, error } = useRecruitsQuery()

  if (isPending) {
    return <RecruitSkeletone />
  }

  if (error) {
    return <UnknwonErrorContent />
  }

  return <RecruitContent />
}

export default RecruitListPage
