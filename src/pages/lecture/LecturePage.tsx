import UnknwonErrorContent from '@/components/commonInGeneral/error/UnknownErrorContent'
import LectureContent from '@/components/lecture/LectureContent'
import LectureSkeleton from '@/components/lecture/LectureSkeleton'
import useLecturesQuery from '@/hooks/lecture/useLecturesQuery'
import useLectureStore from '@/store/lecture/lectureStore'

const LecturePage = () => {
  const lectureArray = useLectureStore((state) => state.lectureArray)
  const { isPending, error } = useLecturesQuery()

  if (isPending && lectureArray.length === 0) {
    return <LectureSkeleton />
  }

  if (error) {
    return <UnknwonErrorContent />
  }

  return <LectureContent />
}

export default LecturePage
