import type { Applicant } from '@/types/_applicantInterface'

export const dummyApplicantArray: Applicant[] = [
  {
    id: 12,
    uuid: '550e8400-e29b-41d4-a716-446655440012',
    applicant: {
      nickname: 'dev_juwon',
      gender: 'MALE',
      profile_img_url: 'https://cdn.example.com/profiles/juwon.png',
    },
    available_time: '평일 저녁, 주말 오전',
    has_study_experience: true,
    status: 'PENDING',
    applied_at: '2025-10-16 11:25',
  },
  {
    id: 13,
    uuid: '550e8400-e29b-41d4-a716-446655440013',
    applicant: {
      nickname: 'frontend_park',
      gender: 'FEMALE',
      profile_img_url: 'https://cdn.example.com/profiles/juwon.png',
    },
    available_time: '주중 오후',
    has_study_experience: false,
    status: 'ACCEPTED',
    applied_at: '2025-10-15 19:48',
  },
  {
    id: 14,
    uuid: '550e8400-e29b-41d4-a716-446655440014',
    applicant: {
      nickname: 'js_kim',
      gender: 'MALE',
      profile_img_url: 'https://cdn.example.com/profiles/js_kim.jpg',
    },
    available_time: '주말 전일',
    has_study_experience: true,
    status: 'REJECTED',
    applied_at: '2025-10-14 10:32',
  },
  {
    id: 15,
    uuid: '550e8400-e29b-41d4-a716-446655440015',
    applicant: {
      nickname: 'react_sujin',
      gender: 'FEMALE',
      profile_img_url: 'https://cdn.example.com/profiles/sujin.png',
    },
    available_time: '평일 오후 7시 이후',
    has_study_experience: true,
    status: 'PENDING',
    applied_at: '2025-10-18 21:05',
  },
]
