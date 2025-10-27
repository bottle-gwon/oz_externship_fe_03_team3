import Button from '@/components/commonInGeneral/button/Button'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import Select from '@/components/commonInGeneral/select/Select'
import SubHeaderButtonSection from '@/components/commonInProject/SubHeader/_SubHeaderButtonSection'
import SubHeaderTitleSection from '@/components/commonInProject/SubHeader/_SubHeaderTtileSectoin'
import SubHeader from '@/components/commonInProject/SubHeader/SubHeader'
import RecommendSection from '@/components/recommendSection/RecommendSection'
import RecruitCard from '@/components/recruit/recruitCard/RecruitCard'
import { dummyRecruitArray } from '@/components/recruit/recruitListDummy'
import ScrollText from '../../assets/scroll-text.svg'
import { LogIn, Search } from 'lucide-react'
import { useNavigate } from 'react-router'

const RecruitListPage = () => {
  const navigate = useNavigate()
  const handleClick = (url: string) => navigate(url)
  const isLoggedIn = true //로그인 여부 추후에 변경

  return (
    <Container className="py-oz-xxl flex flex-col items-center bg-gray-50">
      <SubHeader isBackButtonVisible={false}>
        <SubHeaderTitleSection>
          <SubHeader.Title>스터디 구인 공고</SubHeader.Title>
          <SubHeader.Subtitle>
            새로운 스터디 멤버를 찾거나 관심있는 스터디에 참여해보세요
          </SubHeader.Subtitle>
        </SubHeaderTitleSection>
        <SubHeaderButtonSection>
          {isLoggedIn && (
            <>
              <Button
                color="primary"
                variant="outlined"
                size="lg"
                onClick={() => handleClick('/recruit/manager')}
              >
                <img src={ScrollText} />
                공고 관리
              </Button>
              <Button
                color="primary"
                variant="contained"
                size="lg"
                onClick={() => handleClick('/recruit/create')}
              >
                + 공고 작성하기
              </Button>
            </>
          )}
          {!isLoggedIn && (
            <Button
              color="primary"
              variant="contained"
              size="lg"
              onClick={() => handleClick('/login')}
            >
              <LogIn className="mr-oz-sm" />
              로그인 후 공고 작성
            </Button>
          )}
        </SubHeaderButtonSection>
      </SubHeader>
      <RecommendSection
        type="recruit"
        isLoggedIn={isLoggedIn}
        recommendedArray={dummyRecruitArray.slice(0, 3)}
      />
      <Vstack gap="xxl" className="px-oz-xxl w-full">
        <RoundBox
          isShadowed={false}
          color="mono-bright"
          padding="xl"
          radius="lg"
          className="justify-center"
        >
          <Hstack
            gap="none"
            className="p-oz-md mb-oz-xl h-[50px] w-[448px] items-center rounded-md border border-gray-300 bg-white"
          >
            <Search className="size-4 text-gray-400" />
            <input
              type="text"
              placeholder="공고 제목으로 검색..."
              className="m-3 w-full"
            />
          </Hstack>
          <Hstack gap="none" className="gap-9">
            <Vstack gap="none" className="w-full">
              <p className="mb-oz-sm">태그</p>
              <Select onOptionSelect={() => null}>
                <Select.Trigger>전체 태그</Select.Trigger>
              </Select>
            </Vstack>
            <Vstack gap="none" className="w-full">
              <p className="mb-oz-sm">정렬</p>
              <Select onOptionSelect={() => null}>
                <Select.Trigger>최신순</Select.Trigger>
              </Select>
            </Vstack>
          </Hstack>
        </RoundBox>
        <Vstack gap="none">
          {/* 추후에 변경 */}
          <Vstack gap="none" className="mb-oz-xl text-lg font-semibold">
            전체 공고({dummyRecruitArray.length})
          </Vstack>
          <Vstack gap="none" className="w-full">
            {dummyRecruitArray.map((recruit) => (
              <RecruitCard key={recruit.id} recruit={recruit} />
            ))}
          </Vstack>
        </Vstack>
      </Vstack>
      <Button
        variant="contained"
        status="enabled"
        size="lg"
        className="mb-oz-xxl mt-12"
      >
        + 더 많은 공고 보기
      </Button>
    </Container>
  )
}

export default RecruitListPage
