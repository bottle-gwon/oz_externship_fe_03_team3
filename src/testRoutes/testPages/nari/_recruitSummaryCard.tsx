import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'

const _recruitSummaryCard = () => {
  return (
    <div>
      <RoundBox color="mono" isBordered padding="xl" radius="md" className="">
        <div>
          <RoundBox
            color="mono"
            isBordered
            padding="xl"
            radius="md"
            className=""
          >
            <div className="">
              <span className="">4</span>
              <span>전체</span>
            </div>
          </RoundBox>
        </div>
      </RoundBox>
      <RoundBox color="mono" isBordered padding="xl" radius="md" className="">
        <div>
          <RoundBox
            color="mono"
            isBordered
            padding="xl"
            radius="md"
            className=""
          >
            <div className="">
              <span className="">3</span>
              <span>모집중</span>
            </div>
          </RoundBox>
        </div>
      </RoundBox>
      <RoundBox color="mono" isBordered padding="xl" radius="md" className="">
        <div>
          <RoundBox
            color="mono"
            isBordered
            padding="xl"
            radius="md"
            className=""
          >
            <div className="">
              <span className="">1</span>
              <span>마감됨</span>
            </div>
          </RoundBox>
        </div>
      </RoundBox>
    </div>
  )
}

export default _recruitSummaryCard
