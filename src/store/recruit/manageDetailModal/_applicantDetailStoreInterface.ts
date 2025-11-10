import type { ApplicantDetail } from '@/types'

export interface ApplicantDetailStoreState {
  applicantDetail: ApplicantDetail
  setApplicantDetail: (applicantDetail: ApplicantDetail) => void
}
