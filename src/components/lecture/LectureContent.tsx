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

// TODO: 이건 api 연결하면서 삭제해야 함!
// const dummyGetLectureWithParametersApi = (
//   debounceValue: string,
//   category: string | null,
//   orderingInText: LectureOrderingInText
// ) => {
//   const setLectureArray = useStudyHubStore.getState().setLectureArray
//
//   const filteredLectureArray = dummyLectureArray
//     .filter(
//       (lecture) =>
//         lecture.title.includes(debounceValue) ||
//         lecture.instructor.includes(debounceValue)
//     )
//     .filter((lecture) => {
//       if (!category || category === '전체 카테고리') {
//         return true
//       }
//       const nameArray = lecture.categories.map(
//         (tempCategory) => tempCategory.name
//       )
//       return nameArray.includes(category)
//     })
//     .sort((a, b) => {
//       switch (orderingInText) {
//         case '최신순':
//           return 1
//         case '가격 높은 순':
//           return b.discount_price - a.discount_price
//         case '가격 낮은 순':
//           return a.discount_price - b.discount_price
//         case '평점 높은 순':
//           return b.average_rating - a.average_rating
//         case '평점 낮은 순':
//           return a.average_rating - b.average_rating
//       }
//     })
//
//   setLectureArray(filteredLectureArray)
// }

const LectureContent = () => {
  const accessToken = useStudyHubStore((state) => state.accessToken)

  const {
    data,
    isPending,
    error,
    // getNextPage, // <<-- 무한 스크롤 구현할 때 사용
    searchText,
    setSearchText,
    setSelectedCategory,
    setSelectedOrderingInText,
    isSearching,
    cancel,
  } = useLectures()

  if (isPending) {
    return <p>스켈레톤을 넣어야 합니다</p>
  }

  if (!isPending && error) {
    return <p>불러오는 데에 실패했다는 화면을 널어야 합니다</p>
  }

  if (!data || !data.results) {
    return <p>이게 보여도 되나??</p>
  }

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
        recommendedArray={data.recommended_lectures}
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

        {isSearching && data.results.length === 0 && <NoSearchResult />}
        {data.results.length > 0 && (
          <GridContainer className="gap-oz-xl">
            {data.results.map((lecture) => (
              <LectureCard key={lecture.uuid} lecture={lecture} />
            ))}
          </GridContainer>
        )}
        {/* 필터 없이 불러온 강의가 없을 때는 피그마에서 다루지 않아 고려하지 않았습니다 */}
      </Vstack>
    </Container>
  )
}

export default LectureContent
