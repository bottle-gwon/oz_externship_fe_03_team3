import Button from '@/components/commonInGeneral/button/Button'
import useRecruitDetailMutation from '@/hooks/recruitDetail/useRecruitDetailMutation'
import useDebounceToggle from '@/hooks/useDebounceToggle'
import type { RecruitDetail } from '@/types'
import { Bookmark } from 'lucide-react'
import { useEffect } from 'react'

const RDBookmarkButton = ({
  recruitDetail,
  isWide,
}: {
  recruitDetail: RecruitDetail
  isWide?: boolean
}) => {
  const { toggleBookmarkMutation } = useRecruitDetailMutation(recruitDetail)
  const { debouncedBoolValue, realTimeBoolValue, toggleBoolValue } =
    useDebounceToggle(recruitDetail.is_bookmarked)

  useEffect(() => {
    if (debouncedBoolValue === recruitDetail.is_bookmarked) {
      return
    }

    const newOne: RecruitDetail = {
      ...recruitDetail,
      is_bookmarked: !recruitDetail.is_bookmarked,
    }
    toggleBookmarkMutation.mutate({ data: undefined, newOne })

    // NOTE: recruitDetail 넣으면 무한 렌더링 일어남
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedBoolValue])

  return (
    <Button
      variant={realTimeBoolValue ? 'contained' : 'outlined'}
      size="lg"
      shape={isWide ? 'rectangle' : 'square'}
      color={realTimeBoolValue ? 'primary' : 'mono'}
      onClick={toggleBoolValue}
    >
      <Bookmark size={isWide ? 16 : undefined} />
      {isWide && '북마크'}
    </Button>
  )
}

export default RDBookmarkButton
