import { convertToBorder, paddingMap } from '@/lib/tailwindClassNameMap'
import type { DivProps, None, XsToXxl } from '@/types'

interface WithRoundBoxProps {
  color?: 'mono' // TODO: pull push 이후에 Color로 교체해야
  isShadowed?: boolean
  isBordered?: boolean
  padding?: XsToXxl | None
}

const RoundBox = ({
  color = 'mono',
  isBordered = true,
  isShadowed,
  padding = 'md',
  ...props
}: DivProps & WithRoundBoxProps) => {
  const { className, children, ...rest } = props

  const colorResult = color === 'mono' ? 'bg-white' : 'bg-red-500' // TODO: pull push 이후에는 convertToBgColor 만들어야
  const shadowResult = isShadowed ? 'dropdown-shadow-md' : ''
  const borderResult = convertToBorder(color, isBordered)
  const paddingResult = paddingMap[padding] ?? ''
  const result = `${colorResult} ${borderResult} ${shadowResult} ${paddingResult}`

  return (
    <div {...rest} className={`${className} ${result}`}>
      {children}
    </div>
  )
}

export default RoundBox
