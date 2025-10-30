import type { ButtonProps, ButtonVariant, Color, SmToLg } from '@/types'
import { Hstack } from '../layout'
import Spinner from '../spinner/Spinner'

type ButtonShape = 'rectangle' | 'square' | 'circle'

interface WithButtonProps {
  color?: Color
  variant?: ButtonVariant
  status?: 'enabled' | 'pending' | 'disabled'
  size?: SmToLg
  shape?: ButtonShape
}

const makeBgResult = (color: Color, variant: ButtonVariant) => {
  switch (color) {
    case 'mono':
      return variant === 'contained'
        ? 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300 disabled:bg-gray-100'
        : 'hover:bg-gray-50 active:bg-gray-100 disabled:bg-transparent'
    case 'primary':
      return variant === 'contained'
        ? 'bg-primary-500 hover:bg-primary-600 active:bg-primary-800 disabled:bg-primary-500'
        : 'hover:bg-primary-50 active:bg-primary-100 disabled:bg-transparent'
    case 'danger':
      return variant === 'contained'
        ? 'bg-danger-500 hover:bg-danger-600 active:bg-danger-800 disabled:bg-danger-500'
        : ''
    case 'success':
      return variant === 'contained'
        ? 'bg-success-500 hover:bg-success-600 active:bg-success-800 disabled:bg-success-500'
        : ''
    case 'blue':
      return variant === 'contained'
        ? 'bg-blue-500 hover:bg-blue-600 active:bg-blue-800 disabled:bg-blue-500'
        : ''
  }
}
const makePaddigResult = (size: SmToLg) => {
  switch (size) {
    case 'sm':
      return 'px-3 py-2'
    case 'md':
      return 'px-4 py-2.5'
    case 'lg':
      return 'px-6 py-3'
  }
}
const makeOutlineResult = (color: Color, variant: ButtonVariant) => {
  if (variant !== 'outlined') {
    return
  }

  switch (color) {
    case 'mono':
      return 'outline outline-gray-300 hover:outline-gray-400 active:outline-gray-500 disabled:outline-gray-300'
    case 'primary':
      return 'outline outline-primary-500 hover:outline-primary-600 active:outline-primary-700 disabled:outline-primary-500'
    default:
      // mono, primary 외에는 outlined를 지원하지 않습니다
      return ''
  }
}
const makeTextColorResult = (color: Color, variant: ButtonVariant) => {
  if (variant === 'contained' && color !== 'mono') {
    return 'text-white'
  }

  switch (color) {
    case 'mono':
      return 'text-gray-700 hover:text-gray-800 active:text-gray-900 disabled:text-gray-700'
    case 'primary':
      return 'text-primary-600 hover:text-primary-700 active:text-primary-800 disabled:text-primary-600'
    case 'danger':
      return 'text-danger-600'
    case 'success':
      return 'text-success-600'
    case 'blue':
      return 'text-blue-600'
  }
}

const sizeMap: Record<SmToLg, string> = {
  sm: 'w-[36px] h-[36px]',
  md: 'w-[40px] h-[40px]',
  lg: 'w-[48px] h-[48px]',
}
const makeShapeResult = (shape: ButtonShape, size: SmToLg): string => {
  switch (shape) {
    case 'rectangle':
      return [makePaddigResult(size), 'rounded-lg h-fit w-fit'].join(' ')
    case 'square':
      return [
        sizeMap[size],
        'flex justify-center items-center rounded-lg',
      ].join(' ')
    case 'circle':
      return [
        sizeMap[size],
        'flex justify-center items-center max-w-10 w-full h-[40px] p-auto rounded-full',
      ].join(' ')
  }
}

const Button = ({
  color = 'mono',
  variant = 'contained',
  status = 'enabled',
  size = 'md',
  shape = 'rectangle',
  ...props
}: ButtonProps & WithButtonProps) => {
  const { className, children, ...rest } = props
  const bgResult = makeBgResult(color, variant)
  const paddingResult = className?.includes('p-')
    ? ''
    : shape !== 'rectangle'
      ? ''
      : makePaddigResult(size)
  const outlineResult = makeOutlineResult(color, variant)
  const textResult = size === 'lg' ? 'text-base' : 'text-sm'
  const textColorResult = makeTextColorResult(color, variant)
  const shapeResult = makeShapeResult(shape, size)
  const result = `${bgResult} ${paddingResult} ${outlineResult} ${textResult} ${textColorResult} ${shapeResult}`

  return (
    <button
      {...rest}
      disabled={status !== 'enabled'}
      className={`${className} ${result} cursor-pointer transition disabled:opacity-50`}
    >
      <Hstack gap="xs" className="items-center">
        {status === 'pending' && (
          <Spinner variant={variant} size={size} color={color} />
        )}
        {children}
      </Hstack>
    </button>
  )
}
export default Button
