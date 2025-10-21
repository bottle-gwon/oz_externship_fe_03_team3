import { Bookmark } from 'lucide-react'
import type { Lecture } from '@/types'
import { useState } from 'react'
import Button from '@/components/commonInGeneral/button/Button'

const LectureBookmarkButton = ({ lecture }: { lecture: Lecture }) => {
  const [isDummyBookmarked, setIsDummyBookmarked] = useState(!lecture)
  const handleClick = () => {
    // TODO: Lcture 받아와서 버튼 눌리면 api 요청 보내야 함
    setIsDummyBookmarked(!isDummyBookmarked)
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
