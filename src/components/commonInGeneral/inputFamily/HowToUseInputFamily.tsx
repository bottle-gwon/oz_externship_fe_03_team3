import { ArrowBigDown } from 'lucide-react'
import { Vstack } from '../layout'
import Container from '../layout/_Container'
import Input from './input/Input'
import Labeled from './labeled/Labeled'
import Textarea from './textarea/Textarea'

const HowToUseInputFamily = () => {
  return (
    <Container isPadded>
      <Vstack>
        <Input placeholder="보통 인풋" />
        <Input
          placeholder="아이콘은 자동으로 회색이 됩니다"
          icon={<ArrowBigDown />}
        />

        <Input isInDanger placeholder="빨간 테투리" />

        <Textarea
          isShort
          placeholder="3줄 높이. `가능한 시간대` 입력란에서만 사용됩니다 "
        />

        <Textarea placeholder="4줄 높이. 그 외 textarea는 모두 이것입니다" />

        <Textarea isInDanger placeholder="not short in danger" />

        <Labeled>
          <Labeled.Header>Labeled 사용 예시</Labeled.Header>
          <Input placeholder="Labeled 안에서 원하는 인풋 혹은 textarea를 사용해도 되지만" />
          <Labeled.Footer></Labeled.Footer>
        </Labeled>

        <Labeled>
          <Labeled.Header>Labeled 사용 예시</Labeled.Header>
          <Labeled.Input placeholder="Labeled.Input을 쓰면 Labeled의 isDanger가 자동 전달됩니다" />
          <Labeled.Footer>
            푸터는 칠드런이 있을 때만 공간을 차지합니다
          </Labeled.Footer>
        </Labeled>

        <Labeled isInDanger>
          <Labeled.Header>에러 발생 = isInDanger</Labeled.Header>
          <Labeled.Input placeholder="비밀번호를 입력하세요" />
          <Labeled.Footer>올바른 형식으로 입력해주세요</Labeled.Footer>
        </Labeled>

        <Labeled isRequired>
          <Labeled.Header>isRequired: 자동 빨간 별</Labeled.Header>
          <Labeled.Input placeholder="푸터는 비어있어도 됩니다" />
          <Labeled.Footer></Labeled.Footer>
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

export default HowToUseInputFamily
