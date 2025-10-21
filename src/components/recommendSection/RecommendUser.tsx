import {
  GridContainer,
  Hstack,
  Vstack,
} from '@/components/commonInGeneral/layout'
import type { Lecture, RecommendPageProps, RecommendPageType } from '@/types'
import RecruitCard from '../recruit/RecruitCard'
import LectureCard from '../lecture/lectureCard/LectureCard'
import type { recruit } from '@/types/interfaceRecruit'

const RecommendUser = <T extends RecommendPageType>({
  type,
  recommendedArray,
}: RecommendPageProps<T>) => {
  const userName = '김스터디' // 로그인 된 사용자, 추후에 수정
  const title =
    type === 'recruit' ? ` 님을 위한 맟춤 스터디 공고` : ` 님을 위한 추천 강의`

  if (type === 'recruit') {
    return
  }
  return (
    <Vstack
      gap="none"
      className="h-[492px] w-[1306px] items-center justify-center rounded-xl border border-[#FEF08A] bg-[linear-gradient(to_right,#FEFCE8,#FFF7ED)]"
    >
      <Vstack gap="none">
        <Hstack gap="none" className="mb-6 items-center">
          <h3 className="w-[379px] text-2xl leading-8 font-semibold text-[#3E454C]">
            <span className="text-[#CA8A04]">{userName}</span>
            {title}
          </h3>
          <span className="h-6 w-[74px] rounded-sm bg-[#EA580C] px-2 py-1 text-center text-xs text-white">
            개인화 추천
          </span>
        </Hstack>
        <GridContainer>
          {type === 'recruit' &&
            recommendedArray.map((recommend) => (
              <RecruitCard
                key={recommend.uuid}
                recruit={recommend as recruit}
              />
            ))}
          {type === 'lecture' &&
            recommendedArray.map((recommend) => (
              <LectureCard
                key={recommend.uuid}
                lecture={recommend as Lecture}
              />
            ))}
        </GridContainer>
      </Vstack>
    </Vstack>
  )
}

export default RecommendUser
