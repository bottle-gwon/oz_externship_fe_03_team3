import { useState } from 'react'
import Select from '@/components/commonInGeneral/select/Select'
import RecruitCard from '@/components/recruit/recruitCard/RecruitCard'
import type { Recruit, MyRecruit } from '@/types'
import Header from '@/components/layout/header/Header'
import TitleSection from '@/components/titleSection/TitleSection'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import RecruitSummaryCard from '@/components/recruit/manage/_recruitSummaryCard'
import { mockRecruits } from './_TestMokData'
import { mockSummaryCard } from './_TestMokSummary'
import Text from '@/components/commonInGeneral/text/Text'

export type SummaryProps = { myRecruitArray: MyRecruit[] }

export type RecruitCardProps = {
  isMine?: boolean
  cardClassName?: string
  imageClassName?: string
}

const AnnouncementManagementPage = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  return (
    <div>
      <Header />
      <TitleSection type="manage" />

      <RoundBox
        color="mono-bright"
        isBordered
        borderStyle="solid"
        isShadowed
        padding="md"
        radius="md"
      >
        <Text>{JSON.stringify({ selectedOption })}</Text>
        <Select onOptionSelect={(option) => setSelectedOption(option)}>
          <Select.Trigger>이걸 누르면 열립니다</Select.Trigger>
          <Select.Content>
            <Select.Option>전체</Select.Option>
            <Select.Option>모집중</Select.Option>
            <Select.Option>마감됨</Select.Option>
          </Select.Content>
        </Select>
        <Text>{JSON.stringify({ selectedOption })}</Text>
        <Select onOptionSelect={(option) => setSelectedOption(option)}>
          <Select.Trigger>이걸 누르면 열립니다</Select.Trigger>
          <Select.Content>
            <Select.Option>최신순</Select.Option>
            <Select.Option>오래된 순</Select.Option>
            <Select.Option>조회수 순</Select.Option>
            <Select.Option>북마크 순</Select.Option>
          </Select.Content>
        </Select>
      </RoundBox>
      <h1>내 공고 목록 ()</h1>
      <RecruitSummaryCard />
      <RecruitCard />
    </div>
  )
}

export default AnnouncementManagementPage
