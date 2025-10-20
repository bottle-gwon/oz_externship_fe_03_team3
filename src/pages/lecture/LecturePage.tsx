import LectureContent from '@/components/lecture/LectureContent'
import LectureSkeleton from '@/components/lecture/LectureSkeleton'

const LecturePage = () => {
  const isPending = false // 나중에 api 연결하면 거기서의 isPending 사용

  if (isPending) {
    return <LectureSkeleton />
  }

  return <LectureContent />
}

export default LecturePage
