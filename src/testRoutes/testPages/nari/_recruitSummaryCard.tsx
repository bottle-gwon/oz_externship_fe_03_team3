import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'

const RecruitSummaryCard = () => {
  return (
    <div className="flex flex-wrap items-start justify-start gap-5">
      <RoundBox
        color="mono-bright"
        isBordered
        padding="lg"
        radius="sm"
        className="h-20 w-60"
      >
        <div className="flex-start flex items-center gap-4">
          <RoundBox
            color="mono-dim"
            isBordered={false}
            padding="xl"
            radius="md"
            className="h-11 w-11"
          ></RoundBox>
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
        className="h-20 w-60"
      >
        <div className="flex-start flex items-center gap-4">
          <RoundBox
            color="success"
            isBordered={false}
            padding="xl"
            radius="md"
            className="h-12 w-12"
          ></RoundBox>
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
        className="h-20 w-60"
      >
        <div className="flex-start flex items-center gap-4">
          <RoundBox
            color="danger"
            isBordered={false}
            padding="xl"
            radius="md"
            className="h-12 w-12"
          ></RoundBox>
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
