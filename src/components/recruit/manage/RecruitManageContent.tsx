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
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import type { Recruit } from '@/types'
import RecruitManageFilter from '@/components/recruit/manage/RecruitManageFilter'

const page_size = 10

const RecruitManageContent = () => {
  const navigate = useNavigate()
  const handleClick = (url: string) => navigate(url)

  // 현재 더미데이터 기준으로 진행. 추후 api 기준으로 변경
  const [recruitList, setRecruitList] = useState<Recruit[]>(() => [
    ...mockRecruits,
  ])
  const [recruitPage, setRecruitPage] = useState(1)
  const visibleRecruits = useMemo(
    () => recruitList.slice(0, recruitPage * page_size),
    [recruitList, recruitPage]
  )
  const hasMore = visibleRecruits.length < recruitList.length

  const [isLoading, setIsLoading] = useState(false)
  const loaderRef = useRef<HTMLDivElement | null>(null)

  const handleFilterChange = useCallback((filtered: Recruit[]) => {
    setRecruitList(filtered)
    setRecruitPage(1)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    const target = loaderRef.current
    if (!target) return

    const io = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (!entry.isIntersecting) return
      if (!hasMore) return
      if (isLoading) return

      setIsLoading(true)
      setRecruitPage((prev) => prev + 1)
      setTimeout(() => setIsLoading(false), 0)
    })

    io.observe(target)
    return () => io.disconnect()
  }, [hasMore, isLoading])

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
          <h1 className="mb-oz-md">내 공고 목록 ({recruitList.length})</h1>
          {visibleRecruits.map((recruit) => (
            <RecruitCard isMine key={recruit.id} recruit={recruit} />
          ))}

          {hasMore && (
            <div ref={loaderRef} className="h-0.5 w-full shrink-0"></div>
          )}
        </Vstack>
      </Vstack>
    </Container>
  )
}

export default RecruitManageContent
