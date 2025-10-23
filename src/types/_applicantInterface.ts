import type { RoundBoxColor } from '@/components/commonInGeneral/roundBox/RoundBox'

export type ApplicantStatus = 'pending' | 'accepted' | 'rejected'

export const statusStyles: Record<
  ApplicantStatus,
  { content: string; style: RoundBoxColor }
> = {
  pending: { content: '대기중', style: 'primary' },
  accepted: { content: '승인됨', style: 'success' },
  rejected: { content: '거절됨', style: 'danger' },
}

export const experienceStyles: Record<
  'true' | 'false',
  { content: string; style: RoundBoxColor }
> = {
  true: { content: '경험 있음', style: 'success' },
  false: { content: '경험 없음', style: 'blue' },
}

export interface Applicant {
  id: number
  application: {
    nickname: string
    gender: string
    profile_image: string | null
  }
  available_time: string
  has_study_experience: boolean
  status: ApplicantStatus
  created_at: string
}
