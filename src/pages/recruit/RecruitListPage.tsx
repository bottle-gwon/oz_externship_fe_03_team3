import RecruitContent from '@/components/recruit/title/RecruitContent'
import useRecruitsQuery from '@/hooks/recruit/title/useRecruitsQuery'
import RecruitSkeletone from '../../components/recruit/title/RecruitSkeletone'
import UnknwonErrorContent from '@/components/commonInGeneral/error/UnknownErrorContent'
import useRecruitStore from '@/store/recruit/recruitStore'
import { useEffect } from 'react'

const RecruitListPage = () => {
  const { isPending, error } = useRecruitsQuery()
  const hasBeenOpened = useRecruitStore((state) => state.hasBeenOpened)
  const setHasBeenOpened = useRecruitStore((state) => state.setHasBeenOpened)

  useEffect(() => {
    if (isPending || error) {
      return
    }
    setHasBeenOpened(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPending, error])

  if (isPending && !hasBeenOpened) {
    return <RecruitSkeletone />
  }

  if (error && !hasBeenOpened) {
    return <UnknwonErrorContent />
  }

  return <RecruitContent />
}

export default RecruitListPage
