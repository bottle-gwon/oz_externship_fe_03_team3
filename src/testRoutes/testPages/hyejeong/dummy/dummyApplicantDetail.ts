import type { ApplicantDetail } from '@/types'

export const dummyApplicantDetail: ApplicantDetail = {
  id: 1,
  uuid: 'a1b2c3d4-e29b-41d4-a716-446655440001',
  applicant: {
    nickname: 'django_kim',
    profile_img_url: 'https://cdn.example.com/profiles/django_kim.jpg',
    gender: 'MALE',
  },
  self_introduction:
    '안녕하세요. Django 백엔드 개발자를 목표로 공부하고 있습니다.',
  motivation: '실무 프로젝트 경험을 쌓고 싶어서 지원하게 되었습니다.',
  objective: '3개월 내에 Django REST Framework를 활용한 API 개발 능력 향상',
  available_time: '평일 저녁 19:00~21:00, 주말 오전 10:00~12:00',
  has_study_experience: true,
  study_experience: 'React 스터디를 통해 팀 프로젝트를 완성했습니다.',
  status: 'PENDING',
  applied_at: '2025-01-15 14:30',
}
