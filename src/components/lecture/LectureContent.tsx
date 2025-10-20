import { GridContainer, Hstack, Vstack } from '../commonInGeneral/layout'
import Container from '../commonInGeneral/layout/_Container'
import RoundBox from '../commonInGeneral/roundBox/RoundBox'
import Select from '../commonInGeneral/select/Select'

const LectureContent = () => {
  return (
    <Container>
      <Vstack>
        <Vstack>
          <div>
            IT 강의 목록 -- 여기는 혜정님이 작성해주시는 PageHeader로 교체
          </div>
          <div>전문 강사들의 고품질 IT 강의를 만나보세요</div>
        </Vstack>

        <RoundBox>
          <div>강의명이나 강사로 검색</div>
          <Hstack>
            <Select onOptionSelect={() => null}>
              <Select.Trigger>전체 카테고리</Select.Trigger>
            </Select>
            <Select onOptionSelect={() => null}>
              <Select.Trigger>최신순</Select.Trigger>
            </Select>
          </Hstack>
        </RoundBox>

        <GridContainer gap="lg">
          <RoundBox className="h-[516px]">강의 카드</RoundBox>
          <RoundBox className="h-[516px]">강의 카드</RoundBox>
          <RoundBox className="h-[516px]">강의 카드</RoundBox>
          <RoundBox className="h-[516px]">강의 카드</RoundBox>
          <RoundBox className="h-[516px]">강의 카드</RoundBox>
          <RoundBox className="h-[516px]">강의 카드</RoundBox>
          <RoundBox className="h-[516px]">강의 카드</RoundBox>
          <RoundBox className="h-[516px]">강의 카드</RoundBox>
          <RoundBox className="h-[516px]">강의 카드</RoundBox>
        </GridContainer>
      </Vstack>
    </Container>
  )
}

export default LectureContent
