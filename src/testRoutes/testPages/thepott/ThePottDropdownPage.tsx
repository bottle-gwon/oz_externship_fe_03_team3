import Button from '@/components/commonInGeneral/button/Button'
import Dropdown from '@/components/commonInGeneral/dropdown/Dropdown'
import { Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'

const ThePottDropdownPage = () => {
  const handleChange = (_value: string) => {
    // NOTE: 테스트할 땐 아래의 주석을 해제해주세요
    console.log({ _value })
    debugger
    // ---- 여기까지
  }
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

        <Dropdown>
          <Dropdown.Trigger>
            <Button>누르면 메뉴 나옴</Button>
          </Dropdown.Trigger>
          <Dropdown.Menu onChange={handleChange}>
            <Dropdown.MenuItem value="a">asdf</Dropdown.MenuItem>
            <Dropdown.MenuItem value="b">asdf</Dropdown.MenuItem>
            <Dropdown.MenuItem value="c">asdf</Dropdown.MenuItem>
            <Dropdown.MenuItem value="asdf">asdf</Dropdown.MenuItem>
            <Dropdown.MenuItem value="asdf">asdf</Dropdown.MenuItem>
            <Dropdown.MenuItem value="asdf">asdf</Dropdown.MenuItem>
          </Dropdown.Menu>
        </Dropdown>
      </RoundBox>
    </Container>
  )
}

export default ThePottDropdownPage
