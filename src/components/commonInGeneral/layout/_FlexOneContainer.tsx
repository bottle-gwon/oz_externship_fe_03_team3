import styles from './_FlexOneContainer.module.css'
import type { DivProps, Style } from '../../../types'

interface WithFlexOneContainer {
  isYScrollable?: boolean
  isXScrollable?: boolean
}

const FlexOneContainer = ({
  isYScrollable,
  isXScrollable,
  ...props
}: DivProps & WithFlexOneContainer) => {
  const { className, style, children, ...rest } = props

  const flexOneStyle: Style = {}
  flexOneStyle['--overflow-x'] = isXScrollable ? 'scroll' : 'hidden'
  flexOneStyle['--overflow-y'] = isYScrollable ? 'scroll' : 'hidden'

  return (
    <div
      {...rest}
      style={{ ...flexOneStyle, ...style }}
      className={`${className} ${styles.flexOne}`}
    >
      {children}
    </div>
  )
}

export default FlexOneContainer
