import LectureContent from '@/components/lecture/LectureContent'
import LectureSkeleton from '@/components/lecture/LectureSkeleton'
import useLectures from '@/hooks/lecture/useLectures'

const LecturePage = () => {
  const { isPending, error, data } = useLectures()

  if (isPending) {
    return <LectureSkeleton />
  }

  if (error || !data) return <p>뭔가 오류가 일어났어요 여기를 채워야 해요</p>

  return <LectureContent />
}

export default LecturePage
