import { GridContainer, Vstack } from '../commonInGeneral/layout'
import Container from '../commonInGeneral/layout/_Container'
import RoundBox from '../commonInGeneral/roundBox/RoundBox'
import Select from '../commonInGeneral/select/Select'

const LectureContent = () => {
  return (
    <Container>
      <Vstack gap="xl">
        <Vstack className="px-xl">
          <div>
            IT 강의 목록 -- 여기는 혜정님이 작성해주시는 PageHeader로 교체
          </div>
          <div>전문 강사들의 고품질 IT 강의를 만나보세요</div>
        </Vstack>

        <RoundBox color="primary">추천 섹션, 추후 제작 예정</RoundBox>

        <Vstack gap="xl" className="px-xl">
          <RoundBox>
            <GridContainer>
              <RoundBox className="w-full">강의명이나 강사로 검색</RoundBox>
              <Select onOptionSelect={() => null} className="w-full">
                <Select.Trigger>전체 카테고리</Select.Trigger>
              </Select>
              <Select onOptionSelect={() => null} className="w-full">
                <Select.Trigger>최신순</Select.Trigger>
              </Select>
            </GridContainer>
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
      </Vstack>
    </Container>
  )
}

export default LectureContent
