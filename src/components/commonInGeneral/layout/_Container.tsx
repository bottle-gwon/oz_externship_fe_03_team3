import { widthMap } from '../../../lib/tailwindClassNameMap'
import type { DivProps } from '../../../types'

interface WithContainerProps {
  width?: 'sm' | 'md' | 'lg'
  isPadded?: boolean
}

const Container = ({
  width = 'lg',
  isPadded,
  ...props
}: DivProps & WithContainerProps) => {
  const { className, children, ...rest } = props

  const widthResult = widthMap[width]
  const paddingResult = isPadded ? 'p-8' : ''

  return (
    <div
      {...rest}
      className={`${className} ${widthResult} ${paddingResult} mx-auto`}
    >
      {children}
    </div>
  )
}

export default Container
