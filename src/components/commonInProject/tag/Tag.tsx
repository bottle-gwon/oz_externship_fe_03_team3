import type { Color, DivProps } from '@/types'

const makeBgResult = (color: Color, isVivid: boolean) => {
  switch (color) {
    case 'mono':
      return 'bg-gray-50'
    case 'primary':
      return isVivid ? 'bg-primary-500' : 'bg-primary-50'
    case 'danger':
      return isVivid ? 'bg-danger-500' : 'bg-danger-50'
    case 'success':
      return isVivid ? 'bg-success-500' : 'bg-success-50'
    case 'blue':
      return isVivid ? 'bg-blue-500' : 'bg-blue-50'
  }
}

const makeTextColorResult = (color: Color, isVivid: boolean) => {
  if (isVivid && color !== 'mono') {
    return 'text-white'
  }

  switch (color) {
    case 'mono':
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
interface WithTagProps {
  color?: Color
  isVivid?: boolean
}
const Tag = ({
  color = 'primary',
  isVivid = false,
  ...props
}: DivProps & WithTagProps) => {
  const { className, children, ...rest } = props

  const bgColorResult = makeBgResult(color, isVivid)
  const textColorResult = makeTextColorResult(color, isVivid)
  const result = `${bgColorResult} ${textColorResult}`

  return (
    <div
      {...rest}
      className={`${className} ${result} px-oz-sm py-oz-xs rounded-sm text-xs`}
    >
      {children}
    </div>
  )
}

export default Tag
