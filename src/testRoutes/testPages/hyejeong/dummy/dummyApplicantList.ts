import type { Applicant } from '@/types/_applicantInterface'
import img from '../profile-img.jpg'

export const dummyApplicantArray: Applicant[] = [
  {
    id: 12,
    application: {
      nickname: 'dev_juwon',
      gender: '남성',
      profile_image: img,
    },
    available_time: '평일 저녁, 주말 오전',
    has_study_experience: true,
    status: 'pending',
    created_at: '2025-10-16 11:25',
  },
  {
    id: 13,
    application: {
      nickname: 'frontend_park',
      gender: '여성',
      profile_image: null,
    },
    available_time: '주중 오후',
    has_study_experience: false,
    status: 'accepted',
    created_at: '2025-10-15 19:48',
  },
  {
    id: 14,
    application: {
      nickname: 'dev_juwon',
      gender: '남성',
      profile_image: img,
    },
    available_time: '평일 저녁, 주말 오전',
    has_study_experience: true,
    status: 'rejected',
    created_at: '2025-10-16 11:25',
  },
  {
    id: 15,
    application: {
      nickname: 'frontend_park',
      gender: '여성',
      profile_image: null,
    },
    available_time: '주중 오후',
    has_study_experience: false,
    status: 'accepted',
    created_at: '2025-10-15 19:48',
  },
]
