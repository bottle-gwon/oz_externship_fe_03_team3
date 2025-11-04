import type { Lecture, LectureReview } from '@/types'
import { Vstack } from '@/components/commonInGeneral/layout'
import ReviewCard from './_ReviewCard'
import { useQuery } from '@tanstack/react-query'
import api from '@/api/api'

/*
 * lecture - 통으로 받아와서 마운트 되면 요청을 보냅니다
 */
const ExpandedReviewSection = ({ lecture }: { lecture: Lecture }) => {
  // NOTE: 현재 빈배열 응답이 옵니다. 익스프레스 서버를 이용해서 테스트해야 합니다
  const endpoint = `/lectures/${lecture.uuid}/reviews`
  const { data, isPending, error } = useQuery({
    queryKey: [endpoint],
    queryFn: async () => (await api.get(endpoint)).data.reviews,
  })

  if (isPending) {
    return <p>여기에 넣을 스켈레톤을 만들어야 합니다</p>
  }

  if (error) {
    return <p>여기에 넣을 오류 메시지 컴포넌트를 만들어야 합니다</p>
  }

  if (data.length === 0) {
    return <p>리뷰가 없습니다 컴포넌트를 만들어야 합니다</p>
  }

  return (
    <Vstack className="mt-oz-lg pt-oz-lg gap-oz-md border-t border-t-gray-200">
      <h3 className="font-medium">최근 리뷰</h3>
      {data?.map((review: LectureReview) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </Vstack>
  )
}

export default ExpandedReviewSection
