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
import useLectures from '@/hooks/lecture/useLectures'
import useOneWayInfinityScroll from '@/hooks/useOneWayInfinityScroll'

const LectureContent = () => {
  const accessToken = useStudyHubStore((state) => state.accessToken)
  const lectureArray = useStudyHubStore((state) => state.lectureArray)
  const recommendedLectureArray = useStudyHubStore(
    (state) => state.recommendedLectureArray
  )

  const {
    requestNextPage,
    searchText,
    setSearchText,
    setSelectedCategory,
    setSelectedOrderingInText,
    isSearching,
    cancel,
  } = useLectures()

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
            <LectureSearchInput
              searchText={searchText}
              setSearchText={setSearchText}
              cancelDebounce={cancel}
            />

            <LectureCategorySelect setSelectedCategory={setSelectedCategory} />

            <LectureOrderingSelect
              setSelectedOrderingInText={setSelectedOrderingInText}
            />
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
            <div ref={targetRef} />
          </>
        )}
        {/* 필터 없이 불러온 강의가 없을 때는 피그마에서 다루지 않아 고려하지 않았습니다 */}
      </Vstack>
    </Container>
  )
}

export default LectureContent
