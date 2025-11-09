import { Hstack } from '@/components/commonInGeneral/layout'
import type { Recruit } from '@/types'

import { Clock3, FileText, Megaphone } from 'lucide-react'
import SummaryCard from './SummaryCard'

export type SummaryProps = { myRecruitArray: Recruit[] }

const RecruitSummaryCard = ({ myRecruitArray }: SummaryProps) => {
  const totalCount = myRecruitArray.length
  const openCount = myRecruitArray.filter(
    (item) => item.is_closed === false
  ).length
  const closedCount = myRecruitArray.filter(
    (item) => item.is_closed === true
  ).length
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
