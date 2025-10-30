import Button from '@/components/commonInGeneral/button/Button'
import { Vstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import type { RecruitDetailLecture } from '@/types'
import { ChevronRight } from 'lucide-react'
import Text from '@/components/commonInGeneral/text/Text'
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

      <Vstack className="p-5" gap="none">
        <Text className="pb-1 text-lg font-semibold">{lecture.name}</Text>
        <Text className="pb-2 text-sm" color="mono" isMuted>
          강사{lecture.instructor}
        </Text>
        <Text className="text-xl font-bold">
          {lecture.price.toLocaleString()}원
        </Text>

        <Button
          color="primary"
          variant="ghost"
          className="p-0"
          onClick={handleRedirect}
        >
          <ChevronRight />
          강의 보기
        </Button>
      </Vstack>
    </RoundBox>
  )
}

export default RWLectureCard
