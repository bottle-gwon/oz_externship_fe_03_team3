export type ApplicantStatus = 'pending' | 'accepted' | 'rejected'

export const statusStyles: Record<
  ApplicantStatus,
  { bg: string; text: string }
> = {
  pending: { bg: 'text-yellow-800', text: 'bg-yellow-100' },
  accepted: { bg: 'text-green-800', text: 'bg-green-100' },
  rejected: { bg: 'text-red-800', text: 'bg-red-100' },
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
