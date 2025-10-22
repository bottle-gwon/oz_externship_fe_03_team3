import { Hstack } from '@/components/commonInGeneral/layout'
import type { LectureReviewRating } from '@/types'
import { ratingToNumber } from '@/utils/simpleMaps'
import { Star } from 'lucide-react'

type WhatReviewStarIsFor = 'average' | 'individual'

type Rating<T extends WhatReviewStarIsFor> = T extends 'average'
  ? number
  : LectureReviewRating

interface ReviewInStarProps<T extends WhatReviewStarIsFor> {
  whatFor: WhatReviewStarIsFor
  rating: Rating<T>
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
