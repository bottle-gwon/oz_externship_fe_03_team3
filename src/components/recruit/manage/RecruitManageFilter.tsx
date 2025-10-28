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

import useStudyHubStore from '@/store/store'
import Select from '@/components/commonInGeneral/select/Select'
import RecruitManageSelect from './_RecruitManageSelect'

type RecruitManageFilterProps = {
  onChange: (filteredRecruitsManageArray: Recruit[]) => void
}

const conditionOptions = (optionText: string): RecruitConditionInText => {
  if (optionText.startsWith('전체')) return '전체'
  if (optionText.startsWith('모집중')) return '모집중'
  if (optionText.startsWith('마감됨')) return '마감됨'
  return '전체'
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
      return true
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
          return Date.parse(b.created_at) - Date.parse(a.created_at)
      }
    })

  return filteredRecruitsManageArray
}

const RecruitManageFilter = ({ onChange }: RecruitManageFilterProps) => {
  const [selectedCondition, setSelectedCondition] =
    useState<RecruitConditionInText>('전체')
  const [selectedArrangement, setSelectedArrangement] =
    useState<RecruitArrangementInText>('최신순')

  const setRecruitArray = useStudyHubStore((state) => state.setRecruitArray)

  useEffect(() => {
    const filteredRecruits = filterRecruitsManageApi(
      selectedCondition,
      selectedArrangement
    )
    setRecruitArray(filteredRecruits)
    onChange(filteredRecruits)
  }, [selectedCondition, selectedArrangement, onChange, setRecruitArray])

  const totalCount = mockRecruits.length
  const openCount = mockRecruits.filter((item) => !item.is_closed).length
  const closedCount = mockRecruits.filter((item) => item.is_closed).length

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
          <Select
            onOptionSelect={(opt) =>
              setSelectedCondition(conditionOptions(String(opt)))
            }
          >
            <Select.Trigger>{conditionTriggerLabel}</Select.Trigger>
            <Select.Content>
              <Select.Option>{`전체 (${totalCount})`}</Select.Option>
              <Select.Option>{`모집중 (${openCount})`}</Select.Option>
              <Select.Option>{`마감됨 (${closedCount})`}</Select.Option>
            </Select.Content>
          </Select>
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
