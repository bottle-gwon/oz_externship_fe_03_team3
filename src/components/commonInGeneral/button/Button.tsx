import type { ButtonProps, ButtonVariant, Color, SmToLg } from '@/types'
import { Hstack } from '../layout'
import Spinner from '../spinner/Spinner'
import { makeTextColorResult } from '@/lib/tailwindClassNameMap'

interface WithButtonProps {
  color?: Color
  variant?: ButtonVariant
  status?: 'enabled' | 'pending' | 'disabled'
  size?: SmToLg
}

const makeBgResult = (color: Color, variant: ButtonVariant) => {
  switch (color) {
    case 'mono':
      return variant === 'contained'
        ? 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300 disabled:bg-gray-50'
        : 'hover:bg-gray-50 active:bg-gray-100 disabled:bg-transparent'
    case 'primary':
      return variant === 'contained'
        ? 'bg-primary-500 hover:bg-primary-600 active:bg-primary-800 disabled:bg-primary-100'
        : 'hover:bg-primary-50 active:bg-primary-100 disabled:bg-transparent'
    case 'danger':
      return variant === 'contained'
        ? 'bg-danger-500 hover:bg-danger-600 active:bg-danger-800 disabled:bg-danger-100'
        : ''
    case 'success':
      return variant === 'contained'
        ? 'bg-success-500 hover:bg-success-600 active:bg-success-800 disabled:bg-success-100'
        : ''
    case 'blue':
      return variant === 'contained'
        ? 'bg-blue-500 hover:bg-blue-600 active:bg-blue-800 disabled:bg-blue-100'
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
      return 'outline outline-gray-300 hover:outline-gray-400 active:outline-gray-500 disabled:outline-gray-200'
    case 'primary':
      return 'outline outline-primary-500 hover:outline-primary-600 active:outline-primary-700 disabled:outline-primary-400'
    default:
      // mono, primary 외에는 outlined를 지원하지 않습니다
      return ''
  }
}

const Button = ({
  color = 'mono',
  variant = 'contained',
  status = 'enabled',
  size = 'md',
  ...props
}: ButtonProps & WithButtonProps) => {
  const { className, children, ...rest } = props
  const bgResult = makeBgResult(color, variant)
  const paddingResult = makePaddigResult(size)
  const outlineResult = makeOutlineResult(color, variant)
  const textResult = size === 'lg' ? 'text-base' : 'text-sm'
  const textColorResult = makeTextColorResult(color, variant)
  const result = `${bgResult} ${paddingResult} ${outlineResult} ${textResult} ${textColorResult} transition w-fit h-fit`

  return (
    <button
      {...rest}
      disabled={status !== 'enabled'}
      className={`${className} ${result} rounded-lg`}
    >
      <Hstack gap="none" className="items-center">
        {status === 'pending' && (
          <Spinner variant={variant} size={size} color={color} />
        )}
        {children}
      </Hstack>
    </button>
  )
}

export default Button
