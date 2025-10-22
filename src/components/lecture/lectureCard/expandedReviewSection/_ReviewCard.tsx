import { Vstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import ReviewInStar from '@/components/commonInProject/reviewInStar/ReviewInStar'
import type { LectureReview } from '@/types'

const ReviewCard = ({ review }: { review: LectureReview }) => {
  return (
    <RoundBox isBordered={false} color="mono-dim">
      <Vstack>
        <ReviewInStar whatFor="individual" rating={review.rating} />
        <p>{review.content}</p>
      </Vstack>
    </RoundBox>
  )
}

export default ReviewCard
