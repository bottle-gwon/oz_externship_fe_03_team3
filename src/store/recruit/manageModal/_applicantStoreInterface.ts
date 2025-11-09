import type { Applicant } from '@/types'

export interface ApplicantStoreState {
  applicantArray: Applicant[]
  setApplicantArray: (recruitArray: Applicant[]) => void

  requestNextPage: () => void
  setRequestNextPage: (requestNextPage: () => void) => void
}
