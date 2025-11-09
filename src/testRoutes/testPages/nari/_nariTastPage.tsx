import RecruitCard from '@/components/recruit/recruitCard/RecruitCard'
import { mockRecruits } from './_TestMokData'
import RecruitSummaryCard from '../../../components/recruit/manage/RecruitSummaryCard'

const NariTastPage = () => {
  return (
    <div>
      <RecruitSummaryCard myRecruitArray={mockRecruits} />
      {mockRecruits.map((recruit) => (
        <RecruitCard key={recruit.id} recruit={recruit} />
      ))}
    </div>
  )
}

export default NariTastPage
