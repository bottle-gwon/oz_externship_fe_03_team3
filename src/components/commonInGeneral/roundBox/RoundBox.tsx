import { paddingMap, radiusMap } from '@/lib/tailwindClassNameMap'
import type { Color, DivProps, None, XsToXxl } from '@/types'

type RoundBoxColor = Omit<Color, 'mono'> | 'mono-bright' | 'mono-dim'
interface WithRoundBoxProps {
  color?: RoundBoxColor
  isShadowed?: boolean
  isBordered?: boolean
  padding?: XsToXxl | None
  radius?: 'sm' | 'md' | 'lg' | 'full'
}

const makeBorderResult = (color: RoundBoxColor, isBordered: boolean) => {
  if (!isBordered) {
    return ''
  }

  switch (color) {
    case 'mono-bright':
    case 'mono-dim':
      return 'border border-gray-200'
    case 'primary':
      return 'border border-primary-200'
    case 'danger':
      return 'border border-danger-400'
    case 'success':
      return 'border border-success-400'
    case 'blue':
      return 'border border-blue-400'
  }
}

const makeBgResult = (color: RoundBoxColor, className?: string) => {
  if (className?.includes('bg-')) {
    return ''
  }

  switch (color) {
    case 'mono-bright':
      return 'bg-white'
    case 'mono-dim':
      return 'bg-gray-50'
    case 'primary':
      return 'bg-primary-50'
    case 'danger':
      return 'bg-danger-100'
    case 'success':
      return 'bg-success-100'
    case 'blue':
      return 'bg-blue-100'
  }
}

const RoundBox = ({
  color = 'mono-bright',
  isBordered = true,
  isShadowed,
  padding = 'md',
  radius = 'md',
  ...props
}: DivProps & WithRoundBoxProps) => {
  const { className, children, ...rest } = props

  const colorResult = makeBgResult(color, className)
  const shadowResult = isShadowed ? 'dropdown-shadow-md' : ''

  const borderResult = makeBorderResult(color, isBordered)
  const paddingResult = paddingMap[padding] ?? ''
  const radiusResult = radiusMap[radius]
  const result = `${colorResult} ${borderResult} ${shadowResult} ${paddingResult} ${radiusResult}`

  return (
    <div {...rest} className={`${className} ${result}`}>
      {children}
    </div>
  )
}

export default RoundBox
