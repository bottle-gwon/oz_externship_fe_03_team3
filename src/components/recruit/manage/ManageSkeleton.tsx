import { Container, Hstack, Vstack } from '@/components/commonInGeneral/layout'
import Skeleton from '@/components/commonInGeneral/skeleton/Skeleton'

const ManageSkeleton = () => {
  return (
    <Container className="py-oz-xxl h-full overflow-hidden" isPadded>
      <Vstack gap="xxl">
        <Hstack gap="none" className="items-center justify-between">
          <Hstack className="gap-oz-md items-center">
            <Skeleton heightInPixel={40} widthInPixel={40} radius="full" />
            <Vstack gap="sm">
              <Skeleton heightInPixel={40} widthInPixel={200} />
              <Skeleton heightInPixel={20} widthInPixel={300} />
            </Vstack>
          </Hstack>
          <Skeleton heightInPixel={50} widthInPixel={160} radius="lg" />
        </Hstack>

        <Hstack>
          <Skeleton heightInPixel={80} widthInPixel={248} radius="lg" />
          <Skeleton heightInPixel={80} widthInPixel={248} radius="lg" />
          <Skeleton heightInPixel={80} widthInPixel={248} radius="lg" />
        </Hstack>

        <Skeleton heightInPixel={120} radius="lg" />
        <Vstack>
          <Skeleton heightInPixel={24} widthInPixel={160} radius="lg" />
          <Skeleton heightInPixel={1192} radius="lg" />
        </Vstack>
      </Vstack>
    </Container>
  )
}

export default ManageSkeleton
