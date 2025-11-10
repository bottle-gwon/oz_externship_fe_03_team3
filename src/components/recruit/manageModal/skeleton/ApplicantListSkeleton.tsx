import { GridContainer } from '@/components/commonInGeneral/layout'
import ApplicantCardSkeleton from './ApplicantCardSkeleton'

const ApplicantListSkeleton = () => {
  const sArray = Array.from({ length: 4 }, (_, i) => i + 1)
  return (
    <GridContainer>
      {sArray.map((_, i) => (
        <ApplicantCardSkeleton key={i} />
      ))}
    </GridContainer>
  )
}

export default ApplicantListSkeleton
