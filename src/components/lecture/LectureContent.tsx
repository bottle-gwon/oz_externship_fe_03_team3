import { useState } from 'react'
import Button from '../commonInGeneral/button/Button'
import { GridContainer, Vstack } from '../commonInGeneral/layout'
import Container from '../commonInGeneral/layout/_Container'
import RoundBox from '../commonInGeneral/roundBox/RoundBox'
import Select from '../commonInGeneral/select/Select'
import LectureCard from './lectureCard/LectureCard'
import TitleSection from '../titleSection/TitleSection'
import RecommendSection from '../recommendSection/RecommendSection'
import LectureSearchInput from './_LectureSearchInput'
import useStudyHubStore from '@/store/store'
import { dummyLectureArray } from './dummyLectureArray'
import NoSearchResult from '../commonInProject/noSearchResult/NoSearchResult'

const LectureContent = () => {
  const [isSearching, setIsSearching] = useState(false)
  const [isLoggedInForDebug, setIsLoggedInForDebug] = useState(false)
  const lectureArray = useStudyHubStore((state) => state.lectureArray)

  const handleFilterReset = () => {}
  const handleNewSearch = () => {}

  return (
    <Container className="py-oz-xxl">
      {/* header -- 제작해주시는 것으로 교체할 예정 */}
      <Vstack className="px-oz-xxl">
        <Button onClick={() => setIsLoggedInForDebug(!isLoggedInForDebug)}>
          로그인 여부 토글 ____ 디버그용
        </Button>
        <TitleSection isLoggedIn={isLoggedInForDebug} type="lecture" />
      </Vstack>

      <RecommendSection
        type="lecture"
        isLoggedIn={isLoggedInForDebug}
        recommendedArray={dummyLectureArray.slice(0, 3)}
      />

      <Vstack className="px-oz-xxl gap-oz-xxl">
        <RoundBox>
          <GridContainer className="gap-oz-lg">
            <LectureSearchInput />

            <Select onOptionSelect={() => null} className="w-full">
              <Select.Trigger>전체 카테고리(자리 확인용)</Select.Trigger>
            </Select>

            <Select onOptionSelect={() => null} className="w-full">
              <Select.Trigger>최신순(눌리지 않음)</Select.Trigger>
            </Select>
          </GridContainer>
        </RoundBox>

        <NoSearchResult />

        {/* <GridContainer className="gap-oz-xl"> */}
        {/*   {lectureArray.map((lecture) => ( */}
        {/*     <LectureCard key={lecture.uuid} lecture={lecture} /> */}
        {/*   ))} */}
        {/* </GridContainer> */}
      </Vstack>
    </Container>
  )
}

export default LectureContent
