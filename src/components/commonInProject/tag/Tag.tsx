import RoundBox, {
  type WithRoundBoxProps,
} from '@/components/commonInGeneral/roundBox/RoundBox'
import type { DivProps } from '@/types'

const Tag = ({
  color = 'primary',
  children,
  ...rest
}: DivProps & WithRoundBoxProps) => {
  return (
    <RoundBox
      {...rest}
      color={color}
      radius="sm"
      className="px-oz-sm py-oz-xs text-xs"
      isBordered={false}
    >
      {children}
    </RoundBox>
  )
}

export default Tag
