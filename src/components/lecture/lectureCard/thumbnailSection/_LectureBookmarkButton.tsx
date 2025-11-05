import { Bookmark } from 'lucide-react'
import type { Lecture } from '@/types'
import Button from '@/components/commonInGeneral/button/Button'
import useLecturesMutation from '@/hooks/lecture/useLecturesMutation'
import useDebounceToggle from '@/hooks/useDebounceToggle'
import { useEffect } from 'react'
import { Vstack } from '@/components/commonInGeneral/layout'

const LectureBookmarkButton = ({ lecture }: { lecture: Lecture }) => {
  const { debouncedBoolValue, realTimeBoolValue, toggleBoolValue } =
    useDebounceToggle(lecture.is_bookmarked)
  const { postBookmarkMutation, deleteBookmarkMutation } = useLecturesMutation()

  useEffect(() => {
    // NOTE: 아주 중요합니다
    if (lecture.is_bookmarked === debouncedBoolValue) {
      return
    }

    const newOne: Lecture = {
      ...lecture,
      is_bookmarked: !lecture.is_bookmarked,
    }

    if (debouncedBoolValue) {
      postBookmarkMutation.mutate({ data: lecture, newOne })
      return
    }

    deleteBookmarkMutation.mutate({ data: lecture, newOne })

    // NOTE: lecture 포함하면 무한 렌더링 발생
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedBoolValue])

  return (
    <>
      <Button
        shape="circle"
        onClick={toggleBoolValue}
        className={realTimeBoolValue ? 'opacity-90' : ''}
      >
        <Bookmark
          color={realTimeBoolValue ? 'var(--color-primary-400)' : undefined}
          fill={realTimeBoolValue ? 'var(--color-primary-400)' : 'transparent'}
          className="transition"
        />
      </Button>
      <Vstack>
        <p>debounced: {JSON.stringify(debouncedBoolValue)}</p>
        <p>real time: {JSON.stringify(realTimeBoolValue)}</p>
        <p>initial: {JSON.stringify(lecture.is_bookmarked)}</p>
      </Vstack>
    </>
  )
}

export default LectureBookmarkButton
