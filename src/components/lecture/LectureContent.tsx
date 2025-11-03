import { GridContainer, Vstack } from '../commonInGeneral/layout'
import Container from '../commonInGeneral/layout/_Container'
import RoundBox from '../commonInGeneral/roundBox/RoundBox'
import LectureCard from './lectureCard/LectureCard'
import RecommendSection from '../recommendSection/RecommendSection'
import LectureSearchInput from './_LectureSearchInput'
import useStudyHubStore from '@/store/store'
import NoSearchResult from '../commonInProject/noSearchResult/NoSearchResult'
import LectureCategorySelect from './_LectureCategorySelect'
import LectureOrderingSelect from './_LectureOrderingSelect'
import SubHeader from '../commonInProject/SubHeader/SubHeader'
import SubHeaderTitleSection from '../commonInProject/SubHeader/_SubHeaderTtileSectoin'
import useOneWayInfinityScroll from '@/hooks/useOneWayInfinityScroll'
import useLectureStore from '@/store/lecture/lectureStore'

const LectureContent = () => {
  const accessToken = useStudyHubStore((state) => state.accessToken)
  const lectureArray = useLectureStore((state) => state.lectureArray)
  const recommendedLectureArray = useLectureStore(
    (state) => state.recommendedLectureArray
  )
  const isSearching = useLectureStore((state) => state.isSearching)
  const requestNextPage = useLectureStore((state) => state.requestNextPage)

  // TODO: request next page 로 이것 바꿔야
  const targetRef = useOneWayInfinityScroll(requestNextPage)

  return (
    <Container className="py-oz-xxl">
      <div className="px-oz-xxl">
        <SubHeader isBackButtonVisible={false}>
          <SubHeaderTitleSection>
            <SubHeader.Title>IT 강의 목록</SubHeader.Title>
            <SubHeader.Subtitle>
              전문 강사들의 고품질 IT 강의를 만나보세요
            </SubHeader.Subtitle>
          </SubHeaderTitleSection>
        </SubHeader>
      </div>

      <RecommendSection
        type="lecture"
        isLoggedIn={Boolean(accessToken)}
        recommendedArray={recommendedLectureArray}
      />

      <Vstack className="px-oz-xxl gap-oz-xxl">
        <RoundBox>
          <GridContainer className="gap-oz-lg">
            <LectureSearchInput />

            <LectureCategorySelect />

            <LectureOrderingSelect />
          </GridContainer>
        </RoundBox>

        {isSearching && lectureArray.length === 0 && <NoSearchResult />}
        {lectureArray.length > 0 && (
          <>
            <GridContainer className="gap-oz-xl">
              {lectureArray.map((lecture) => (
                <LectureCard key={lecture.uuid} lecture={lecture} />
              ))}
            </GridContainer>

            {/* 검색 결과 있을 때만 무한 스크롤 되게 */}
            <div ref={targetRef} className="h-[100px] w-full bg-amber-300" />
          </>
        )}
        {/* 필터 없이 불러온 강의가 없을 때는 피그마에서 다루지 않아 고려하지 않았습니다 */}
      </Vstack>
    </Container>
  )
}

export default LectureContent
