import { gapMap } from '../../../lib/tailwindClassNameMap'
import type { DivProps, None, XsToXxl } from '../../../types'

interface WithHstackProps {
  gap?: XsToXxl | None
}

const Hstack = ({ gap = 'md', ...props }: DivProps & WithHstackProps) => {
  const { className, children, ...rest } = props

  const gapResult = gapMap[gap] ?? ''

  return (
    <div {...rest} className={`${className} ${gapResult} flex gap-3`}>
      {children}
    </div>
  )
}

export default Hstack
