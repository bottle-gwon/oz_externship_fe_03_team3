import ApplicantCard from '@/components/recruit/applicantCard/ApplicantCard'
import { dummyApplicantArray } from '@/components/recruit/ApplicantListDummy'

const HyejeongApplicantCardModal = () => {
  return (
    <>
      {dummyApplicantArray.map((applicant) => (
        <ApplicantCard applicant={applicant} />
      ))}
    </>
  )
}

export default HyejeongApplicantCardModal
