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
import { Search } from 'lucide-react'
import { useNavigate } from 'react-router'

const RecruitListPage = () => {
  const navigate = useNavigate()
  const handleClick = (url: string) => navigate(url)
  const isLoggedIn = true //로그인 여부 추후에 변경

  return (
    <Container className="py-oz-xxl flex flex-col items-center bg-[#F9FAFB]">
      <SubHeader>
        <Hstack gap="none" className="items-center">
          <SubHeader.BackButton />
          <SubHeaderTitleSection>
            <SubHeader.Title>스터디 구인 공고</SubHeader.Title>
            <SubHeader.Subtitle>
              새로운 스터디 멤버를 찾거나 관심있는 스터디에 참여해보세요
            </SubHeader.Subtitle>
          </SubHeaderTitleSection>
        </Hstack>
        <SubHeaderButtonSection>
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
            className="ml-3"
          >
            + 공고 작성하기
          </Button>
        </SubHeaderButtonSection>
      </SubHeader>
      <RecommendSection
        type="recruit"
        isLoggedIn={isLoggedIn}
        recommendedArray={dummyRecruitArray.slice(0, 3)}
      />
      <RoundBox
        isShadowed={false}
        color={'mono-bright'}
        padding="xl"
        radius="lg"
        className="mb-8 h-[191px] w-[1216px] justify-center"
      >
        <Hstack
          gap="none"
          className="p-oz-md mb-6 h-[50px] w-[448px] items-center rounded-md border border-[#D1D5DB] bg-white"
        >
          <Search className="size-4 text-gray-400" />
          <input
            type="text"
            placeholder="공고 제목으로 검색..."
            className="m-3 h-full w-[394px]"
          />
        </Hstack>
        <Hstack gap="none" className="w-full gap-9">
          <Vstack gap="none" className="w-full">
            <p className="mb-2 h-5">태그</p>
            <Select onOptionSelect={() => null}>
              <Select.Trigger>전체 태그</Select.Trigger>
            </Select>
          </Vstack>
          <Vstack gap="none" className="w-full">
            <p className="mb-2">정렬</p>
            <Select onOptionSelect={() => null}>
              <Select.Trigger>최신순</Select.Trigger>
            </Select>
          </Vstack>
        </Hstack>
      </RoundBox>
      <Vstack gap="none">
        {/* 추후에 변경 */}
        <Vstack gap="none" className="mb-6 text-lg font-semibold">
          전체 공고({dummyRecruitArray.length})
        </Vstack>
        <Vstack gap="none" className="w-[1216px]">
          {dummyRecruitArray.map((recruit) => (
            <RecruitCard key={recruit.id} recruit={recruit} />
          ))}
        </Vstack>
      </Vstack>
      <Button
        variant="contained"
        status="enabled"
        size="lg"
        className="mt-12 mb-8"
      >
        + 더 많은 공고 보기
      </Button>
    </Container>
  )
}

export default RecruitListPage
