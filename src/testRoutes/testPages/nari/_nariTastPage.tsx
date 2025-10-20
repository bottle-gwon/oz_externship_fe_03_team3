import RecruitCard from '@/components/recruit/RecruitCard'
import { mockRecruits } from './_TestMokData'
import RecruitSummaryCard from './_recruitSummaryCard'

const NariTastPage = () => {
  return (
    <div>
      <RecruitSummaryCard />
      {mockRecruits.map((recruit) => (
        <RecruitCard key={recruit.id} recruit={recruit} />
      ))}
    </div>
  )
}

export default NariTastPage
