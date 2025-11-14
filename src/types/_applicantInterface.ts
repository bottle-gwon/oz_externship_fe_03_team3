import type { ApplicantStatus } from './_applicantTagStyleInterface'

export interface Applicant {
  id: number
  uuid: string
  applicant: {
    nickname: string
    gender: string
    profile_img_url: string | null
  }
  available_time: string
  has_study_experience: boolean
  status: ApplicantStatus
  applied_at: string
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
