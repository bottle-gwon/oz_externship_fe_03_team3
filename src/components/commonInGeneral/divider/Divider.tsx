import type { Color } from '@/types'

const bgMap = {
  mono: 'bg-gray-200',
  primary: 'bg-primary-200',
  danger: 'bg-danger-border',
  success: 'bg-success-border',
  blue: 'bg-blue-100',
}

const Divider = ({
  color = 'mono',
  className,
}: {
  color?: Color
  className?: string
}) => {
  return (
    <div
      className={`${className ? className : ''} ${bgMap[color]} h-[1px] w-full`}
    />
  )
}

export default Divider
