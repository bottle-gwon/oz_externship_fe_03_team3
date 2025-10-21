import RecruitCard from '@/components/recruit/RecruitCard'
import { mockRecruits } from './_TestMokData'
import RecruitSummaryCard from './_recruitSummaryCard'
import { mockSummaryCard } from './_TestMokSummary'

const NariTastPage = () => {
  return (
    <div>
      <RecruitSummaryCard recruits={mockSummaryCard} />
      {mockRecruits.map((recruit) => (
        <RecruitCard key={recruit.id} recruit={recruit} />
      ))}
    </div>
  )
}

export default NariTastPage
