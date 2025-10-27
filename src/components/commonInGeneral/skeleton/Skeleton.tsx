import type { DivProps, SmToLg, Style } from '@/types'
import styles from './Skeleton.module.css'
import { radiusMap } from '@/lib/tailwindClassNameMap'

interface WithSkeletonProps {
  heightInPixel?: number
  widthInPixel?: number
  radius?: SmToLg | 'full'
}

const Skeleton = ({
  heightInPixel,
  widthInPixel,
  radius = 'md',
  ...props
}: DivProps & WithSkeletonProps) => {
  const { style, className, ...rest } = props
  const styleForVar: Style = {}
  styleForVar['--width'] = widthInPixel ? `${widthInPixel}px` : undefined
  styleForVar['--height'] = heightInPixel ? `${heightInPixel}px` : undefined

  return (
    <div
      {...rest}
      style={{ ...styleForVar, ...style }}
      className={[styles.skeleton, className, radiusMap[radius]].join(' ')}
    />
  )
}

export default Skeleton
