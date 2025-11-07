import { Container, Vstack } from '@/components/commonInGeneral/layout'
import Skeleton from '@/components/commonInGeneral/skeleton/Skeleton'

const RecruitDetailSkeleton = () => {
  return (
    <Container width="md" className="py-oz-xxl">
      <Vstack gap="xxl">
        <Skeleton widthInPixel={500} heightInPixel={500} />

        <Skeleton className="w-full" heightInPixel={500} />

        <Skeleton className="w-full" heightInPixel={500} />
        <Skeleton className="w-full" heightInPixel={500} />
        <Skeleton className="w-full" heightInPixel={500} />
      </Vstack>
    </Container>
  )
}

export default RecruitDetailSkeleton
