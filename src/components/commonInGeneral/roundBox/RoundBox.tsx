import { paddingMap, radiusMap } from '@/lib/tailwindClassNameMap'
import type { Color, DivProps, None, XsToXxl } from '@/types'

export type RoundBoxColor = Exclude<Color, 'mono'> | 'mono-bright' | 'mono-dim'
export type BorderStyle = 'none' | 'solid' | 'dashed'
export interface WithRoundBoxProps {
  color?: RoundBoxColor
  isShadowed?: boolean
  isBordered?: boolean // DEPRECATED 이거 말고 borderStyle을 사용해주세요
  borderStyle?: BorderStyle
  padding?: XsToXxl | None
  radius?: 'sm' | 'md' | 'lg' | 'full'
}

const makeBorderResult = (
  color: RoundBoxColor,
  isBordered: boolean,
  borderStyle: BorderStyle
) => {
  if (!isBordered && borderStyle === 'none') {
    return ''
  }

  const borderColorResult = (() => {
    switch (color) {
      case 'mono-bright':
      case 'mono-dim':
        return 'border-gray-200'
      case 'primary':
        return 'border-primary-200'
      case 'danger':
        return 'border-danger-border'
      case 'success':
        return 'border-success-border'
      case 'blue':
        return 'border-blue-100'
    }
  })()

  const borderStyleResult =
    isBordered && borderStyle !== 'dashed' ? 'border' : 'border-2 border-dashed'

  return `${borderColorResult} ${borderStyleResult}`
}
const makeBgResult = (color: RoundBoxColor) => {
  switch (color) {
    case 'mono-bright':
      return 'bg-white'
    case 'mono-dim':
      return 'bg-gray-50'
    case 'primary':
      return 'bg-primary-50'
    case 'danger':
      return 'bg-danger-50'
    case 'success':
      return 'bg-success-50'
    case 'blue':
      return 'bg-blue-50'
  }
}
const makeTextColorResult = (color: RoundBoxColor) => {
  switch (color) {
    case 'mono-bright':
    case 'mono-dim':
      return 'text-gray-900'
    case 'primary':
      return 'text-primary-800'
    case 'danger':
      return 'text-danger-800'
    case 'success':
      return 'text-success-800'
    case 'blue':
      return 'text-blue-800'
  }
}

const RoundBox = ({
  color = 'mono-bright',
  isBordered = true,
  borderStyle = 'solid',
  isShadowed,
  padding = 'md',
  radius = 'md',
  ...props
}: DivProps & WithRoundBoxProps) => {
  const { className, children, ...rest } = props

  const colorResult = makeBgResult(color)
  const textColorResult = makeTextColorResult(color)
  const shadowResult = isShadowed ? 'shadow-md' : ''
  const borderResult = makeBorderResult(color, isBordered, borderStyle)
  const paddingResult = paddingMap[padding] ?? ''
  const radiusResult = radiusMap[radius]
  const result = `${colorResult} ${textColorResult} ${borderResult} ${shadowResult} ${paddingResult} ${radiusResult}`

  return (
    <div {...rest} className={`${className} ${result}`}>
      {children}
    </div>
  )
}

export default RoundBox
