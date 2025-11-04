import Button from '@/components/commonInGeneral/button/Button'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import RecommendSection from '@/components/recommendSection/RecommendSection'
import RecruitCard from '@/components/recruit/recruitCard/RecruitCard'
import useStudyHubStore from '@/store/store'
import RecruitSubHeader from './_RecruitSubHeader'
import RecruitSearchInput from './_RecruitSearchInput'
import RecruitTagSelect from './_RecruitTagSelect'
import NoSearchResult from '@/components/commonInProject/noSearchResult/NoSearchResult'
import RecruitArrangementSelect from './_RecruitOrderingSelect'
import useRecruitStore from '@/store/recruit/recruitStore'
import useRecruits from '@/hooks/recruit/title/useRecruits'

const RecruitContent = () => {
  const accessToken = useStudyHubStore((state) => state.accessToken)
  const isLoggedIn = Boolean(accessToken)
  const recruitArray = useRecruitStore((state) => state.recruitArray)
  const recommendedRecruitArray = useRecruitStore(
    (state) => state.recommendedRecruitArray
  )
  const isSearching = useRecruitStore((state) => state.isSearching)
  const { data } = useRecruits()
  console.log(data)
  // const requestNextPage = useRecruitStore((state) => state.requestNextPage)

  return (
    <Container className="py-oz-xxl flex flex-col items-center bg-gray-50">
      <RecruitSubHeader isLoggedIn={isLoggedIn} />
      <RecommendSection
        type="recruit"
        isLoggedIn={isLoggedIn}
        // recommendedArray={dummyRecruitArray.slice(0, 3)}
        recommendedArray={recommendedRecruitArray}
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
            <RecruitArrangementSelect />
          </Hstack>
        </RoundBox>

        <Vstack gap="none">
          <Vstack gap="none" className="mb-oz-xl text-lg font-semibold">
            전체 공고({data?.total_count ?? 0})
          </Vstack>
          {isSearching && recruitArray.length === 0 && <NoSearchResult />}
          {recruitArray.length > 0 && (
            <Vstack gap="none" className="items-center gap-12">
              <Vstack gap="none" className="w-full">
                {recruitArray.map((recruit) => (
                  <RecruitCard key={recruit.uuid} recruit={recruit} />
                ))}
              </Vstack>
              <Button
                variant="contained"
                status="enabled"
                size="lg"
                className="mb-oz-xxl"
              >
                + 더 많은 공고 보기
              </Button>
            </Vstack>
          )}
        </Vstack>
      </Vstack>
    </Container>
  )
}

export default RecruitContent
