import { Bookmark } from 'lucide-react'
import type { Lecture } from '@/types'
import Button from '@/components/commonInGeneral/button/Button'
import useLecturesMutation from '@/hooks/lecture/useLecturesMutation'
import useDebounceToggle from '@/hooks/useDebounceToggle'
import { useEffect, useState } from 'react'

const LectureBookmarkButton = ({ lecture }: { lecture: Lecture }) => {
  const [isBookmarked, setIsBookmarked] = useState(lecture.is_bookmarked)

  const debouncedIsBookmarked = useDebounceToggle(isBookmarked)
  const { postBookmarkMutation, deleteBookmarkMutation } = useLecturesMutation()

  useEffect(() => {
    const newOne: Lecture = {
      ...lecture,
      is_bookmarked: !lecture.is_bookmarked,
    }

    if (debouncedIsBookmarked) {
      deleteBookmarkMutation.mutate({ data: lecture, newOne })
      return
    }

    postBookmarkMutation.mutate({ data: lecture, newOne })
  }, [debouncedIsBookmarked])
  useEffect(() => {
    setIsBookmarked(lecture.is_bookmarked)
  }, [lecture.is_bookmarked])

  const handleClick = () => setIsBookmarked((prev) => !prev)

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
