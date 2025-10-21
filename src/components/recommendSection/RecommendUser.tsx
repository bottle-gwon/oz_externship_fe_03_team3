import {
  GridContainer,
  Hstack,
  Vstack,
} from '@/components/commonInGeneral/layout'
import type {
  Lecture,
  RecommendPageProps,
  RecommendPageType,
  Recruit,
} from '@/types'
import RecruitCard from '../recruit/RecruitCard'
import LectureCard from '../lecture/lectureCard/LectureCard'
import Container from '../commonInGeneral/layout/_Container'
import Tag from '../commonInProject/tag/Tag'
import RoundBox from '../commonInGeneral/roundBox/RoundBox'

const RecommendUser = <T extends RecommendPageType>({
  type,
  recommendedArray,
}: RecommendPageProps<T>) => {
  const userName = '김스터디' // 로그인 된 사용자, 추후에 수정
  const title =
    type === 'recruit' ? ` 님을 위한 맟춤 스터디 공고` : ` 님을 위한 추천 강의`

  return (
    <Container width="lg">
      <RoundBox
        color="primary"
        isBordered
        padding="xxl"
        className="bg-[linear-gradient(to_right,#FEFCE8,#FFF7ED)]"
      >
        <Vstack gap="none">
          <Hstack gap="xxl" className="mb-6 items-center">
            <h3 className="text-2xl font-semibold text-[#3E454C]">
              <span className="text-[#CA8A04]">{userName}</span>
              {title}
            </h3>
            <Tag color="danger" isVivid>
              개인화 추천
            </Tag>
          </Hstack>

          <GridContainer>
            {type === 'recruit' &&
              recommendedArray.map((recommend) => (
                <RecruitCard
                  key={recommend.uuid}
                  recruit={recommend as Recruit}
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
      </RoundBox>
    </Container>
  )
}

export default RecommendUser
