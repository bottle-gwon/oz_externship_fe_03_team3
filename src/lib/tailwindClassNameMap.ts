import type { ButtonVariant, Color } from '../types'

export const gapMap = {
  none: '',
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-3',
  lg: 'gap-4',
  xl: 'gap-6',
  xxl: 'gap-8',
}

export const paddingMap = {
  none: '',
  xs: 'p-1',
  sm: 'p-2',
  md: 'p-3',
  lg: 'p-4',
  xl: 'p-6',
  xxl: 'p-8',
}
export const paddingTopMap = {
  none: '',
  xs: 'pt-1',
  sm: 'pt-2',
  md: 'pt-3',
  lg: 'pt-4',
  xl: 'pt-6',
  xxl: 'pt-8',
}
export const paddingBottomMap = {
  none: '',
  xs: 'pb-1',
  sm: 'pb-2',
  md: 'pb-3',
  lg: 'pb-4',
  xl: 'pb-6',
  xxl: 'pb-8',
}
export const widthMap = {
  sm: 'w-2xl', // 672px 좁은 모달
  md: 'w-4xl', // 896px 넓은 모달 | 공고 세부 페이지
  lg: 'w-7xl', // 1280px 그 외 넓은 페이지
}

export const convertToBorder = (color: 'mono', isBordered: boolean) => {
  switch (color) {
    case 'mono':
      return isBordered ? 'border-1 border-gray-200' : ''
  }
}
export const radiusMap = {
  sm: 'rounded-sm',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  full: 'rounded-full',
}

export const makeBgResult = (color: string, className?: string) => {
  if (className?.includes('bg-')) {
    return ''
  }

  const colorResult = color === 'mono' ? 'bg-white' : 'bg-red-500'
  return colorResult
}
export const convertToTextColor = (color: Color, isMuted: boolean) => {
  switch (color) {
    case 'mono':
      return isMuted ? 'text-gray-600' : 'text-gray-900'
  }
}

export const makeTextColorResult = (color: Color, variant: ButtonVariant) => {
  if (variant === 'contained' && color !== 'mono') {
    return 'text-white'
  }

  switch (color) {
    case 'mono':
      return 'text-gray-700 hover:text-gray-800 active:text-gray-900 disabled:text-gray-300'
    case 'primary':
      return 'text-primary-600 hover:text-primary-700 active:text-primary-800 disabled:text-primary-200'
    case 'danger':
      return 'text-danger-600'
    case 'success':
      return 'text-success-600'
    case 'blue':
      return 'text-blue-600'
  }
}
