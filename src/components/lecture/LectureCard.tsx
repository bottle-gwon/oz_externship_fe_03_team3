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
import LectureBookmarkButton from './LectureBookmarkButton'

const LectureCard = ({ lecture }: { lecture: Lecture }) => {
  const handleRedirect = () => {
    window.location.href = lecture.url_link
  }

  return (
    <RoundBox padding="none" className="overflow-hidden">
      <div className="relative">
        <Img
          src={lecture.thumbnail_img_url}
          isWide
          alt={`${lecture.title}__thumbnail`}
        />
        <Hstack className="absolute top-0 left-0 w-full justify-between p-3">
          <Vstack>
            <Tag color="primary" isVivid>
              {lecture.platform}
            </Tag>
            <Tag color="danger" isVivid>
              할인율
            </Tag>
          </Vstack>
          <LectureBookmarkButton lecture={lecture} />
        </Hstack>
      </div>

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
