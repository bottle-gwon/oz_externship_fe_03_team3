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
          <Labeled.BigLabel>레이블 그룹 사용</Labeled.BigLabel>
          <Input placeholder="SmallLabel 안에 아무것도 없어도 괜찮습니다" />
          <Labeled.SmallLabel></Labeled.SmallLabel>
        </Labeled>

        <Labeled isInDanger>
          <Labeled.BigLabel>비밀번호</Labeled.BigLabel>
          <Labeled.Input placeholder="비밀번호를 입력하세요" />
          <Labeled.SmallLabel>올바른 형식으로 입력해주세요</Labeled.SmallLabel>
        </Labeled>

        <Labeled isInDanger>
          <Labeled.BigLabel>비밀번호</Labeled.BigLabel>
          <Labeled.Input placeholder="비밀번호를 입력하세요" />
          <Labeled.SmallLabel>올바른 형식으로 입력해주세요</Labeled.SmallLabel>
        </Labeled>
      </Vstack>
    </Container>
  )
}

export default ThePottInputFamilyPage
