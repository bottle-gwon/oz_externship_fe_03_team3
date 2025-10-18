import Button from '@/components/commonInGeneral/button/Button'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import FullScreen from '@/components/commonInGeneral/layout/_FullScreen'
import Text from '@/components/commonInGeneral/text/Text'
import { ArrowBigDown } from 'lucide-react'

const colorArray = ['mono', 'primary', 'danger', 'success', 'blue'] as const
type Color = (typeof colorArray)[number]
const variantArray = ['contained', 'outlined', 'ghost'] as const
type ButtonVariant = (typeof variantArray)[number]
const statusArray = ['enabled', 'disabled', 'pending'] as const

const sizeArray = ['sm', 'md', 'lg'] as const

const ButtonInStatusGroup = ({
  color,
  variant,
}: {
  color: Color
  variant: ButtonVariant
}) => {
  return (
    <Vstack>
      {statusArray.map((status) => (
        <Button key={status} color={color} variant={variant} status={status}>
          {variant}__{status}
        </Button>
      ))}
    </Vstack>
  )
}
const ButtonInColorArray = ({ variant }: { variant: ButtonVariant }) => {
  return (
    <Hstack gap="xxl">
      {colorArray.map((color) => (
        <ButtonInStatusGroup key={color} color={color} variant={variant} />
      ))}
      <Text>{variant}</Text>
    </Hstack>
  )
}
const ThePottButtonPage = () => {
  return (
    <FullScreen>
      <Container isPadded>
        <Vstack>
          {variantArray.map((variant) => (
            <ButtonInColorArray key={variant} variant={variant} />
          ))}
        </Vstack>
        <Hstack className="h-[50px]">
          {sizeArray.map((size) => (
            <Button key={size} size={size}>
              {size}
            </Button>
          ))}
        </Hstack>
        <Hstack>
          <Button size="sm">
            <ArrowBigDown />
            아이콘도 넣을 수 있습니다
          </Button>
          <Button size="lg">
            <ArrowBigDown />
            아이콘도 넣을 수 있습니다
          </Button>
        </Hstack>
        <Hstack>
          <Button size="sm" status="pending">
            스피너 크기 비교
          </Button>
          <Button size="lg" status="pending">
            스피너 크기 비교
          </Button>
        </Hstack>
      </Container>
    </FullScreen>
  )
}

export default ThePottButtonPage
