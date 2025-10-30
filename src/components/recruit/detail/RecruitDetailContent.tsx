import { Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import SubHeader from '@/components/commonInProject/SubHeader/SubHeader'
import TitledRoundBox from '@/components/commonInProject/TitledRoundBox/TitledRoundBox'

const RecruitDetailContent = () => {
  return (
    <Container>
      <Vstack gap="xxl">
        <SubHeader isBackButtonVisible />

        <RoundBox padding="xxl">
          <h1>어쩌고 저쩌고</h1>
        </RoundBox>

        <TitledRoundBox>
          <TitledRoundBox.Title>공고 내용</TitledRoundBox.Title>
        </TitledRoundBox>

        <TitledRoundBox>
          <TitledRoundBox.Title>스터디 강의 목록</TitledRoundBox.Title>
        </TitledRoundBox>

        <TitledRoundBox>
          <TitledRoundBox.Title>첨부 파일</TitledRoundBox.Title>
        </TitledRoundBox>

        <RoundBox padding="xl"></RoundBox>
      </Vstack>
    </Container>
  )
}

export default RecruitDetailContent
