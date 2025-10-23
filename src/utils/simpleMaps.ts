import type { LectureReviewRating } from '@/types'

export const ratingToNumber: Record<LectureReviewRating, number> = {
  '1_OUT_OF_5_STARS': 1,
  '2_OUT_OF_5_STARS': 2,
  '3_OUT_OF_5_STARS': 3,
  '4_OUT_OF_5_STARS': 4,
  '5_OUT_OF_5_STARS': 5,
}
