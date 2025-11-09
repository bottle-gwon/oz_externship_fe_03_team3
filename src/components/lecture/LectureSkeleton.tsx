import useStudyHubStore from '@/store/store'
import { Container, GridContainer, Vstack } from '../commonInGeneral/layout'
import Skeleton from '../commonInGeneral/skeleton/Skeleton'

const LectureSkeleton = () => {
  const accessToken = useStudyHubStore((state) => state.accessToken)

  return (
    <Container className="py-oz-xxl h-full overflow-hidden">
      <Vstack gap="xxl">
        <Vstack className="mx-oz-xxl">
          <Skeleton heightInPixel={36} widthInPixel={145} />
          <Skeleton heightInPixel={24} widthInPixel={269} />
        </Vstack>

        <Skeleton
          heightInPixel={accessToken ? 635 : 488}
          className={accessToken ? '' : 'mx-oz-xxl'}
        />

        <Skeleton heightInPixel={92} className="mx-oz-xxl" />

        <GridContainer className="gap-oz-xl mx-oz-xxl">
          {Array(12)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} heightInPixel={546} />
            ))}
        </GridContainer>
      </Vstack>
    </Container>
  )
}

export default LectureSkeleton
