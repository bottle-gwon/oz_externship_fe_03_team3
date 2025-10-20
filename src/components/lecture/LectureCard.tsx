import type { DivProps, ImgProps, Lecture } from '@/types'
import { Hstack, Vstack } from '../commonInGeneral/layout'
import RoundBox, {
  type WithRoundBoxProps,
} from '../commonInGeneral/roundBox/RoundBox'
import Text from '../commonInGeneral/text/Text'
import Button from '../commonInGeneral/button/Button'
import { ChevronDown } from 'lucide-react'

const fallbackImageUrl =
  'https://cdn.shortpixel.ai/spai/q_lossy+ret_img+to_auto/linuxiac.com/wp-content/uploads/2020/06/archlinux-1024x768.jpg'

interface WithImgProps {
  isWide?: boolean
  fallbackImageUrl?: string
}

const Img = ({
  isWide,
  fallbackImageUrl,
  ...props
}: ImgProps & WithImgProps) => {
  const wideResult = isWide ? 'aspect-video' : 'aspect-[4/3]'
  const handleLoad: React.ReactEventHandler<HTMLImageElement> = (event) => {
    if (!fallbackImageUrl) {
      return
    }

    const img = event.currentTarget
    if (img.naturalWidth === 0 || img.naturalHeight === 0) {
      img.src = fallbackImageUrl
    }
  }

  const handleError: React.ReactEventHandler<HTMLImageElement> = (event) => {
    if (!fallbackImageUrl) {
      return
    }

    event.currentTarget.src = fallbackImageUrl
  }
  return (
    <img
      {...props}
      onLoad={handleLoad}
      onError={handleError}
      className={`${wideResult} w-full object-cover`}
    />
  )
}

const Chip = ({
  color = 'primary',
  children,
  ...rest
}: DivProps & WithRoundBoxProps) => {
  return (
    <RoundBox
      {...rest}
      color={color}
      radius="sm"
      className="px-oz-sm py-oz-xs text-xs"
      isBordered={false}
    >
      {children}
    </RoundBox>
  )
}

const LectureCard = ({ lecture }: { lecture: Lecture }) => {
  return (
    <RoundBox padding="none" className="overflow-hidden">
      <Img
        src={lecture.thumbnail_img_url}
        // src={fallbackImageUrl}
        fallbackImageUrl={fallbackImageUrl}
        isWide
        alt={`${lecture.title}__thumbnail`}
      />
      <Vstack className="p-5" gap="none">
        <Hstack className="pb-2">
          {lecture.categories.map((category) => (
            <Chip key={category.id}>{category.name}</Chip>
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
        <Text className="pb-3">{lecture.average_rating} 별표로 하야 함</Text>

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
          <Button color="primary">강의 보러 가기</Button>
        </Hstack>
      </Vstack>
    </RoundBox>
  )
}

export default LectureCard
