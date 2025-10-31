import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import type { LucideIcon } from 'lucide-react'

export type SummaryCardProps = {
  value: number
  label: string
  Icon: LucideIcon
  color?: 'mono-dim' | 'success' | 'danger'
}

const SummaryCard = ({ value, label, Icon, color }: SummaryCardProps) => {
  return (
    <RoundBox padding="lg" className="h-20 w-62">
      <Hstack gap="sm" padding="xs" className="items-center">
        <RoundBox color={color} borderStyle="none" className="h-10 w-10">
          <Icon className="size-4" />
        </RoundBox>
        <Vstack gap="xs" padding="xs" className="h-11 justify-center">
          <span className="flex items-center truncate text-xl font-bold text-gray-900">
            {value}
          </span>
          <span className="text-xs text-gray-600">{label}</span>
        </Vstack>
      </Hstack>
    </RoundBox>
  )
}

export default SummaryCard
