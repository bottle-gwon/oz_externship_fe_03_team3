import RDInfoBox from './_RDInfoBox'
import type { RecruitDetail } from '@/types'

const RDInfoRow = ({ recruitDetail }: { recruitDetail: RecruitDetail }) => {
  return (
    <div className="gap-oz-lg grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))]">
      <RDInfoBox>
        <RDInfoBox.Title>모집 인원</RDInfoBox.Title>
        <RDInfoBox.Content>{`${recruitDetail.expected_personnel}명`}</RDInfoBox.Content>
      </RDInfoBox>
      <RDInfoBox>
        <RDInfoBox.Title>예상 비용</RDInfoBox.Title>
        <RDInfoBox.Content>{`${recruitDetail.expected_fee.toLocaleString()}원`}</RDInfoBox.Content>
      </RDInfoBox>
      <RDInfoBox>
        <RDInfoBox.Title>마감일</RDInfoBox.Title>
        <RDInfoBox.Content>{recruitDetail.due_date}</RDInfoBox.Content>
      </RDInfoBox>
      <RDInfoBox>
        <RDInfoBox.Title>스터디 그룹</RDInfoBox.Title>
        <RDInfoBox.Content>{recruitDetail.study_group_name}</RDInfoBox.Content>
      </RDInfoBox>
    </div>
  )
}

export default RDInfoRow
