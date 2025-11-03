import Button from '@/components/commonInGeneral/button/Button'
import Dropdown from '@/components/commonInGeneral/dropdown/Dropdown'
import { Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'

const ThePottDropdownPage = () => {
  return (
    <Container width="md" isPadded>
      <RoundBox>
        <Dropdown>
          <Dropdown.Trigger>
            <Button>누르면 아래 보임</Button>
          </Dropdown.Trigger>
          <Dropdown.Content>
            <RoundBox>
              <Vstack>
                <p>asdfasdfkajsdhfjklasdhfjkladfhasjkflasdfasdfasd</p>
                <p>asdfasdfasdfasd</p>
                <p>asdfasdfasdfasd</p>
                <p>asdfasdfasdfasd</p>
                <p>asdfasdfasdfasd</p>
                <p>asdfasdfasdfasd</p>
                <p>asdfasdfasdfasd</p>
                <p>asdfasdfasdfasd</p>
              </Vstack>
            </RoundBox>
          </Dropdown.Content>
        </Dropdown>
      </RoundBox>
    </Container>
  )
}

export default ThePottDropdownPage
