import RecruitContent from '@/components/recruit/title/RecruitContent'
import useRecruitsQuery from '@/hooks/recruit/title/useRecruitsQuery'
import RecruitListSkeletone from '../../components/recruit/title/RecruitListSkeletone'

const RecruitListPage = () => {
  const { isPending } = useRecruitsQuery()

  if (isPending) {
    return <RecruitListSkeletone />
  }
  return <RecruitContent />
}

export default RecruitListPage
