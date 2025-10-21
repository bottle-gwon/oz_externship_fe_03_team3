import img from '@/testRoutes/testPages/nari/d8b6dce9691774374a170cfc1d2c92b1b571c146.jpg'
import type { recruits } from '@/types/_interfaceSummary'

export const mockSummaryCard: recruits[] = [
  {
    id: 301,
    title: '웹 개발 스터디 모집',
    thumbnail_url: img,
    expected_personnel: 6,
    current_personnel: 4,
    status: 'open',
    tags: [
      { id: 1, name: 'AI' },
      { id: 2, name: 'Python' },
      { id: 3, name: '딥러닝' },
    ],
    lectures: [
      {
        name: '프론트엔드 기초',
        instructor: '김강사',
      },
    ],
    due_date: '2025-11-20',
    bookmark_count: 3,
    views: 125,
    created_at: '2025-10-12T14:55:00Z',
  },
]
