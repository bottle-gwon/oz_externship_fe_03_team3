import RecruitCard from '@/components/recruit/RecruitCard'
import { mockRecruits } from './_TestMokData'

const NariTastPage = () => {
  return (
    <div>
      {mockRecruits.map((recruit) => (
        <RecruitCard key={recruit.id} recruit={recruit} />
      ))}
    </div>
  )
}

export default NariTastPage
