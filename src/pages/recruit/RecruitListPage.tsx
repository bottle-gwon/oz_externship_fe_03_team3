import RecruitContent from '@/components/recruit/title/RecruitContent'
import useRecruitsQuery from '@/hooks/recruit/title/useRecruitsQuery'
import RecruitSkeletone from '../../components/recruit/title/RecruitSkeletone'

const RecruitListPage = () => {
  const { isPending } = useRecruitsQuery()

  if (isPending) {
    return <RecruitSkeletone />
  }
  return <RecruitContent />
}

export default RecruitListPage
