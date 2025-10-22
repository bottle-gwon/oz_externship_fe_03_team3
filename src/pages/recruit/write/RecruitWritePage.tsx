import { Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import TitleSection from '@/components/titleSection/TitleSection'

const RecruitWritePage = () => {
  return (
    <Container width="lg" isPadded>
      <Vstack gap="xxl">
        {/* 여기 바텀 패딩이 없어야할 거 같은데 */}
        {/* isPaddedBottom 옵션 넣어달라고 하고 우선 이대로 진행하자 */}
        <TitleSection type="create" />
        <RoundBox></RoundBox>
        <RoundBox></RoundBox>
        <RoundBox></RoundBox>
        <RoundBox></RoundBox>
        <RoundBox></RoundBox>
      </Vstack>
    </Container>
  )
}

export default RecruitWritePage
