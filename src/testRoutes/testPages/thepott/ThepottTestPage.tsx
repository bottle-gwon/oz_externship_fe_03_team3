import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import {
  GridContainer,
  Hstack,
  Vstack,
} from '../../../components/commonInGeneral/layout'
import Container from '../../../components/commonInGeneral/layout/_Container'
import FlexOneContainer from '../../../components/commonInGeneral/layout/_FlexOneContainer'
import FullScreen from '../../../components/commonInGeneral/layout/_FullScreen'
import Select from '@/components/commonInGeneral/select/Select'
import { ArrowBigDown } from 'lucide-react'
import Text from '../../../components/commonInGeneral/text/Text'
import Button from '@/components/commonInGeneral/button/Button'

const Box = () => {
  return <div className="h-[100px] w-[100px] bg-amber-300">뭔가 있음</div>
}

const LongBox = () => {
  return <div className="h-[100px] w-full bg-red-600">뭔가 있음</div>
}
const BlueLongBox = () => {
  return <div className="h-[100px] w-full bg-sky-300">뭔가 있음</div>
}

const ThepottTestPage = () => {
  return (
    <Vstack className="w-2xl bg-rose-200">
      <Hstack>
        <Button variant="contained" color="mono">
          뭔가 멋진 이름
        </Button>
        <Button variant="contained" color="danger">
          뭔가 멋진 이름
        </Button>
        <Button variant="contained" color="success">
          뭔가 멋진 이름
        </Button>
        <Button variant="contained" color="blue">
          뭔가 멋진 이름
        </Button>
        <Button variant="contained" color="primary">
          뭔가 멋진 이름
        </Button>
      </Hstack>
      <ArrowBigDown />
      <Select onOptionSelect={() => null} className="w-[200px]">
        <Select.Trigger>나를 눌러요</Select.Trigger>
        <Select.Content>
          <Select.Option>apple</Select.Option>
          <Select.Option>banana</Select.Option>
          <Select.Option icon={<ArrowBigDown />}>carrot</Select.Option>
        </Select.Content>
      </Select>

      <FullScreen className="bg-sky-300" />
      <RoundBox className="h-[500px] w-[1500px] bg-amber-700 p-3">
        <Container isPadded className="bg-amber-300">
          <Text>이건 아주 멋진 거야</Text>
        </Container>
      </RoundBox>

      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <div className="flex h-[200px] w-[500px] flex-col gap-3 overflow-hidden">
        <BlueLongBox />
        <FlexOneContainer isYScrollable>
          <Vstack>
            <LongBox />
            <LongBox />
            <LongBox />
            <LongBox />
            <LongBox />
            <LongBox />
            <LongBox />
            <LongBox />
            <LongBox />
            <LongBox />
            <LongBox />
          </Vstack>
        </FlexOneContainer>
      </div>
      <GridContainer>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </GridContainer>
    </Vstack>
  )
}

export default ThepottTestPage
