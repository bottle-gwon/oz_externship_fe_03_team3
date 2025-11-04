import { Bookmark } from 'lucide-react'
import type { Lecture } from '@/types'
import Button from '@/components/commonInGeneral/button/Button'
import useLecturesMutation from '@/hooks/lecture/useLecturesMutation'

const LectureBookmarkButton = ({ lecture }: { lecture: Lecture }) => {
  const { postBookmarkMutation, deleteBookmarkMutation } = useLecturesMutation()

  const handleClick = () => {
    const newOne = {}
    if (lecture.is_bookmarked) {
      deleteBookmarkMutation.mutate()
      return
    }

    postBookmarkMutation.mutate()
  }

  const color = isDummyBookmarked ? 'var(--color-blue-500)' : undefined
  const fill = isDummyBookmarked ? 'var(--color-blue-500)' : 'transparent'

  const result = !isDummyBookmarked ? 'opacity-90' : ''

  return (
    <Button shape="circle" onClick={handleClick} className={`${result}`}>
      <Bookmark color={color} fill={fill} />
    </Button>
  )
}

export default LectureBookmarkButton
