import type { DivProps } from '../../../types'

interface WithFullScreenProps {
  isCentered?: boolean
}

const FullScreen = ({
  isCentered,
  ...props
}: DivProps & WithFullScreenProps) => {
  const { className, children, ...rest } = props

  const centerResult = isCentered ? 'justify-center items-center' : ''

  return (
    <div
      {...rest}
      className={`${className} ${centerResult} flex h-screen w-screen flex-col overflow-hidden`}
    >
      {children}
    </div>
  )
}

export default FullScreen
