import { Hstack } from '@/components/commonInGeneral/layout'
import Text from '@/components/commonInGeneral/text/Text'
import ReviewInStar from '@/components/commonInProject/reviewInStar/ReviewInStar'

interface ReviewSummaryProps {
  average_rating: number
  className?: string
}
const ReviewSummary = ({ average_rating, className }: ReviewSummaryProps) => {
  return (
    <Hstack gap="none" className={className}>
      <ReviewInStar whatFor="average" rating={average_rating} />
      <Text className="font-medium">{average_rating}</Text>
    </Hstack>
  )
}

export default ReviewSummary
