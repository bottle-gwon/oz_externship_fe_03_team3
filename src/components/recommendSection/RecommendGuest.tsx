import { LogIn, UserPlus } from 'lucide-react'
import Vstack from '../commonInGeneral/layout/_Vstack'
import Hstack from '../commonInGeneral/layout/_Hstack'
import RecommendPreviewCard from './RecommendPreviwCard'
import UserStar from '../../assets/user-star.svg'
import type { RecommendPageType } from '@/types'
import Container from '../commonInGeneral/layout/_Container'
import Button from '../commonInGeneral/button/Button'
import RoundBox from '../commonInGeneral/roundBox/RoundBox'
import { GridContainer } from '../commonInGeneral/layout'

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
          <Vstack
            gap="none"
            className="bg-primary-100 mb-oz-lg size-16 items-center justify-center rounded-[50%]"
          >
            <img src={UserStar} className="size-6" />
          </Vstack>
          <h3 className="mb-oz-md text-2xl font-semibold">{content.title}</h3>
          <p className="mb-oz-xl max-w-md text-center text-base font-normal text-gray-600">
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
          <Vstack gap="lg" className="mt-oz-xxl w-full">
            <p className="text-center text-sm text-gray-500">
              로그인 후 이런 맞춤 추천을 받을 수 있어요
            </p>
            <GridContainer gap="lg">
              {[1, 2, 3].map((i) => (
                <RecommendPreviewCard key={i} />
              ))}
            </GridContainer>
          </Vstack>
        </Vstack>
      </RoundBox>
    </Container>
  )
}

export default RecommendGuest
