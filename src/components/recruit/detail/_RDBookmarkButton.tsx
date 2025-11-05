import Button from '@/components/commonInGeneral/button/Button'
import type { RecruitDetail } from '@/types'
import { Bookmark } from 'lucide-react'

const RDBookmarkButton = ({
  recruitDetail,
  isWide,
}: {
  recruitDetail: RecruitDetail
  isWide?: boolean
}) => {
  return (
    <Button
      variant={recruitDetail.is_bookmarked ? 'contained' : 'outlined'}
      size="lg"
      shape={isWide ? 'rectangle' : 'square'}
      color={recruitDetail.is_bookmarked ? 'primary' : 'mono'}
    >
      <Bookmark
        size={isWide ? 16 : undefined}
        fill={recruitDetail.is_bookmarked ? 'white' : undefined}
      />
      {isWide && '북마크'}
    </Button>
  )
}

export default RDBookmarkButton
