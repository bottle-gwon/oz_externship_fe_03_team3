import { gapMap, paddingMap } from '../../../lib/tailwindClassNameMap'
import type { DivProps, None, XsToXxl } from '../../../types'

interface WithVstackProps {
  gap?: XsToXxl | None
  padding?: XsToXxl | None
}

const Vstack = ({
  gap = 'md',
  padding = 'none',
  ...props
}: DivProps & WithVstackProps) => {
  const { className, children, ...rest } = props

  const gapResult = className?.includes('gap-') ? '' : (gapMap[gap] ?? '')
  const paddingResult = paddingMap[padding] ?? ''
  const result = `${gapResult} ${paddingResult}`

  return (
    <div {...rest} className={`${className} ${result} flex flex-col`}>
      {children}
    </div>
  )
}

export default Vstack
