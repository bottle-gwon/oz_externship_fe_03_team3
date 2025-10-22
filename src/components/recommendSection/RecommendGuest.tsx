import { LogIn, UserPlus } from 'lucide-react'
import Vstack from '../commonInGeneral/layout/_Vstack'
import Hstack from '../commonInGeneral/layout/_Hstack'
import RecommendPreviewCard from './RecommendPreviwCard'
import UserStar from '../../assets/user-star.svg'
import type { RecommendPageType } from '@/types'
import Container from '../commonInGeneral/layout/_Container'
import Button from '../commonInGeneral/button/Button'
import RoundBox from '../commonInGeneral/roundBox/RoundBox'

const emptyStateContent = {
  recruit: {
    title: '개인 맞춤 스터디 공고를 받아보세요',
    description:
      ' 로그인하시면 관심 분야와 수강 강의를 바탕으로 맞춤형 스터디 공고를 추천해드립니다',
  },
  lecture: {
    title: '개인 맞춤 강의를 추천 받아보세요',
    description:
      ' 로그인하시면 관심 분야를 바탕으로 맞춤형 강의를 추천해드립니다',
  },
}

const RecommendGuest = ({ type }: { type: RecommendPageType }) => {
  const content = emptyStateContent[type]

  return (
    <Container width="lg" className="px-oz-xxl mb-12">
      <RoundBox
        color="primary"
        padding="xxl"
        isBordered
        className="bg-[linear-gradient(to_right,#FEFCE8,#FFF7ED)]"
      >
        <Vstack gap="none" className="items-center">
          <img src={UserStar} className="h-6 w-6" />
          <h3 className="mb-3 text-2xl leading-8 font-semibold text-[#111827]">
            {content.title}
          </h3>
          <p className="mb-6 w-md text-center text-base leading-6 font-normal text-[#4B5563]">
            {content.description}
          </p>
          <Hstack gap="lg">
            <Button color="primary">
              <LogIn size={18} />
              로그인하기
            </Button>
            <Button color="primary" variant="outlined">
              <UserPlus size={18} />
              회원가입하기
            </Button>
          </Hstack>
          <Vstack gap="lg" className="mt-8">
            <p className="text-center text-sm text-[#6B7280]">
              로그인 후 이런 맞춤 추천을 받을 수 있어요
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <RecommendPreviewCard key={i} />
              ))}
            </div>
          </Vstack>
        </Vstack>
      </RoundBox>
    </Container>
  )
}

export default RecommendGuest
