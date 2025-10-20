import { useState } from 'react'
import Button from '../commonInGeneral/button/Button'
import { GridContainer, Vstack } from '../commonInGeneral/layout'
import Container from '../commonInGeneral/layout/_Container'
import RoundBox from '../commonInGeneral/roundBox/RoundBox'
import Select from '../commonInGeneral/select/Select'
import Text from '../commonInGeneral/text/Text'
import { dummyLectureArray } from './lectureListDummy'
import LectureCard from './LectureCard'

const LectureContent = () => {
  const [isLoggedInForDebug, setIsLoggedInForDebug] = useState(false)

  // TODO: 더미 데이터 사용중. 나중에 삭제해야 합니다!

  return (
    <Container>
      <Vstack className="gap-oz-xxl px-oz-xl">
        {/* header -- 제작해주시는 것으로 교체할 예정 */}
        <Vstack className="px-oz-xl">
          <Button onClick={() => setIsLoggedInForDebug(!isLoggedInForDebug)}>
            로그인 여부 토글 ____ 디버그용
          </Button>
          <Text>
            IT 강의 목록 -- 여기는 혜정님이 작성해주시는 PageHeader로 교체
          </Text>
          <Text>전문 강사들의 고품질 IT 강의를 만나보세요</Text>
        </Vstack>

        <RoundBox
          color="primary"
          className={isLoggedInForDebug ? 'p-oz-xl' : 'p-oz-xxl mx-oz-xl'}
        >
          <Text>
            추천 섹션, 로그인 유도 섹션. 혜정님께서 작성하신 것 공통화 후 사용할
            예정
          </Text>
          <Text>로그인 여부: {JSON.stringify(isLoggedInForDebug)}</Text>
        </RoundBox>

        <Vstack className="px-oz-xl gap-oz-xxl">
          <RoundBox>
            <GridContainer className="gap-oz-lg">
              <RoundBox>검색창 자리 확인용(기능 없음)</RoundBox>
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
      </Vstack>
    </Container>
  )
}

export default LectureContent
