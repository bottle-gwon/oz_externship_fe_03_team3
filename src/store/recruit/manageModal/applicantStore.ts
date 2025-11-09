import { create } from 'zustand'
import type { ApplicantStoreState } from './_applicantStoreInterface'

const useApplicantStore = create<ApplicantStoreState>()((set) => ({
  applicantArray: [],
  setApplicantArray: (applicantArray) => set({ applicantArray }),

  requestNextPage: () => {},
  setRequestNextPage: (requestNextPage) => set({ requestNextPage }),
}))

export default useApplicantStore
