// file: src/testRoutes/testPages/nari/RecruitManageFilter.tsx
import { useEffect, useState } from 'react'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import Text from '@/components/commonInGeneral/text/Text'
import {
  type Recruit,
  type RecruitArrangementInText,
  type RecruitConditionInText,
} from '@/types'
import { mockRecruits } from '@/testRoutes/testPages/nari/_TestMokData'
import RecruitManageSelect from '@/testRoutes/testPages/nari/_RecruitManageSelect'
import RecruitConditionSelect from '@/testRoutes/testPages/nari/_RecruitConditionSelect'
import useStudyHubStore from '@/store/store'

type RecruitManageFilterProps = {
  onChange: (filteredRecruitsManageArray: Recruit[]) => void
}

const filterRecruitsManageApi = (
  condition: RecruitConditionInText,
  arrangement: RecruitArrangementInText
): Recruit[] => {
  const filteredRecruitsManageArray = mockRecruits
    .filter((recruit) => {
      if (condition === '전체') return true
      if (condition === '모집중') return !recruit.is_closed
      if (condition === '마감됨') return recruit.is_closed
    })

    .sort((a, b) => {
      switch (arrangement) {
        case '최신순':
          return Date.parse(b.created_at) - Date.parse(a.created_at)
        case '북마크 많은 순':
          return (b.bookmark_count ?? 0) - (a.bookmark_count ?? 0)
        case '조회수 많은 순':
          return (b.views_count ?? 0) - (a.views_count ?? 0)
        default:
          return 0
      }
    })
  useStudyHubStore.getState().setRecruitArray(filteredRecruitsManageArray)
  return filteredRecruitsManageArray
}

const RecruitManageFilter = ({ onChange }: RecruitManageFilterProps) => {
  const [selectedCondition, setSelectedCondition] =
    useState<RecruitConditionInText>('전체')
  const [selectedArrangement, setSelectedArrangement] =
    useState<RecruitArrangementInText>('최신순')

  useEffect(() => {
    const filteredRecruits = filterRecruitsManageApi(
      selectedCondition,
      selectedArrangement
    )
    onChange(filteredRecruits)
  }, [selectedCondition, selectedArrangement, onChange])

  const totalCount = mockRecruits.length
  const openCount = mockRecruits.filter((i) => !i.is_closed).length
  const closedCount = mockRecruits.filter((i) => i.is_closed).length

  const conditionTriggerLabel =
    selectedCondition === '전체'
      ? `전체 (${totalCount})`
      : selectedCondition === '모집중'
        ? `모집중 (${openCount})`
        : `마감됨 (${closedCount})`

  return (
    <RoundBox isShadowed={false}>
      <Hstack>
        <Vstack className="w-full">
          <Text>상태</Text>
          <RecruitConditionSelect
            selectedCondition={selectedCondition}
            triggerLabel={conditionTriggerLabel}
            setRecruitConditionSelectProps={setSelectedCondition}
          />
        </Vstack>

        <Vstack className="w-full">
          <Text>정렬</Text>
          <RecruitManageSelect
            selectedArrangement={selectedArrangement}
            setRecruitArrangementInText={setSelectedArrangement}
          />
        </Vstack>
      </Hstack>
    </RoundBox>
  )
}

export default RecruitManageFilter
