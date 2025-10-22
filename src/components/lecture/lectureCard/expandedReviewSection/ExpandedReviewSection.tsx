import type { Lecture } from '@/types'
import { getDummyReviewArray } from '../../dummyApi'

/*
 * lecture - 통으로 받아와서 마운트 되면 요청을 보냅니다
 */
const ExpandedReviewSection = ({ lecture }: { lecture: Lecture }) => {
  const reviewArray = getDummyReviewArray(lecture)

  return <div>{JSON.stringify(reviewArray)}</div>
}

export default ExpandedReviewSection
