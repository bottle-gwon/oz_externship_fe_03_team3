import Button from '@/components/commonInGeneral/button/Button'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import type { RecruitDetailLecture } from '@/types'
import { ChevronRight } from 'lucide-react'
import Img from '@/components/commonInProject/img/Img'

const RWLectureCard = ({ lecture }: { lecture: RecruitDetailLecture }) => {
  const handleRedirect = () => {
    window.location.href = lecture.link
  }
  return (
    <RoundBox padding="none" className="overflow-hidden">
      <Img
        src={lecture.thumbnail_url}
        isWide
        alt={`${lecture.name}__thumbnail`}
      />

      <Vstack padding="xl" gap="none">
        <p className="pb-2 text-lg font-semibold">{lecture.name}</p>
        <p className="text-color-gray pb-3 text-sm">강사{lecture.instructor}</p>
        <Hstack className="items-center justify-between">
          <p className="text-primary-600 text-xl font-bold">
            {lecture.price.toLocaleString()}원
          </p>

          <Button
            color="primary"
            variant="ghost"
            shape="slim"
            onClick={handleRedirect}
          >
            <ChevronRight />
            강의 보기
          </Button>
        </Hstack>
      </Vstack>
    </RoundBox>
  )
}

export default RWLectureCard
