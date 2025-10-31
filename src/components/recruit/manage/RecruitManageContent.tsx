import RecruitCard from '@/components/recruit/recruitCard/RecruitCard'
import { mockRecruits } from '../../../testRoutes/testPages/nari/_TestMokData'
import RecruitSummaryCard from '@/components/recruit/manage/RecruitSummaryCard'
import { Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import SubHeader from '@/components/commonInProject/SubHeader/SubHeader'
import SubHeaderTitleSection from '@/components/commonInProject/SubHeader/_SubHeaderTtileSectoin'
import Button from '@/components/commonInGeneral/button/Button'
import SubHeaderButtonSection from '@/components/commonInProject/SubHeader/_SubHeaderButtonSection'
import { useNavigate } from 'react-router'
import { useCallback, useState } from 'react'

import type { Recruit } from '@/types'
import RecruitManageFilter from '@/components/recruit/manage/RecruitManageFilter'

const RecruitManageContent = () => {
  const navigate = useNavigate()
  const handleClick = (url: string) => navigate(url)

  const handleFilterChange = useCallback((filtered: Recruit[]) => {
    setVisibleRecruits(filtered)
  }, [])

  const [visibleRecruits, setVisibleRecruits] = useState<Recruit[]>(() => [
    ...mockRecruits,
  ])

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
            onClick={() => handleClick('/recruit/write')}
          >
            + 새 공고 작성하기
          </Button>
        </SubHeaderButtonSection>
      </SubHeader>

      <Vstack gap="xl">
        <RecruitSummaryCard myRecruitArray={mockRecruits} />

        <RecruitManageFilter onChange={handleFilterChange} />

        <Vstack gap="none">
          <h1>내 공고 목록 ({visibleRecruits.length})</h1>
          {visibleRecruits.map((recruit) => (
            <RecruitCard isMine key={recruit.id} recruit={recruit} />
          ))}
          <Button
            variant="contained"
            status="enabled"
            size="lg"
            className="mb-oz-xxl"
          >
            + 더 많은 공고 보기
          </Button>
        </Vstack>
      </Vstack>
    </Container>
  )
}

export default RecruitManageContent
