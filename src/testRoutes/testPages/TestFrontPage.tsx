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
            <Button onClick={() => navigate('/test/nari')}>
              Nari Test Page
            </Button>
            <Button onClick={() => navigate('/test/narimodal')}>
              Application Modal Page
            </Button>
            <Button onClick={() => navigate('/test/narimanage')}>
              Recruit Management Page
            </Button>
            <Button onClick={() => navigate('/test/narimanage1')}>
              How To Use Select
            </Button>
          </TitledRoundBox>

          <TitledRoundBox>
            <TitledRoundBox.Title>혜정님</TitledRoundBox.Title>
            <Button onClick={() => navigate('/test/hyejeong')}>
              Recommend Section
            </Button>
            <Button onClick={() => navigate('/test/hyejeong/title')}>
              Recruit PAge
            </Button>
            <Button onClick={() => navigate('/test/hyejeong/recruitlist')}>
              Recruit Page
            </Button>
            <Button onClick={() => navigate('/test/hyejeong/subheader')}>
              Sub Header
            </Button>
            <Button onClick={() => navigate('/test/hyejeong/apllicantcard')}>
              Applicant Card Modal
            </Button>
            <Button onClick={() => navigate('/test/hyejeong/managemodal')}>
              Manage Modal
            </Button>
            <Button onClick={() => navigate('/test/hyejeong/managedetail')}>
              Manage Detail Modal
            </Button>
          </TitledRoundBox>

          <TitledRoundBox>
            <TitledRoundBox.Title>병권님</TitledRoundBox.Title>
            <Button onClick={() => navigate('/test/gwon')}>Test Page</Button>
            <Button onClick={() => navigate('/test/gwon/modal')}>
              Modal Test
            </Button>
            <Button onClick={() => navigate('/test/gwon/floating')}>
              Floating
            </Button>
            <Button onClick={() => navigate('/test/gwon/chat')}>Chat</Button>
          </TitledRoundBox>

          <TitledRoundBox>
            <TitledRoundBox.Title>하흥주</TitledRoundBox.Title>
            <Button onClick={() => navigate('/test/thepott')}>Test Page</Button>
            <Button onClick={() => navigate('/test/thepott/button')}>
              Button Page
            </Button>
            <Button onClick={() => navigate('/test/thepott/roundbox')}>
              Roundbox Page
            </Button>
            <Button onClick={() => navigate('/test/thepott/modal')}>
              Modal Page
            </Button>
            <Button onClick={() => navigate('/test/thepott/input-family')}>
              Markdown Page
            </Button>
            <Button onClick={() => navigate('/test/thepott/markdown')}>
              Skeleton Page
            </Button>
            <Button onClick={() => navigate('/test/thepott/file-dropzone')}>
              File Dropzone
            </Button>
          </TitledRoundBox>
        </Vstack>
      </RoundBox>
    </Container>
  )
}

export default TestFrontPage
