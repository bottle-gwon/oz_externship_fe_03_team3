import type { ButtonProps, Color } from '@/types'

type ButtonVariant = 'outlined' | 'contained' | 'ghost'

type ButtonSize = 'sm' | 'md' | 'lg'

interface WithButtonProps {
  color?: Color
  variant?: ButtonVariant
  status?: 'enabled' | 'pending' | 'disabled'
  size?: ButtonSize
}

const makeBgResult = (color: Color, variant: ButtonVariant) => {
  if (variant !== 'contained') {
    return ''
  }

  switch (color) {
    case 'mono':
      return 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300 disabled:bg-gray-100'
    case 'danger':
      return 'bg-danger-500 hover:bg-danger-600 active:bg-danger-800 disabled:bg-danger-100'
    case 'primary':
      return 'bg-primary-500 hover:bg-primary-600 active:bg-primary-800 disabled:bg-primary-100'
    case 'success':
      return 'bg-success-500 hover:bg-success-600 active:bg-success-800 disabled:bg-success-100'
    case 'blue':
      return 'bg-blue-500 hover:bg-blue-600 active:bg-blue-800 disabled:bg-blue-100'
  }
}

const makePaddigResult = (size: ButtonSize) => {
  switch (size) {
    case 'sm':
      return 'px-3 py-2'
    case 'md':
      return 'px-4 py-2.5'
    case 'lg':
      return 'px-6 py-3'
  }
}

const makeTextColorResult = (color: Color, variant: ButtonVariant) => {
  if (variant === 'contained' && color !== 'mono') {
    return 'text-white'
  }

  switch (color) {
    case 'mono':
      return 'text-gray-700'
    case 'primary':
      return 'text-primary-600'
    case 'danger':
      return 'text-danger-600'
    case 'success':
      return 'text-success-600'
    case 'blue':
      return 'text-blue-600'
  }
}

const makeOutlineResult = (color: Color, variant: ButtonVariant) => {
  if (variant !== 'outlined') {
    return
  }

  switch (color) {
    case 'mono':
      return 'outline outline-gray-300 hover:outline-gray-400 active:outline-gray-500'
    case 'primary':
      return 'outline outline-primary-500 hover:outline-primary-600 active:outline-primary-700'
    default:
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
  const result = `${bgResult} ${paddingResult} ${outlineResult} ${textResult} ${textColorResult}`

  return (
    <button
      {...rest}
      disabled={status !== 'enabled'}
      className={`${className} ${result} rounded-lg`}
    >
      {children}
    </button>
  )
}

export default Button
