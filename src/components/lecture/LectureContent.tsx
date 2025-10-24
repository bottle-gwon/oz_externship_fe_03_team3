import { useEffect, useState } from 'react'
import { GridContainer, Vstack } from '../commonInGeneral/layout'
import Container from '../commonInGeneral/layout/_Container'
import RoundBox from '../commonInGeneral/roundBox/RoundBox'
import LectureCard from './lectureCard/LectureCard'
import TitleSection from '../titleSection/TitleSection'
import RecommendSection from '../recommendSection/RecommendSection'
import LectureSearchInput from './_LectureSearchInput'
import useStudyHubStore from '@/store/store'
import { dummyLectureArray } from './dummyLectureArray'
import NoSearchResult from '../commonInProject/noSearchResult/NoSearchResult'
import LectureCategorySelect from './_LectureCategorySelect'
import LectureOrderingSelect from './_LectureOrderingSelect'
import useDebounce from '@/hooks/useDebounce'
import type { LectureOrderingInText } from '@/types'

// TODO: 이건 api 연결하면서 삭제해야 함!
const dummyGetLectureWithParametersApi = (
  debounceValue: string,
  category: string | null,
  orderingInText: LectureOrderingInText
) => {
  const setLectureArray = useStudyHubStore.getState().setLectureArray

  const filteredLectureArray = dummyLectureArray
    .filter(
      (lecture) =>
        lecture.title.includes(debounceValue) ||
        lecture.instructor.includes(debounceValue)
    )
    .filter((lecture) => {
      if (!category) {
        return true
      }
      const nameArray = lecture.categories.map(
        (tempCategory) => tempCategory.name
      )
      return nameArray.includes(category)
    })

  debugger

  setLectureArray(filteredLectureArray)
}

const LectureContent = () => {
  const [isSearching, setIsSearching] = useState(false)
  const accessToken = useStudyHubStore((state) => state.accessToken)
  const lectureArray = useStudyHubStore((state) => state.lectureArray)

  const [searchText, setSearchText] = useState('')
  const [debounceValue, cancel] = useDebounce(searchText, 500)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedOrderingInText, setSelectedOrderingInText] =
    useState<LectureOrderingInText>('최신순')

  useEffect(() => {
    dummyGetLectureWithParametersApi(
      debounceValue,
      selectedCategory,
      selectedOrderingInText
    )

    if (debounceValue === '') {
      setIsSearching(false)
    } else {
      setIsSearching(true)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue, selectedCategory, selectedOrderingInText])

  return (
    <Container className="py-oz-xxl">
      {/* header -- 제작해주시는 것으로 교체할 예정 */}
      <Vstack className="px-oz-xxl">
        <TitleSection isLoggedIn={Boolean(accessToken)} type="lecture" />
      </Vstack>

      <RecommendSection
        type="lecture"
        isLoggedIn={Boolean(accessToken)}
        recommendedArray={dummyLectureArray.slice(0, 3)}
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

            <LectureOrderingSelect />
          </GridContainer>
        </RoundBox>

        {isSearching && lectureArray.length === 0 && <NoSearchResult />}
        {lectureArray.length > 0 && (
          <GridContainer className="gap-oz-xl">
            {lectureArray.map((lecture) => (
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
