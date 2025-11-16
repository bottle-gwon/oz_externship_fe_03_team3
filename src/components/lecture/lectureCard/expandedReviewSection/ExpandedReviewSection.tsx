import type { Lecture, LectureReview } from '@/types'
import { Vstack } from '@/components/commonInGeneral/layout'
import ReviewCard from './_ReviewCard'
import { useQuery } from '@tanstack/react-query'
import api from '@/api/api'
import Skeleton from '@/components/commonInGeneral/skeleton/Skeleton'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'

const ReviewEdgeCaseBox = ({ children }: { children: string }) => {
  return (
    <RoundBox
      isBordered={false}
      color="mono-dim"
      className="flex flex-col items-center justify-center"
    >
      {children}
    </RoundBox>
  )
}

const ExpandedReviewSection = ({ lecture }: { lecture: Lecture }) => {
  // NOTE: 현재 빈배열 응답이 옵니다. 익스프레스 서버를 이용해서 테스트해야 합니다
  // NOTE: data를 이 컴포넌트에서만 참조하기 때문에 여기서 useQuery를 호출합니다
  // NOTE: 컴포넌트 구조가 복잡하다면 커스텀 후크와 페이지 전용 zustand store를 구축하는 편이 좋습니다
  const endpoint = `/lectures/${lecture.uuid}/reviews`
  const { data, isPending, error } = useQuery({
    queryKey: [endpoint],
    queryFn: async () => (await api.get(endpoint)).data,
  })

  return (
    <Vstack className="mt-oz-lg pt-oz-lg gap-oz-md border-t border-t-gray-200">
      {isPending && <Skeleton heightInPixel={24} widthInPixel={60} />}
      {!isPending && <h3 className="font-medium">최근 리뷰</h3>}

      {isPending && <Skeleton heightInPixel={48} />}
      {error && (
        <ReviewEdgeCaseBox>알 수 없는 에러가 발생했습니다</ReviewEdgeCaseBox>
      )}
      {data && data.length === 0 && (
        <ReviewEdgeCaseBox>리뷰가 없습니다</ReviewEdgeCaseBox>
      )}
      {data?.map((review: LectureReview) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </Vstack>
  )
}

export default ExpandedReviewSection
