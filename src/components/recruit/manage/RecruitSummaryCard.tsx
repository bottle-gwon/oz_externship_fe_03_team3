import { Hstack } from '@/components/commonInGeneral/layout'
import type { RecruitsManageResponse } from '@/types'

import { Clock3, FileText, Megaphone } from 'lucide-react'
import SummaryCard from './SummaryCard'

type CountSummary = RecruitsManageResponse['count']
export type SummaryProps = { count: CountSummary }

const RecruitSummaryCard = ({ count }: SummaryProps) => {
  const { total: totalCount, open: openCount, closed: closedCount } = count
  return (
    <Hstack gap="lg" className="items-start">
      <SummaryCard
        value={totalCount}
        label="전체"
        Icon={FileText}
        color="mono-dim"
      ></SummaryCard>
      <SummaryCard
        value={openCount}
        label="모집중"
        Icon={Megaphone}
        color="success"
      ></SummaryCard>
      <SummaryCard
        value={closedCount}
        label="마감됨"
        Icon={Clock3}
        color="danger"
      ></SummaryCard>
    </Hstack>
  )
}

export default RecruitSummaryCard
