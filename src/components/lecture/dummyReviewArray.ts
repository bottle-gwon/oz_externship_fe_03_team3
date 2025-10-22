import type { LectureReview } from '@/types'

interface DummyResponse {
  reviews: LectureReview[]
}

type DummyReviewDataProps = Record<string, DummyResponse>

const dummyReviewData: DummyReviewDataProps = {
  '550e8400-e22b-41d4-a716-446655440000': {
    reviews: [
      {
        id: 1,
        rating: '5_OUT_OF_5_STARS',
        content:
          '정말 유익한 강의였습니다. 실무에 바로 적용할 수 있는 내용들이 많았어요.',
        created_at: '2025-10-10 14:30:00',
      },
      {
        id: 2,
        rating: '4_OUT_OF_5_STARS',
        content: '전반적으로 좋았지만 중급자에게는 조금 쉬울 수 있습니다.',
        created_at: '2025-10-09 09:15:00',
      },
      {
        id: 3,
        rating: '4_OUT_OF_5_STARS',
        content: '전반적으로 좋았지만 중급자에게는 조금 쉬울 수 있습니다.',
        created_at: '2025-10-09 09:15:00',
      },
      {
        id: 4,
        rating: '4_OUT_OF_5_STARS',
        content: '전반적으로 좋았지만 중급자에게는 조금 쉬울 수 있습니다.',
        created_at: '2025-10-09 09:15:00',
      },
      {
        id: 5,
        rating: '4_OUT_OF_5_STARS',
        content: '전반적으로 좋았지만 중급자에게는 조금 쉬울 수 있습니다.',
        created_at: '2025-10-09 09:15:00',
      },
    ],
  },
  '550e8400-e29b-41d4-a716-446655411110': {
    reviews: [
      {
        id: 1,
        rating: '5_OUT_OF_5_STARS',
        content:
          '정말 유익한 강의였습니다. 실무에 바로 적용할 수 있는 내용들이 많았어요.',
        created_at: '2025-10-10 14:30:00',
      },
      {
        id: 2,
        rating: '4_OUT_OF_5_STARS',
        content: '전반적으로 좋았지만 중급자에게는 조금 쉬울 수 있습니다.',
        created_at: '2025-10-09 09:15:00',
      },
    ],
  },
  '550e8400-e29b-41d4-a716-446652440000': {
    reviews: [
      {
        id: 1,
        rating: '5_OUT_OF_5_STARS',
        content:
          '정말 유익한 강의였습니다. 실무에 바로 적용할 수 있는 내용들이 많았어요.',
        created_at: '2025-10-10 14:30:00',
      },
      {
        id: 2,
        rating: '4_OUT_OF_5_STARS',
        content: '전반적으로 좋았지만 중급자에게는 조금 쉬울 수 있습니다.',
        created_at: '2025-10-09 09:15:00',
      },
      {
        id: 3,
        rating: '4_OUT_OF_5_STARS',
        content: '전반적으로 좋았지만 중급자에게는 조금 쉬울 수 있습니다.',
        created_at: '2025-10-09 09:15:00',
      },
      {
        id: 4,
        rating: '4_OUT_OF_5_STARS',
        content: '전반적으로 좋았지만 중급자에게는 조금 쉬울 수 있습니다.',
        created_at: '2025-10-09 09:15:00',
      },
      {
        id: 5,
        rating: '4_OUT_OF_5_STARS',
        content: '전반적으로 좋았지만 중급자에게는 조금 쉬울 수 있습니다.',
        created_at: '2025-10-09 09:15:00',
      },
    ],
  },
  '550e8400-e29b-41d4-a716-446645440000': {
    reviews: [
      {
        id: 1,
        rating: '5_OUT_OF_5_STARS',
        content:
          '정말 유익한 강의였습니다. 실무에 바로 적용할 수 있는 내용들이 많았어요.',
        created_at: '2025-10-10 14:30:00',
      },
      {
        id: 2,
        rating: '4_OUT_OF_5_STARS',
        content: '전반적으로 좋았지만 중급자에게는 조금 쉬울 수 있습니다.',
        created_at: '2025-10-09 09:15:00',
      },
    ],
  },
}

export default dummyReviewData
