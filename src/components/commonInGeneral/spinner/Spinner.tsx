import type { ButtonVariant, Color, SmToLg } from '@/types'
import styles from './Spinner.module.css'

const makeSpinnerColorResult = (color: Color, variant: ButtonVariant) => {
  if (variant === 'contained' && color !== 'mono') {
    return 'text-white'
  }

  switch (color) {
    case 'mono':
      return 'disabled:text-gray-300'
    case 'primary':
      return 'disabled:text-primary-200'
    case 'danger':
      return 'text-danger-600'
    case 'success':
      return 'text-success-600'
    case 'blue':
      return 'text-blue-600'
  }
}

const Spinner = ({
  size,
  color,
  variant,
}: {
  size: SmToLg
  color: Color
  variant: ButtonVariant
}) => {
  const sizeResult = size === 'lg' ? 'w-4 h-4' : 'w-3 h-3'
  const textColorResult = makeSpinnerColorResult(color, variant)
  const result = `${sizeResult} ${textColorResult}`
  return <span className={`${styles.loader} ${result}`} />
}

export default Spinner
