import type { DivProps } from '../../../types'

const FullScreen = ({ ...props }: DivProps) => {
  const { className, children, ...rest } = props

  return (
    <div
      {...rest}
      className={`${className} flex h-screen w-screen flex-col overflow-hidden`}
    >
      {children}
    </div>
  )
}

export default FullScreen
