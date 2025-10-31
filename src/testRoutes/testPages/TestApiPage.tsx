import Button from '@/components/commonInGeneral/button/Button'
import { Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'

const TestApiPage = () => {
  return (
    <Container width="md" isPadded>
      <RoundBox>
        <Vstack gap="xxl">
          <Button>로그인</Button>
        </Vstack>
      </RoundBox>
    </Container>
  )
}

export default TestApiPage
