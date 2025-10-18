export type XsToXxl = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
export type SmToLg = Omit<XsToXxl, 'xs' | 'xl' | 'xxl'>

export type None = 'none'

export type Auto = 'auto'

export type Color = 'mono' | 'danger' | 'primary' | 'success' | 'blue' // 더 추가할 예정

export type ButtonVariant = 'outlined' | 'contained' | 'ghost'
