import { useState } from 'react'
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
  const accessToken = useStudyHubStore((state) => state.accessToken)
  const lectureArray = useStudyHubStore((state) => state.lectureArray)

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
            <LectureSearchInput setIsSearching={setIsSearching} />

            <Select onOptionSelect={() => null} className="w-full">
              <Select.Trigger>전체 카테고리(자리 확인용)</Select.Trigger>
            </Select>

            <Select onOptionSelect={() => null} className="w-full">
              <Select.Trigger>최신순(눌리지 않음)</Select.Trigger>
            </Select>
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
