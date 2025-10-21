import img from '@/testRoutes/testPages/nari/d8b6dce9691774374a170cfc1d2c92b1b571c146.jpg'
import type { MyRecruit } from '@/types'

export const mockSummaryCard: MyRecruit[] = [
  {
    id: 301,
    uuid: 'a1b2c3d4-5678-90ab-cdef-1234567890ab',
    title: '웹 개발 스터디 모집',
    thumbnail_img_url: img,
    expected_headcount: 6,
    current_headcount: 4,
    is_closed: false,
    views_count: 125,
    bookmark_count: 3,
    due_date: '2025-11-20T23:59:59Z',
    tags: [
      { id: 1, name: '웹' },
      { id: 2, name: 'React' },
      { id: 3, name: '프론트엔드' },
    ],
    lectures: [
      {
        id: 201,
        title: '프론트엔드 기초',
        instructor: '김강사',
      },
    ],
    created_at: '2025-10-12T14:55:00Z',
  },
]
