import Input from '@/components/commonInGeneral/inputFamily/Input'
import Labeled from '@/components/commonInGeneral/inputFamily/Labeled'
import Textarea from '@/components/commonInGeneral/inputFamily/Textarea'
import { Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'

const ThePottInputFamilyPage = () => {
  return (
    <Container isPadded>
      <Vstack>
        <Input placeholder="input" />
        <Input isInDanger placeholder="input in danger" />
        <Textarea isShort placeholder="short" />
        <Textarea placeholder="not short" />
        <Textarea isInDanger placeholder="not short in danger" />

        <Labeled>
          <Labeled.Header>레이블 그룹 사용</Labeled.Header>
          <Input placeholder="Footer 안에 아무것도 없어도 괜찮습니다" />
          <Labeled.Footer></Labeled.Footer>
        </Labeled>

        <Labeled isInDanger>
          <Labeled.Header>비밀번호</Labeled.Header>
          <Labeled.Input placeholder="비밀번호를 입력하세요" />
          <Labeled.Footer>올바른 형식으로 입력해주세요</Labeled.Footer>
        </Labeled>

        <Labeled isInDanger isRequired>
          <Labeled.Header>비밀번호</Labeled.Header>
          <Labeled.Input placeholder="LabeledInput을 쓰면 isDanger가 알아서 전달됩니다" />
          <Labeled.Footer>올바른 형식으로 입력해주세요</Labeled.Footer>
        </Labeled>

        <Labeled isInDanger isRequired>
          <Labeled.Header>비밀번호</Labeled.Header>
          <Labeled.Textarea placeholder="Textarea도 마찬가지입니다." />
          <Labeled.Footer>올바른 형식으로 입력해주세요</Labeled.Footer>
        </Labeled>
      </Vstack>
    </Container>
  )
}

export default ThePottInputFamilyPage
