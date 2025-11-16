import UnknwonErrorContent from '@/components/commonInGeneral/error/UnknownErrorContent'
import LectureContent from '@/components/lecture/LectureContent'
import LectureSkeleton from '@/components/lecture/LectureSkeleton'
import useLecturesQuery from '@/hooks/lecture/useLecturesQuery'
import useLectureStore from '@/store/lecture/lectureStore'
import { useEffect } from 'react'

const LecturePage = () => {
  const hasBeenOpened = useLectureStore((state) => state.hasBeenOpened)
  const setHasBeenOpened = useLectureStore((state) => state.setHasBeenOpened)
  const { isPending, error } = useLecturesQuery()

  useEffect(() => {
    if (isPending || error) {
      return
    }
    setHasBeenOpened(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPending, error])

  if (isPending && !hasBeenOpened) {
    return <LectureSkeleton />
  }

  if (error) {
    return <UnknwonErrorContent />
  }

  return <LectureContent />
}

export default LecturePage
