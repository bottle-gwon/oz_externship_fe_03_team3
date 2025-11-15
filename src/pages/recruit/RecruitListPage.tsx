import RecruitContent from '@/components/recruit/title/RecruitContent'
import useRecruitsQuery from '@/hooks/recruit/title/useRecruitsQuery'
import RecruitSkeletone from '../../components/recruit/title/RecruitSkeletone'
import UnknwonErrorContent from '@/components/commonInGeneral/error/UnknownErrorContent'
import useRecruitStore from '@/store/recruit/recruitStore'

const RecruitListPage = () => {
  const { isPending, error } = useRecruitsQuery()
  const recruitArray = useRecruitStore((state) => state.recruitArray)

  if (isPending && recruitArray.length === 0) {
    return <RecruitSkeletone />
  }

  if (error) {
    return <UnknwonErrorContent />
  }

  return <RecruitContent />
}

export default RecruitListPage
