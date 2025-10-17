import { convertToTextColor } from '../../../lib/tailwindClassNameMap'
import type { Color, PProps } from '../../../types'

interface TextProps {
  color?: Color // 더 추가될 예정
  isMuted?: boolean
}

const Text = ({
  color = 'mono',
  isMuted = false,
  ...props
}: TextProps & PProps) => {
  const { children, className, ...rest } = props

  const colorResult = convertToTextColor(color, isMuted)

  return (
    <p {...rest} className={`${className} ${colorResult} break-keep`}>
      {children}
    </p>
  )
}

export default Text
