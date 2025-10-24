import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import type { Recruit } from '@/types'

import { Clock3, FileText, Megaphone } from 'lucide-react'

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
      <RoundBox padding="lg" className="h-20 w-62">
        <Hstack gap="sm" padding="xs" className="items-center">
          <RoundBox color="mono-dim" borderStyle="none" className="h-10 w-10">
            <FileText className="size-4" />
            {/* 추후 svg 아이콘으로 추가 */}
          </RoundBox>
          <Vstack gap="xs" padding="xs" className="h-11 justify-center">
            <span className="flex items-center truncate text-xl font-bold text-gray-900">
              {totalCount}
            </span>
            <span className="text-xs text-gray-600">전체</span>
          </Vstack>
        </Hstack>
      </RoundBox>

      <RoundBox padding="lg" className="h-20 w-62">
        <Hstack gap="sm" padding="xs" className="items-center">
          <RoundBox color="success" borderStyle="none" className="h-10 w-10">
            <Megaphone className="size-4" />
            {/* 추후 svg 아이콘으로 추가 */}
          </RoundBox>
          <Vstack gap="xs" padding="xs" className="h-11 justify-center">
            <span className="flex items-center truncate text-xl font-bold text-gray-900">
              {openCount}
            </span>
            <span className="text-xs text-gray-600">모집중</span>
          </Vstack>
        </Hstack>
      </RoundBox>

      <RoundBox padding="lg" className="h-20 w-62">
        <Hstack gap="sm" padding="xs" className="items-center">
          <RoundBox color="danger" borderStyle="none" className="h-10 w-10">
            <Clock3 className="size-4" />
          </RoundBox>
          <Vstack gap="xs" padding="xs" className="h-11 justify-center">
            <span className="flex items-center truncate text-xl font-bold text-gray-900">
              {closedCount}
            </span>
            <span className="text-xs text-gray-600">마감됨</span>
          </Vstack>
        </Hstack>
      </RoundBox>
    </Hstack>
  )
}

export default RecruitSummaryCard
