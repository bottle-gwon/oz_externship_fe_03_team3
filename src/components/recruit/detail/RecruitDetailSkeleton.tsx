import { Container, Vstack } from '@/components/commonInGeneral/layout'
import Skeleton from '@/components/commonInGeneral/skeleton/Skeleton'

const RecruitDetailSkeleton = () => {
  return (
    <Container width="md" className="py-oz-xxl h-full overflow-hidden">
      <Vstack gap="xxl">
        <Skeleton widthInPixel={40} heightInPixel={40} radius="full" />

        <Skeleton className="w-full" heightInPixel={337} radius="lg" />

        <Skeleton className="w-full" heightInPixel={1000} radius="lg" />

        <Skeleton className="w-full" heightInPixel={490} radius="lg" />
        <Skeleton className="w-full" heightInPixel={308} radius="lg" />
        <Skeleton className="w-full" heightInPixel={97} radius="lg" />
      </Vstack>
    </Container>
  )
}

export default RecruitDetailSkeleton
