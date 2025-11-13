import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import Img from '@/components/commonInProject/img/Img'
import type { Lecture, LecturePlatform } from '@/types'
import Tag from '@/components/commonInProject/tag/Tag'
import LectureBookmarkButton from './_LectureBookmarkButton'

const platformToText: Record<LecturePlatform, string> = {
  INFLEARN: 'Inflearn',
  UDEMY: 'Udemy',
}

const LectureThumbnailSection = ({ lecture }: { lecture: Lecture }) => {
  const discountRate =
    (lecture.original_price = lecture.discount_price) / lecture.original_price
  const roundedDiscountRate = Math.round(discountRate)

  return (
    <div className="relative">
      <Img
        src={lecture.thumbnail_img_url}
        isWide
        alt={`${lecture.title}__thumbnail`}
      />

      <Hstack className="absolute top-0 left-0 w-full justify-between p-3">
        <Vstack className="items-start">
          <Tag color="primary" isVivid>
            {platformToText[lecture.platform]}
          </Tag>
          <Tag color="danger" isVivid>
            {roundedDiscountRate}% 할인
          </Tag>
        </Vstack>
        <LectureBookmarkButton lecture={lecture} />
      </Hstack>
    </div>
  )
}

export default LectureThumbnailSection
