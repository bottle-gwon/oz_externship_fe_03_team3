import { create } from 'zustand'
import type { ApplicantDetailStoreState } from './_applicantDetailStoreInterface'

const useApplicantDetailStore = create<ApplicantDetailStoreState>()((set) => ({
  applicantDetail: {
    id: 0,
    nickname: '',
    profile_image: '',
    introduction: '',
    motivation: '',
    goal: '',
    available_times: [],
    has_study_experience: false,
    study_experience_detail: '',
    status: 'PENDING',
    created_at: '',
    gender: '',
  },
  setApplicantDetail: (applicantDetail) => set({ applicantDetail }),
}))

export default useApplicantDetailStore
