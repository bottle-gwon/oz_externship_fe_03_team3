import {
  convertToBorder,
  makeBgResult,
  paddingMap,
  radiusMap,
} from '@/lib/tailwindClassNameMap'
import type { DivProps, None, XsToXxl } from '@/types'

interface WithRoundBoxProps {
  color?: 'mono' // TODO: pull push 이후에 Color로 교체해야
  isShadowed?: boolean
  isBordered?: boolean
  padding?: XsToXxl | None
  radius?: 'sm' | 'md' | 'lg' | 'full'
}

const RoundBox = ({
  color = 'mono',
  isBordered = true,
  isShadowed,
  padding = 'md',
  radius = 'md',
  ...props
}: DivProps & WithRoundBoxProps) => {
  const { className, children, ...rest } = props

  const colorResult = makeBgResult(color, className) // TODO: pull push 이후에는 convertToBgColor 만들어야
  const shadowResult = isShadowed ? 'dropdown-shadow-md' : ''
  const borderResult = convertToBorder(color, isBordered)
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
