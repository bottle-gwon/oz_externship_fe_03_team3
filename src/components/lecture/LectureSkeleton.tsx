import { Container, GridContainer, Vstack } from '../commonInGeneral/layout'
import Skeleton from '../commonInGeneral/skeleton/Skeleton'

const LectureSkeleton = () => {
  return (
    <Container className="py-oz-xxl h-full overflow-hidden" isPadded>
      <Vstack className="gap-oz-sm mb-oz-xxl">
        <Skeleton heightInPixel={36} widthInPixel={145} />
        <Skeleton heightInPixel={24} widthInPixel={269} />
      </Vstack>

      <Skeleton heightInPixel={488} className="mb-12" />

      <Skeleton heightInPixel={92} className="mb-oz-xxl" />

      <GridContainer className="gap-oz-xl">
        {Array(12)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} heightInPixel={546} />
          ))}
      </GridContainer>
    </Container>
  )
}

export default LectureSkeleton
