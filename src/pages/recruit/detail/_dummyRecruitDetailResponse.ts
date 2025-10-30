import type { RecruitDetail } from '@/types'

const dummyRecruitDetailResponse: RecruitDetail = {
  author_name: '이세종',
  id: 401,
  title: 'AI 스터디 심화반 모집',
  content:
    'AI 심화 프로젝트를 함께 진행할 팀원을 모집합니다. 매주 화/목 저녁 7시에 진행...',
  content_images: [
    'https://example.com/images/ai_project_1.png',
    'https://example.com/images/ai_project_2.png',
  ],
  attachments: [
    {
      id: 51,
      file_name: 'ai_project_guide.pdf',
      url: 'https://example.com/files/ai_project_guide.pdf',
    },
  ],
  expected_personnel: 5,
  expected_fee: 100000,
  lectures: [
    {
      thumbnail_url: 'https://example.com/images/lecture_thumb.png',
      name: '딥러닝 프로젝트 실습',
      instructor: '홍길동',
      link: 'https://example.com/lectures/101',
      price: 50000,
    },
  ],
  tags: ['AI', 'Python', '딥러닝'],
  due_date: '2025-11-30',
  created_at: '2025-10-16T10:20:00Z',
  views: 120,
  bookmark_count: 5,
  is_bookmarked: true,
}

export default dummyRecruitDetailResponse
