import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import {
  GridContainer,
  Vstack,
} from '../../../components/commonInGeneral/layout'
import Container from '../../../components/commonInGeneral/layout/_Container'
import FlexOneContainer from '../../../components/commonInGeneral/layout/_FlexOneContainer'
import FullScreen from '../../../components/commonInGeneral/layout/_FullScreen'
import Select from '@/components/commonInGeneral/select/Select'
import { ArrowBigDown } from 'lucide-react'

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
      <ArrowBigDown />
      <Select
        onOptionChange={(option: string) => console.log({ option })}
        className="w-[200px]"
      >
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
          asdfasdf
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
