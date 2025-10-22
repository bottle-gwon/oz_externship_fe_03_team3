import type { Lecture } from '@/types'
import { getDummyReviewArray } from '../../dummyApi'
import { Vstack } from '@/components/commonInGeneral/layout'
import ReviewCard from './_ReviewCard'

/*
 * lecture - 통으로 받아와서 마운트 되면 요청을 보냅니다
 */
const ExpandedReviewSection = ({ lecture }: { lecture: Lecture }) => {
  const reviewArray = getDummyReviewArray(lecture)
  reviewArray.splice(4) // 백엔드에서 넷 이상을 보내줄 경우 대비

  return (
    <Vstack className="mt-oz-lg pt-oz-lg gap-oz-md border-t border-t-gray-200">
      <h3 className="font-medium">최근 리뷰</h3>
      {reviewArray.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </Vstack>
  )
}

export default ExpandedReviewSection
