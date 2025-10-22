import Button from '@/components/commonInGeneral/button/Button'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import type { Lecture } from '@/types'
import { ChevronDown } from 'lucide-react'
import Tag from '@/components/commonInProject/tag/Tag'
import Text from '@/components/commonInGeneral/text/Text'
import DifficultyTag from './_DifficultyTag'
import ReviewSummary from './_ReviewSummary'
import LectureThumbnailSection from './thumbnailSection/LectureThumnailSection'
import ExpandedReviewSection from './expandedReviewSection/ExpandedReviewSection'
import { useState } from 'react'

const LectureCard = ({ lecture }: { lecture: Lecture }) => {
  const [isReviewExpanded, setIsReviewExpanded] = useState(false)
  const handleRedirect = () => {
    window.location.href = lecture.url_link
  }

  const handleClick = () => {
    setIsReviewExpanded(!isReviewExpanded)
  }

  return (
    <RoundBox padding="none" className="overflow-hidden">
      <LectureThumbnailSection lecture={lecture} />

      <Vstack className="p-5" gap="none">
        <Hstack className="gap-2 pb-2">
          <DifficultyTag difficulty={lecture.difficulty} />
          {lecture.categories.map((category) => (
            <Tag key={category.id} color="mono">
              {category.name}
            </Tag>
          ))}
        </Hstack>
        <Text className="pb-1 text-lg font-semibold">{lecture.title}</Text>
        <Text className="pb-2 text-sm" color="mono" isMuted>
          {lecture.instructor}
        </Text>
        <Text className="pb-3" color="mono" isMuted>
          누락된 것: 1. 강의 설명 2. 리뷰 개수 3. 북마크 여부
        </Text>
        <ReviewSummary
          average_rating={lecture.average_rating}
          className="pb-3"
        />

        <Hstack className="items-center pb-4" gap="sm">
          <Text className="text-xl font-bold">
            ₩{lecture.discount_price.toLocaleString()}
          </Text>
          <Text isMuted className="text-sm line-through">
            ₩{lecture.original_price.toLocaleString()}
          </Text>
        </Hstack>

        <Hstack className="items-center justify-between">
          <Button
            color="primary"
            variant="ghost"
            className="p-0"
            onClick={handleClick}
          >
            <ChevronDown />
            리뷰 보기
          </Button>
          <Button color="primary" onClick={handleRedirect}>
            강의 보러 가기
          </Button>
        </Hstack>

        {isReviewExpanded && <ExpandedReviewSection lecture={lecture} />}
      </Vstack>
    </RoundBox>
  )
}

export default LectureCard
