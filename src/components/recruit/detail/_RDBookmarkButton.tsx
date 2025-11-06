import Button from '@/components/commonInGeneral/button/Button'
import useRecruitDetailMutation from '@/hooks/recruitDetail/useRecruitDetailMutation'
import type { RecruitDetail } from '@/types'
import { Bookmark } from 'lucide-react'

const RDBookmarkButton = ({
  recruitDetail,
  isWide,
}: {
  recruitDetail: RecruitDetail
  isWide?: boolean
}) => {
  const { toggleBookmarkMutation } = useRecruitDetailMutation(recruitDetail)

  const handleClick = () => {
    const newOne: RecruitDetail = {
      ...recruitDetail,
      is_bookmarked: !recruitDetail.is_bookmarked,
    }
    toggleBookmarkMutation.mutate({ data: undefined, newOne })
  }

  return (
    <Button
      variant={recruitDetail.is_bookmarked ? 'contained' : 'outlined'}
      size="lg"
      shape={isWide ? 'rectangle' : 'square'}
      color={recruitDetail.is_bookmarked ? 'primary' : 'mono'}
      onClick={handleClick}
    >
      <Bookmark size={isWide ? 16 : undefined} />
      {isWide && '북마크'}
    </Button>
  )
}

export default RDBookmarkButton
