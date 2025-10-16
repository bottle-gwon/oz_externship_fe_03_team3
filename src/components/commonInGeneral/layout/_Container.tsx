import { widthMap } from '../../../lib/tailwindClassNameMap'
import type { DivProps } from '../../../types'

interface WithContainerProps {
  width?: 'sm' | 'md' | 'lg'
  isPadded?: boolean
}

const Container = ({
  width = 'lg',
  ...props
}: DivProps & WithContainerProps) => {
  const { className, children, ...rest } = props

  const widthResult = widthMap[width]

  return (
    <div {...rest} className={`${className} ${widthResult} mx-auto`}>
      {children}
    </div>
  )
}

export default Container
