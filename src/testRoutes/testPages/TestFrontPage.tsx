import Button from '@/components/commonInGeneral/button/Button'
import { Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import TitledRoundBox from '@/components/commonInProject/TitledRoundBox/TitledRoundBox'
import { useNavigate } from 'react-router'

const TestFrontPage = () => {
  const navigate = useNavigate()

  return (
    <Container width="md" isPadded>
      <RoundBox>
        <Vstack gap="xxl">
          <TitledRoundBox>
            <TitledRoundBox.Title>API</TitledRoundBox.Title>
            <Button onClick={() => navigate('/test/api')}>API test page</Button>
          </TitledRoundBox>

          <TitledRoundBox>
            <TitledRoundBox.Title>은정님</TitledRoundBox.Title>
          </TitledRoundBox>

          <TitledRoundBox>
            <TitledRoundBox.Title>혜정님</TitledRoundBox.Title>
          </TitledRoundBox>

          <TitledRoundBox>
            <TitledRoundBox.Title>병권님</TitledRoundBox.Title>
          </TitledRoundBox>

          <TitledRoundBox>
            <TitledRoundBox.Title>하흥주</TitledRoundBox.Title>
          </TitledRoundBox>
        </Vstack>
      </RoundBox>
    </Container>
  )
}

export default TestFrontPage
