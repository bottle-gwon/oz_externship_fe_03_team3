import LectureContent from '@/components/lecture/LectureContent'
import LectureSkeleton from '@/components/lecture/LectureSkeleton'
import useLecturesQuery from '@/hooks/lecture/useLecturesQuery'
import useLectureStore from '@/store/lecture/lectureStore'

const LecturePage = () => {
  const lectureArray = useLectureStore((state) => state.lectureArray)
  const { isPending, error } = useLecturesQuery()

  if (isPending && lectureArray.length === 0) {
    // NOTE: 채팅창 스켈레톤 버그를 확인할 땐 아래 주석을 해제해주세요
    // debugger
    return <LectureSkeleton />
  }

  if (error) return <p>뭔가 오류가 일어났어요 여기를 채워야 해요</p>

  return <LectureContent />
}

export default LecturePage
