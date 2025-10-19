import type { recruit } from '@/types/interfaceRecruit'

export const mockRecruits: recruit[] = [
  {
    id: 101,
    title: 'AI 스터디 모집합니다!',
    content_preview: 'AI 기초부터 딥러닝까지 같이 공부할 팀원을 모집합니다...',
    due_date: '2025-10-30',
    expected_personnel: 5,
    current_personnel: 3,
    status: 'open',
    tags: ['AI', 'Python', '딥러닝'],
    study_group: {
      id: 12,
      name: 'AI 기초반',
    },
    bookmark_count: 8,
    is_bookmarked: true,
    views: 153,
    created_at: '2025-10-14T11:22:00Z',
    author: {
      id: 3,
      nickname: 'study_master',
    },
  },
]
