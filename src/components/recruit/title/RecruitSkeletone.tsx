import { Container, Hstack, Vstack } from '@/components/commonInGeneral/layout'
import Skeleton from '@/components/commonInGeneral/skeleton/Skeleton'
import useStudyHubStore from '@/store/store'

const RecruitSkeletone = () => {
  const accessToken = useStudyHubStore((state) => state.accessToken)
  const isLoggedIn = Boolean(accessToken)
  return (
    <Container className="py-oz-xxl h-full overflow-hidden" isPadded>
      <Vstack gap="none">
        <Hstack
          gap="none"
          className={`items-center justify-between ${isLoggedIn ? 'mb-14' : 'mb-oz-xxl'}`}
        >
          <Vstack gap="sm">
            <Skeleton heightInPixel={36} widthInPixel={196} />
            <Skeleton heightInPixel={24} widthInPixel={384} />
          </Vstack>

          {isLoggedIn && (
            <Hstack>
              <Skeleton heightInPixel={40} widthInPixel={121} />
              <Skeleton heightInPixel={40} widthInPixel={164} />
            </Hstack>
          )}

          {!isLoggedIn && (
            <Hstack gap="none">
              <Skeleton heightInPixel={40} widthInPixel={202} />
            </Hstack>
          )}
        </Hstack>

        {isLoggedIn && <Skeleton heightInPixel={492} className="mb-6" />}

        {!isLoggedIn && <Skeleton heightInPixel={522} className="mb-12" />}

        <Skeleton heightInPixel={191} className="mb-oz-xxl" />

        <Skeleton heightInPixel={28} widthInPixel={120} className="mb-oz-xl" />

        <Vstack gap="none">
          <Skeleton heightInPixel={2860} />
        </Vstack>
      </Vstack>
    </Container>
  )
}

export default RecruitSkeletone
