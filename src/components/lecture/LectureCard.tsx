import type { Lecture } from '@/types'
import { Hstack, Vstack } from '../commonInGeneral/layout'
import RoundBox from '../commonInGeneral/roundBox/RoundBox'
import Text from '../commonInGeneral/text/Text'
import Button from '../commonInGeneral/button/Button'
import { ChevronDown } from 'lucide-react'
import ReviewSummary from './ReviewSummary'
import Img from '../commonInProject/img/Img'
import DifficultyTag from './DifficultyTag'
import Tag from '../commonInProject/tag/Tag'

const LectureCard = ({ lecture }: { lecture: Lecture }) => {
  const handleRedirect = () => {
    window.location.href = lecture.url_link
  }

  return (
    <RoundBox padding="none" className="overflow-hidden">
      <Img
        src={lecture.thumbnail_img_url}
        isWide
        alt={`${lecture.title}__thumbnail`}
      />

      <Vstack className="p-5" gap="none">
        <Hstack className="gap-2 pb-2">
          <DifficultyTag difficulty={lecture.difficulty} />
          {lecture.categories.map((category) => (
            <Tag key={category.id} color="mono-dim">
              {category.name}
            </Tag>
          ))}
        </Hstack>
        <Text className="pb-1 text-lg font-semibold">{lecture.title}</Text>
        <Text className="pb-2 text-sm" color="mono" isMuted>
          {lecture.instructor}
        </Text>
        <Text className="pb-3" color="mono" isMuted>
          여기에 강의 설명이 있어야 하는데 그게 누락되어서 요청드려야 할
          듯합니다
        </Text>
        <ReviewSummary
          average_rating={lecture.average_rating}
          className="pb-3"
        />

        <Hstack className="items-center pb-4" gap="none">
          <Text className="text-xl font-bold">
            ₩{lecture.discount_price.toLocaleString()}
          </Text>
          <Text isMuted className="text-sm line-through">
            ₩{lecture.original_price.toLocaleString()}
          </Text>
        </Hstack>

        <Hstack className="items-center justify-between">
          <Button color="primary" variant="ghost" className="p-0">
            <ChevronDown />
            리뷰 보기
          </Button>
          <Button color="primary" onClick={handleRedirect}>
            강의 보러 가기
          </Button>
        </Hstack>
      </Vstack>
    </RoundBox>
  )
}

export default LectureCard
