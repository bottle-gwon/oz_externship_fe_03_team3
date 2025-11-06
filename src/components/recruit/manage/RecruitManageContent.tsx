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
import { useCallback } from 'react'

import type { Recruit } from '@/types'
import RecruitManageFilter from '@/components/recruit/manage/RecruitManageFilter'
import useOneWayInfinityScroll from '@/hooks/useOneWayInfinityScroll'
import useRecruitManageStore from '@/store/recruit/manage/recruitManageStore'
import useRecruitManage from '@/hooks/recruit/useRecruitsManageQuery'

const RecruitManageContent = () => {
  const navigate = useNavigate()
  const handleClick = (url: string) => navigate(url)

  const recruitManageArray = useRecruitManageStore(
    (state) => state.recruitManageArray
  )
  const requestNextPage = useRecruitManageStore(
    (state) => state.requestNextPage
  )
  const { hasNextPage, totalCount } = useRecruitManage()
  const handleFilterChange = useCallback((_filtered: Recruit[]) => {}, [])
  const loaderRef = useOneWayInfinityScroll(() => {
    if (hasNextPage) requestNextPage()
  })

  return (
    <Container isPadded>
      <Vstack gap="xxl">
        <SubHeader isBackButtonVisible isPadded={false}>
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

        <RecruitSummaryCard myRecruitArray={mockRecruits} />

        <RecruitManageFilter onChange={handleFilterChange} />

        <Vstack gap="none">
          <h1 className="mb-oz-md">내 공고 목록 ({totalCount})</h1>
          {recruitManageArray.map((recruit) => (
            <RecruitCard isMine key={recruit.id} recruit={recruit} />
          ))}

          <div ref={loaderRef} className="h-0.5 w-full shrink-0"></div>
        </Vstack>
      </Vstack>
    </Container>
  )
}

export default RecruitManageContent
