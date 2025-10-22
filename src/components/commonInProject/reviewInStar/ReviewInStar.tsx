import { Hstack } from '@/components/commonInGeneral/layout'
import type { LectureReviewRating } from '@/types'
import { Star } from 'lucide-react'

type WhatReviewStarIsFor = 'average' | 'individual'

type Rating<T extends WhatReviewStarIsFor> = T extends 'average'
  ? number
  : LectureReviewRating

interface ReviewInStarProps<T extends WhatReviewStarIsFor> {
  whatFor: WhatReviewStarIsFor
  rating: Rating<T>
}

const ratingToNumber: Record<LectureReviewRating, number> = {
  '1_OUT_OF_5_STARS': 1,
  '2_OUT_OF_5_STARS': 2,
  '3_OUT_OF_5_STARS': 3,
  '4_OUT_OF_5_STARS': 4,
  '5_OUT_OF_5_STARS': 5,
}

const ReviewInStar = <T extends WhatReviewStarIsFor>({
  whatFor,
  rating,
}: ReviewInStarProps<T>) => {
  const fullStarCount =
    whatFor === 'average'
      ? Math.floor(rating as number)
      : ratingToNumber[rating as LectureReviewRating]
  const emptyStarCount = 5 - fullStarCount

  const fullStarBaseArray = Array(fullStarCount).fill(1)
  const emptyStarBaseArray = Array(emptyStarCount).fill(0)

  return (
    <div>
      <Hstack className="gap-0 pr-2">
        {fullStarBaseArray.map((_, index) => (
          <Star
            color="var(--color-primary-400)"
            fill="var(--color-primary-400)"
            size={20}
            key={index}
          />
        ))}
        {emptyStarBaseArray.map((_, index) => (
          <Star color="var(--color-primary-400)" size={20} key={index} />
        ))}
      </Hstack>
    </div>
  )
}

export default ReviewInStar
