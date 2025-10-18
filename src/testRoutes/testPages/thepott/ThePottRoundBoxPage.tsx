import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import Text from '@/components/commonInGeneral/text/Text'

const colorArray = [
  'mono-bright',
  'mono-dim',
  'primary',
  'danger',
  'success',
  'blue',
] as const
type RoundBoxColor = (typeof colorArray)[number]

const paddingArray = ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const
type RoundBoxPadding = (typeof paddingArray)[number]

const radiusArray = ['sm', 'md', 'lg', 'full'] as const
type RoundButtonRadius = (typeof radiusArray)[number]

interface WithRoundBoxProps {
  color?: RoundBoxColor
  isShadowed?: boolean
  isBordered?: boolean
  padding?: RoundBoxPadding
  radius?: RoundButtonRadius
}

const TestRoundBox = (props: WithRoundBoxProps) => {
  return <RoundBox {...props}>{JSON.stringify(props)}</RoundBox>
}

const TestRoundBoxColumn = (props: WithRoundBoxProps) => {
  return (
    <Vstack>
      {colorArray.map((color) => (
        <TestRoundBox key={color} {...props} color={color} />
      ))}
    </Vstack>
  )
}

const ThePottRoundBoxPage = () => {
  return (
    <Vstack>
      <Hstack>
        <Text>is shadowed</Text>
        {[true, false].map((isShadowed) => (
          <TestRoundBoxColumn
            key={Number(isShadowed)}
            isShadowed={isShadowed}
          />
        ))}
      </Hstack>
      <Hstack>
        <Text>is bordered</Text>
        {[true, false].map((isBordered) => (
          <TestRoundBoxColumn
            key={Number(isBordered)}
            isBordered={isBordered}
          />
        ))}
      </Hstack>
      <Hstack>
        <Text>padding</Text>
        {paddingArray.map((padding) => (
          <TestRoundBoxColumn key={padding} padding={padding} />
        ))}
      </Hstack>
      <Hstack>
        <Text>radius</Text>
        {radiusArray.map((radius) => (
          <TestRoundBoxColumn key={radius} radius={radius} />
        ))}
      </Hstack>
    </Vstack>
  )
}

export default ThePottRoundBoxPage
