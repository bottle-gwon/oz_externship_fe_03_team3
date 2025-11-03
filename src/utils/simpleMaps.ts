import type {
  LectureOrdering,
  LectureOrderingInText,
  LectureReviewRating,
  RecruitArrangementInText,
  RecruitOrdering,
} from '@/types'

export const ratingToNumber: Record<LectureReviewRating, number> = {
  '1_OUT_OF_5_STARS': 1,
  '2_OUT_OF_5_STARS': 2,
  '3_OUT_OF_5_STARS': 3,
  '4_OUT_OF_5_STARS': 4,
  '5_OUT_OF_5_STARS': 5,
}

export const textToLectureOrdering: Record<
  LectureOrderingInText,
  LectureOrdering
> = {
  최신순: '-created_at',
  '가격 높은 순': '-price',
  '가격 낮은 순': 'price',
  '평점 높은 순': '-rating',
  '평점 낮은 순': 'rating',
}

export const textToRecruitOrdering: Record<
  RecruitArrangementInText,
  RecruitOrdering
> = {
  최신순: 'created_at',
  '북마크 많은 순': 'bookmarks',
  '조회수 높은 순': 'views',
}
