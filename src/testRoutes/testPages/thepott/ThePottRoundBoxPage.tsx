import { Vstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'

const colorArray = [
  'mono-bright',
  'mono-dim',
  'primary',
  'danger',
  'success',
  'blue',
] as const
type RoundBoxColor = (typeof colorArray)[number]

const TestRoundBox = ({
  color,
  isBordered,
}: {
  color: RoundBoxColor
  isBordered: boolean
}) => {
  return (
    <RoundBox
      color={color}
      isBordered={isBordered}
      className="h-[100px] w-[100px]"
    >
      {color}__{isBordered}
    </RoundBox>
  )
}

const ThePottRoundBoxPage = () => {
  return (
    <Vstack>
      {colorArray.map((color) => (
        <TestRoundBox key={color} color={color} isBordered />
      ))}
    </Vstack>
  )
}

export default ThePottRoundBoxPage
