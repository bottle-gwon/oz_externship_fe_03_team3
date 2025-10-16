import { gapMap } from '../../../lib/tailwindClassNameMap'
import type { DivProps, None, XsToXxl } from '../../../types'

interface WithVstackProps {
  gap?: XsToXxl | None
}

const Vstack = ({ gap = 'md', ...props }: DivProps & WithVstackProps) => {
  const { className, children, ...rest } = props

  const gapResult = gapMap[gap] ?? ''

  return (
    <div {...rest} className={`${className} ${gapResult} flex flex-col gap-3`}>
      {children}
    </div>
  )
}

export default Vstack
