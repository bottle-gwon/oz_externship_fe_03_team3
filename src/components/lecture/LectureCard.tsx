import type { ImgProps, Lecture } from '@/types'
import { Hstack, Vstack } from '../commonInGeneral/layout'
import RoundBox from '../commonInGeneral/roundBox/RoundBox'
import Text from '../commonInGeneral/text/Text'
import Button from '../commonInGeneral/button/Button'

const fallbackImageUrl =
  'https://cdn.shortpixel.ai/spai/q_lossy+ret_img+to_auto/linuxiac.com/wp-content/uploads/2020/06/archlinux-1024x768.jpg'

interface WithImgProps {
  fallbackImageUrl?: string
}
const Img = ({ fallbackImageUrl, ...props }: ImgProps & WithImgProps) => {
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
      className="aspect-video w-full object-cover"
    />
  )
}

const LectureCard = ({ lecture }: { lecture: Lecture }) => {
  return (
    <RoundBox padding="none" className="overflow-hidden">
      <Vstack gap="none">
        <Img
          src={lecture.thumbnail_img_url}
          fallbackImageUrl={fallbackImageUrl}
          alt={`${lecture.title}__thumbnail`}
        />
        <Hstack>
          {lecture.categories.map((category) => (
            <Text key={category.id}>{category.name}</Text>
          ))}
        </Hstack>
        <Text>{lecture.instructor}</Text>
        <Text>
          여기에 강의 설명이 있어야 하는데 그게 누락되어서 요청드려야 할
          듯합니다
        </Text>
        <Text>{lecture.average_rating} 별표로 하야 함</Text>
        <Hstack>
          <Text>{lecture.discount_price}</Text>
          <Text>{lecture.original_price}</Text>
        </Hstack>
        <Hstack>
          <Button>리뷰 보기</Button>
          <Button>강의 보러 가기</Button>
        </Hstack>

        <Vstack></Vstack>
      </Vstack>
    </RoundBox>
  )
}

export default LectureCard
