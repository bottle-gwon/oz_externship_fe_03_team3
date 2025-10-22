import Input from '@/components/commonInGeneral/inputFamily/input/Input'
import Labeled from '@/components/commonInGeneral/inputFamily/labeled/Labeled'
import Textarea from '@/components/commonInGeneral/inputFamily/textarea/Textarea'
import {
  GridContainer,
  Hstack,
  Vstack,
} from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import Select from '@/components/commonInGeneral/select/Select'
import TitleSection from '@/components/titleSection/TitleSection'

const RecruitWritePage = () => {
  return (
    <Container width="md" isPadded>
      <Vstack gap="xxl">
        {/* 여기 바텀 패딩이 없어야할 거 같은데 */}
        {/* isPaddedBottom 옵션 넣어달라고 하고 우선 이대로 진행하자 */}
        <TitleSection type="create" />
        <RoundBox padding="xxl">
          <Vstack gap="xl">
            <Labeled isRequired>
              <Labeled.Header>공고 제목</Labeled.Header>
              <Labeled.Input />
              <Labeled.Footer></Labeled.Footer>
            </Labeled>
            <Labeled isRequired>
              <Labeled.Header>대상 스터디 그룹</Labeled.Header>
              <Select onOptionSelect={() => null}>
                <Select.Trigger>스터디 그룹을 선택해주세요</Select.Trigger>
                <Select.Content>
                  <Select.Option>점프 투 파이썬</Select.Option>
                  <Select.Option>자료구조와 C</Select.Option>
                  <Select.Option>파이썬으로 크롤러 만들기</Select.Option>
                  <Select.Option>UI와UX 알아보기</Select.Option>
                  <Select.Option>모던 자바스크립트</Select.Option>
                </Select.Content>
              </Select>
              <Labeled.Footer></Labeled.Footer>
            </Labeled>

            <GridContainer>
              <Labeled isRequired>
                <Labeled.Header>공고 마감 기한</Labeled.Header>
                <Labeled.Input type="date" />
                <Labeled.Footer></Labeled.Footer>
              </Labeled>
              <Labeled isRequired>
                <Labeled.Header>예상 모집 인원</Labeled.Header>
                <Select onOptionSelect={() => null}>
                  <Select.Trigger>예상 모집 인원을 선택하세요</Select.Trigger>
                  <Select.Content>
                    <Select.Option>1명</Select.Option>
                    <Select.Option>2명</Select.Option>
                    <Select.Option>3명</Select.Option>
                    <Select.Option>에이 모르겠다</Select.Option>
                  </Select.Content>
                </Select>
              </Labeled>
            </GridContainer>
          </Vstack>
        </RoundBox>
        <RoundBox></RoundBox>
        <RoundBox></RoundBox>
        <RoundBox></RoundBox>
        <RoundBox></RoundBox>
      </Vstack>
    </Container>
  )
}

export default RecruitWritePage
