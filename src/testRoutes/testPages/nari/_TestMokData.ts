import type { Recruit } from '@/types'
import img from '@/testRoutes/testPages/nari/d8b6dce9691774374a170cfc1d2c92b1b571c146.jpg'

export const mockRecruits: Recruit[] = [
  {
    id: 301,
    uuid: 'a1b2c3d4-5678-90ab-cdef-1234567890ab',
    title: '웹 개발 스터디 모집',
    content: '프론트엔드 기초 스터디 참여자를 모집합니다.',
    thumbnail_img_url: img,
    expected_headcount: 6,
    current_headcount: 4,
    estimated_fee: 0,
    views_count: 125,
    bookmark_count: 3,
    due_date: '2025-11-20T23:59:59Z',
    is_closed: false,
    tags: [
      { id: 1, name: '웹' },
      { id: 2, name: 'React' },
      { id: 3, name: '프론트엔드' },
    ],
    lectures: [{ id: 201, title: '프론트엔드 기초', instructor: '김강사' }],
    study_group: {
      id: 15,
      uuid: 'b0c1d2e3-f456-7890-a123-4567890bdef0',
      name: '웹 개발 기초반',
    },
    author: {
      id: 10,
      nickname: 'my_account',
      profile_img_url: img,
    },
    is_bookmarked: false,
    created_at: '2025-10-12T14:55:00Z',
    updated_at: '2025-10-13T09:30:00Z',
  },
]
