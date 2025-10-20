import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import { Clock3, FileText, Megaphone } from 'lucide-react'

const RecruitSummaryCard = () => {
  return (
    <div className="flex flex-wrap items-start justify-start gap-5">
      <RoundBox
        color="mono-bright"
        isBordered
        padding="lg"
        radius="sm"
        className="h-20 w-62"
      >
        <div className="flex-start flex items-center gap-4">
          <RoundBox
            color="mono-dim"
            isBordered={false}
            padding="md"
            radius="md"
            className="h-10 w-10"
          >
            <FileText className="flex size-4" />
            {/* 추후 svg 아이콘으로 추가 */}
          </RoundBox>
          <div className="flex h-11 flex-col justify-center">
            <span className="flex items-center truncate text-xl font-bold text-gray-900">
              4
            </span>
            <span className="text-xs text-gray-600">전체</span>
          </div>
        </div>
      </RoundBox>

      <RoundBox
        color="mono-bright"
        isBordered
        padding="lg"
        radius="sm"
        className="h-20 w-62"
      >
        <div className="flex-start flex items-center gap-4">
          <RoundBox
            color="success"
            isBordered={false}
            padding="md"
            radius="md"
            className="h-10 w-10"
          >
            <Megaphone className="flex size-4" />
            {/* 추후 svg 아이콘으로 추가 */}
          </RoundBox>
          <div className="flex h-11 flex-col justify-center">
            <span className="flex items-center truncate text-xl font-bold text-gray-900">
              3
            </span>
            <span className="text-xs text-gray-600">모집중</span>
          </div>
        </div>
      </RoundBox>

      <RoundBox
        color="mono-bright"
        isBordered
        padding="lg"
        radius="sm"
        className="h-20 w-62"
      >
        <div className="flex-start flex items-center gap-4">
          <RoundBox
            color="danger"
            isBordered={false}
            padding="md"
            radius="md"
            className="h-10 w-10"
          >
            <Clock3 className="flex size-4" />
          </RoundBox>
          <div className="flex h-11 flex-col justify-center">
            <span className="flex items-center truncate text-xl font-bold text-gray-900">
              1
            </span>
            <span className="text-xs text-gray-600">마감됨</span>
          </div>
        </div>
      </RoundBox>
    </div>
  )
}

export default RecruitSummaryCard
