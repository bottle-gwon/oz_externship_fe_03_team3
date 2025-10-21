import RecruitCard from '@/components/recruit/recruitCard/RecruitCard'
import { mockRecruits } from './_TestMokData'
import RecruitSummaryCard from '../../../components/recruit/manage/_recruitSummaryCard'
import { mockSummaryCard } from './_TestMokSummary'

const NariTastPage = () => {
  return (
    <div>
      <RecruitSummaryCard myRecruitArray={mockSummaryCard} />
      {mockRecruits.map((recruit) => (
        <RecruitCard key={recruit.id} recruit={recruit} />
      ))}
    </div>
  )
}

export default NariTastPage
