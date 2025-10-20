import { Star } from 'lucide-react'
import { Hstack } from '../commonInGeneral/layout'
import Text from '../commonInGeneral/text/Text'

interface ReviewSummaryProps {
  average_rating: number
  className?: string
}
const ReviewSummary = ({ average_rating, className }: ReviewSummaryProps) => {
  const floor = Math.floor(average_rating)
  const tail = average_rating - floor
  const isOverHalf = tail >= 0.5
  const indexArrayFromFloor = [...Object.keys(Array(floor).fill(0))]
  return (
    <Hstack gap="none" className={className}>
      <Hstack className="gap-0 pr-2">
        {indexArrayFromFloor.map((index) => (
          <Star
            color="var(--color-primary-400)"
            fill="var(--color-primary-400)"
            size={20}
            key={index}
          />
        ))}
        {isOverHalf && <Star size={20} color="var(--color-primary-400)" />}
      </Hstack>
      <Text className="font-medium">{average_rating}</Text>
      <Text className="text-gray-500">(?개 리뷰)__명세서에 없음</Text>
    </Hstack>
  )
}

export default ReviewSummary
