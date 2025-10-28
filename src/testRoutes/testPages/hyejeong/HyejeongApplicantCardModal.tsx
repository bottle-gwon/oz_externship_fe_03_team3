import ApplicantCard from '@/components/recruit/applicantCard/ApplicantCard'
import { dummyApplicantArray } from '@/testRoutes/testPages/hyejeong/dummy/dummyApplicantList'

const HyejeongApplicantCardModal = () => {
  return (
    <>
      {dummyApplicantArray.map((applicant) => (
        <ApplicantCard
          key={applicant.id}
          applicant={applicant}
          onClick={() => {}}
        />
      ))}
    </>
  )
}

export default HyejeongApplicantCardModal
