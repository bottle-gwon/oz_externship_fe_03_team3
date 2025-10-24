import RecruitCard from '@/components/recruit/recruitCard/RecruitCard'
import Header from '@/components/layout/header/Header'
import TitleSection from '@/components/titleSection/TitleSection'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import { mockRecruits } from './_TestMokData'
import RecruitSummaryCard from '@/components/recruit/manage/RecruitSummaryCard'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import Select from '@/components/commonInGeneral/select/Select'
import Text from '@/components/commonInGeneral/text/Text'

const RecruitManagementPage = () => {
  return (
    <Vstack className="bg-[#F9FAFB]">
      <Header />
      <Container className="py-oz-xxl flex flex-col">
        <TitleSection type="manage" />
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

          <Vstack gap="lg">
            <h1>내 공고 목록 ({mockRecruits.length})</h1>
            {mockRecruits.map((recruit) => (
              <RecruitCard isMine key={recruit.id} recruit={recruit} />
            ))}
          </Vstack>
        </Vstack>
      </Container>
    </Vstack>
  )
}

export default RecruitManagementPage
