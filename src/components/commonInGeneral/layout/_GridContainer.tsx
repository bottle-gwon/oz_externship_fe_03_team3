import { gapMap } from '../../../lib/tailwindClassNameMap'
import type { DivProps, None, XsToXxl } from '../../../types'

interface WithGridContainerProps {
  gap?: XsToXxl | None
}

const GridContainer = ({
  gap = 'md',
  ...props
}: DivProps & WithGridContainerProps) => {
  const { className, children, ...rest } = props

  const gapResult = gapMap[gap] ?? ''

  return (
    <div
      {...rest}
      className={`${className} ${gapResult} grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]`}
    >
      {children}
    </div>
  )
}

export default GridContainer
