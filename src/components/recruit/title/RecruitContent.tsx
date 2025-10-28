import Button from '@/components/commonInGeneral/button/Button'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import RecommendSection from '@/components/recommendSection/RecommendSection'
import RecruitCard from '@/components/recruit/recruitCard/RecruitCard'
import { dummyRecruitArray } from '@/testRoutes/testPages/hyejeong/dummy/dummyRecruitList'
import useStudyHubStore from '@/store/store'
import RecruitSubHeader from './_RecruitSubHeader'
import RecruitSearchInput from './_RecruitSearchInput'
import RecruitTagSelect from './_RecruitTagSelect'
import RecruitOrderingSelect from './_RecruitOrderingSelect'

const RecruitContent = () => {
  const accessToken = useStudyHubStore((state) => state.accessToken)
  const isLoggedIn = Boolean(accessToken)

  return (
    <Container className="py-oz-xxl flex flex-col items-center bg-gray-50">
      <RecruitSubHeader isLoggedIn={isLoggedIn} />
      <RecommendSection
        type="recruit"
        isLoggedIn={isLoggedIn}
        recommendedArray={dummyRecruitArray.slice(0, 3)}
      />
      <Vstack gap="xxl" className="px-oz-xxl w-full">
        <RoundBox
          isShadowed={false}
          color="mono-bright"
          padding="xl"
          radius="lg"
          className="justify-center"
        >
          <RecruitSearchInput />

          <Hstack gap="none" className="gap-9">
            <RecruitTagSelect />
            <RecruitOrderingSelect />
          </Hstack>
        </RoundBox>

        <Vstack gap="none">
          {/* 추후에 변경 */}
          <Vstack gap="none" className="mb-oz-xl text-lg font-semibold">
            전체 공고({dummyRecruitArray.length})
          </Vstack>
          <Vstack gap="none" className="w-full">
            {dummyRecruitArray.map((recruit) => (
              <RecruitCard key={recruit.id} recruit={recruit} />
            ))}
          </Vstack>
        </Vstack>
      </Vstack>

      <Button
        variant="contained"
        status="enabled"
        size="lg"
        className="mb-oz-xxl mt-12"
      >
        + 더 많은 공고 보기
      </Button>
    </Container>
  )
}

export default RecruitContent
