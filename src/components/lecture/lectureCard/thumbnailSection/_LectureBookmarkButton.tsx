import { Bookmark } from 'lucide-react'
import type { Lecture } from '@/types'
import Button from '@/components/commonInGeneral/button/Button'
import useLecturesMutation from '@/hooks/lecture/useLecturesMutation'

const LectureBookmarkButton = ({ lecture }: { lecture: Lecture }) => {
  const { postBookmarkMutation, deleteBookmarkMutation } = useLecturesMutation()

  const handleClick = () => {
    const newOne: Lecture = {
      ...lecture,
      is_bookmarked: !lecture.is_bookmarked,
    }

    if (lecture.is_bookmarked) {
      deleteBookmarkMutation.mutate({ data: lecture, newOne })
      return
    }

    postBookmarkMutation.mutate({ data: lecture, newOne })
  }

  return (
    <Button
      shape="circle"
      onClick={handleClick}
      className={lecture.is_bookmarked ? 'opacity-90' : ''}
    >
      <Bookmark
        color={lecture.is_bookmarked ? 'var(--color-primary-400)' : undefined}
        fill={
          lecture.is_bookmarked ? 'var(--color-primary-400)' : 'transparent'
        }
        className="transition"
      />
    </Button>
  )
}

export default LectureBookmarkButton
