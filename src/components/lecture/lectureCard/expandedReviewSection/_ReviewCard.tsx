import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import ReviewInStar from '@/components/commonInProject/reviewInStar/ReviewInStar'
import type { LectureReview } from '@/types'
import { ratingToNumber } from '@/utils/simpleMaps'

const ReviewCard = ({ review }: { review: LectureReview }) => {
  return (
    <RoundBox isBordered={false} color="mono-dim">
      <Vstack>
        <Hstack className="gap-sm items-center">
          <ReviewInStar whatFor="individual" rating={review.rating} />
          <p>{ratingToNumber[review.rating]}</p>
        </Hstack>
        <p>{review.content}</p>
      </Vstack>
    </RoundBox>
  )
}

export default ReviewCard
