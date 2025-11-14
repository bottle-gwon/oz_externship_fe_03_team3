import Divider from '@/components/commonInGeneral/divider/Divider'
import { Vstack, Hstack, Container } from '@/components/commonInGeneral/layout'
import Skeleton from '@/components/commonInGeneral/skeleton/Skeleton'

const RecruitWriteSkeleton = () => {
  return (
    <Container width="md" isPadded className="h-full overflow-hidden">
      <Vstack gap="xxl">
        <Hstack className="items-center">
          <Skeleton widthInPixel={40} heightInPixel={40} radius="full" />
          <Vstack>
            <Skeleton widthInPixel={250} heightInPixel={36} />
            <Skeleton widthInPixel={375} heightInPixel={24} />
          </Vstack>
        </Hstack>

        <Skeleton heightInPixel={364} />
        <Skeleton heightInPixel={516} />
        <Skeleton heightInPixel={562} />
        <Divider />
        <Hstack className="justify-end">
          <Skeleton widthInPixel={56} heightInPixel={40} />
          <Skeleton widthInPixel={128} heightInPixel={40} />
        </Hstack>
      </Vstack>
    </Container>
  )
}

export default RecruitWriteSkeleton
