import type { Color, PProps } from '../../../types'

const convertToTextColor = (color?: Color, isMuted?: boolean) => {
  if (!color) {
    return 'text-inherit'
  }
  switch (color) {
    case 'mono':
      return isMuted ? 'text-gray-600' : 'text-gray-900'
  }
}

interface WithTextProps {
  color?: Color // 더 추가될 예정
  isMuted?: boolean
}

const Text = ({ color, isMuted = false, ...props }: PProps & WithTextProps) => {
  const { children, className, ...rest } = props

  const colorResult = convertToTextColor(color, isMuted)

  return (
    <p {...rest} className={`${className} ${colorResult} break-keep`}>
      {children}
    </p>
  )
}

export default Text
