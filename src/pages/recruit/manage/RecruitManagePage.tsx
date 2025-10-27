import RecruitCard from '@/components/recruit/recruitCard/RecruitCard'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import { mockRecruits } from '../../../testRoutes/testPages/nari/_TestMokData'
import RecruitSummaryCard from '@/components/recruit/manage/RecruitSummaryCard'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import Select from '@/components/commonInGeneral/select/Select'
import Text from '@/components/commonInGeneral/text/Text'
import SubHeader from '@/components/commonInProject/SubHeader/SubHeader'
import SubHeaderTitleSection from '@/components/commonInProject/SubHeader/_SubHeaderTtileSectoin'
import Button from '@/components/commonInGeneral/button/Button'
import SubHeaderButtonSection from '@/components/commonInProject/SubHeader/_SubHeaderButtonSection'
import FloatingButtonContainer from '@/components/layout/floatingButton/FloatingButtonContainer'
import FloatingButton from '@/components/layout/floatingButton/FloatingButton'
import { MessageCircle } from 'lucide-react'
import { useNavigate } from 'react-router'

const RecruitManagementPage = () => {
  const navigate = useNavigate()
  const handleClick = (url: string) => navigate(url)
  const badgeTest = 12
  return (
    <Container isPadded className="py-oz-xxl bg-[#F9FAFB]">
      <SubHeader isBackButtonVisible>
        <SubHeaderTitleSection>
          <SubHeader.Title>공고 관리</SubHeader.Title>
          <SubHeader.Subtitle>
            내가 등록한 스터디 구인공고를 관리하세요
          </SubHeader.Subtitle>
        </SubHeaderTitleSection>
        <SubHeaderButtonSection>
          <Button
            color="primary"
            variant="contained"
            size="lg"
            onClick={() => handleClick('/recruit/create')}
          >
            + 새 공고 작성하기
          </Button>
        </SubHeaderButtonSection>
      </SubHeader>

      <Vstack gap="xl">
        <RecruitSummaryCard myRecruitArray={mockRecruits} />

        <RoundBox isShadowed={false}>
          <Hstack>
            <Vstack className="w-full">
              <Text>상태</Text>
              <Select onOptionSelect={() => null}>
                <Select.Trigger>{`전체 (${mockRecruits.length})`}</Select.Trigger>
                <Select.Content>
                  <Select.Option>{`전체 (${mockRecruits.length})`}</Select.Option>
                  <Select.Option>{`모집중 (${mockRecruits.filter((item) => !item.is_closed).length})`}</Select.Option>
                  <Select.Option>{`마감됨 (${mockRecruits.filter((item) => item.is_closed).length})`}</Select.Option>
                </Select.Content>
              </Select>
            </Vstack>
            <Vstack className="w-full">
              <Text>정렬</Text>
              <Select onOptionSelect={() => null}>
                <Select.Trigger>최신순</Select.Trigger>
                <Select.Content>
                  <Select.Option>최신순</Select.Option>
                  <Select.Option>북마크 순</Select.Option>
                  <Select.Option>조회수 순</Select.Option>
                </Select.Content>
              </Select>
            </Vstack>
          </Hstack>
        </RoundBox>

        <Vstack gap="none">
          <h1>내 공고 목록 ({mockRecruits.length})</h1>
          {mockRecruits.map((recruit) => (
            <RecruitCard isMine key={recruit.id} recruit={recruit} />
          ))}
        </Vstack>
      </Vstack>

      <FloatingButtonContainer>
        {/* 메시지 아이콘 */}
        <FloatingButton theme="primary" badge={badgeTest}>
          <MessageCircle size={24} />
        </FloatingButton>
      </FloatingButtonContainer>
    </Container>
  )
}

export default RecruitManagementPage
