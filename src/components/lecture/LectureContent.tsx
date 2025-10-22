import { useState } from 'react'
import Button from '../commonInGeneral/button/Button'
import { GridContainer, Vstack } from '../commonInGeneral/layout'
import Container from '../commonInGeneral/layout/_Container'
import RoundBox from '../commonInGeneral/roundBox/RoundBox'
import Select from '../commonInGeneral/select/Select'
import { dummyLectureArray } from './lectureListDummy'
import LectureCard from './lectureCard/LectureCard'
import TitleSection from '../titleSection/TitleSection'
import RecommendSection from '../recommendSection/RecommendSection'
import Input from '../commonInGeneral/inputFamily/input/Input'

const LectureContent = () => {
  const [isLoggedInForDebug, setIsLoggedInForDebug] = useState(false)

  // TODO: 더미 데이터 사용중. 나중에 삭제해야 합니다!

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
            <Input placeholder="검색어를 입력하세요" />
            <Select onOptionSelect={() => null} className="w-full">
              <Select.Trigger>전체 카테고리(자리 확인용)</Select.Trigger>
            </Select>
            <Select onOptionSelect={() => null} className="w-full">
              <Select.Trigger>최신순(눌리지 않음)</Select.Trigger>
            </Select>
          </GridContainer>
        </RoundBox>

        <GridContainer className="gap-oz-xl">
          {dummyLectureArray.map((lecture) => (
            <LectureCard key={lecture.uuid} lecture={lecture} />
          ))}
        </GridContainer>
      </Vstack>
    </Container>
  )
}

export default LectureContent
