import RecruitCard from '@/components/recruit/recruitCard/RecruitCard'
import { dummyRecruitArray } from '../hyejeong/dummy/dummyRecruitList'
// import RecruitSummaryCard from '../../../components/recruit/manage/RecruitSummaryCard'

const NariTastPage = () => {
  return (
    <div>
      {/* <RecruitSummaryCard myRecruitArray={mockRecruits} /> */}
      {dummyRecruitArray.map((recruit) => (
        <RecruitCard key={recruit.uuid} recruit={recruit} />
      ))}
    </div>
  )
}

export default NariTastPage
