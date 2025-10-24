import { useState } from 'react'
import Select from '@/components/commonInGeneral/select/Select'
import RecruitCard from '@/components/recruit/recruitCard/RecruitCard'
import type { LectureOrderingInText, Recruit } from '@/types'
import Header from '@/components/layout/header/Header'
import TitleSection from '@/components/titleSection/TitleSection'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import { mockRecruits } from './_TestMokData'
import Text from '@/components/commonInGeneral/text/Text'
import RecruitSummaryCard from '@/components/recruit/manage/RecruitSummaryCard'
import { GridContainer, Vstack } from '@/components/commonInGeneral/layout'
import LectureCategorySelect from '@/components/lecture/_LectureCategorySelect'
import LectureOrderingSelect from '@/components/lecture/_LectureOrderingSelect'
import Container from '@/components/commonInGeneral/layout/_Container'

const AnnouncementManagementPage = (isMine = false) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  return (
    <Vstack className="bg-[#F9FAFB]">
      <Header />
      <Container className="py-oz-xxl flex flex-col bg-[#F9FAFB]">
        <TitleSection type="manage" />
        <Vstack gap="xl">
          <RecruitSummaryCard myRecruitArray={mockRecruits} />

          <RoundBox isShadowed={false}></RoundBox>

          <Vstack gap="lg">
            <h1>내 공고 목록 ({mockRecruits.length})</h1>
            {mockRecruits.map((recruit) => (
              <RecruitCard isMine={true} key={recruit.id} recruit={recruit} />
            ))}
          </Vstack>
        </Vstack>
      </Container>
    </Vstack>
  )
}

export default AnnouncementManagementPage
