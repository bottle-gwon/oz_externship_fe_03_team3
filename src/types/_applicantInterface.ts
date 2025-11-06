import type { ApplicantStatus } from './_applicantTagStyleInterface'

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

export interface ApplicantResponseData {
  count: number
  next: string | null
  previous: string | null
  results: Applicant[]
}

export interface ApplicantsQueryParams {
  page?: number
  limit?: number
  status?: string
  order?: string
}
