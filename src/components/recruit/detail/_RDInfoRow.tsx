import { CircleDollarSign, Users } from 'lucide-react'
import RDInfoBox from './_RDInfoBox'
import type { RecruitDetail } from '@/types'
import CalendarWithDot from '@/assets/calendar-with-dot.svg'
import UsersThree from '@/assets/users-three.svg'

const RDInfoRow = ({ recruitDetail }: { recruitDetail: RecruitDetail }) => {
  return (
    <div className="gap-oz-lg grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))]">
      <RDInfoBox>
        <img src={UsersThree} />
        <RDInfoBox.Title>모집 인원</RDInfoBox.Title>
        <RDInfoBox.Content>{`${recruitDetail.expected_headcount}명`}</RDInfoBox.Content>
      </RDInfoBox>
      <RDInfoBox>
        <CircleDollarSign size={24} className="text-gray-600" />
        <RDInfoBox.Title>예상 비용</RDInfoBox.Title>
        <RDInfoBox.Content>{`${recruitDetail.estimated_fee.toLocaleString()}원`}</RDInfoBox.Content>
      </RDInfoBox>
      <RDInfoBox>
        <img src={CalendarWithDot} />
        <RDInfoBox.Title>마감일</RDInfoBox.Title>
        <RDInfoBox.Content>{recruitDetail.close_at}</RDInfoBox.Content>
      </RDInfoBox>
      <RDInfoBox>
        <Users size={24} className="text-gray-600" />
        <RDInfoBox.Title>스터디 그룹</RDInfoBox.Title>
        <RDInfoBox.Content>{recruitDetail.study_name}</RDInfoBox.Content>
      </RDInfoBox>
    </div>
  )
}

export default RDInfoRow
