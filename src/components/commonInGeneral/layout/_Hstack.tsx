import { gapMap, paddingMap } from '../../../lib/tailwindClassNameMap'
import type { DivProps, None, XsToXxl } from '../../../types'

interface WithHstackProps {
  gap?: XsToXxl | None
  padding?: XsToXxl | None
}

const Hstack = ({
  gap = 'md',
  padding = 'none',
  ...props
}: DivProps & WithHstackProps) => {
  const { className, children, ...rest } = props

  const gapResult = className?.includes('gap-') ? '' : (gapMap[gap] ?? '')
  const paddingResult = paddingMap[padding] ?? ''
  const result = `${gapResult} ${paddingResult}`

  return (
    <div {...rest} className={`${className} ${result} flex`}>
      {children}
    </div>
  )
}

export default Hstack
