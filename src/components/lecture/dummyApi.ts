import type { Lecture } from '@/types'
import dummyReviewData from './dummyReviewArray'

export const getDummyReviewArray = (lecture: Lecture) => {
  const uuid = lecture.uuid
  const dummyResponse = dummyReviewData[uuid]
  const reviewArray = dummyResponse.reviews

  return reviewArray
}
