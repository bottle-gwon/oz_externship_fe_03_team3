import Input from '@/components/commonInGeneral/inputFamily/Input'
import Textarea from '@/components/commonInGeneral/inputFamily/Textarea'
import { Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'

const ThePottInputFamilyPage = () => {
  return (
    <Container isPadded>
      <Vstack>
        <Input />
        <Input isInDanger />
        <Textarea isShort placeholder="short" />
        <Textarea placeholder="not short" />
        <Textarea isInDanger placeholder="not short in danger" />
      </Vstack>
    </Container>
  )
}

export default ThePottInputFamilyPage
