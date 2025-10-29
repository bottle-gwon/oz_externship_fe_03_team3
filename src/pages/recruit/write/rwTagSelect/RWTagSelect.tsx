import Button from '@/components/commonInGeneral/button/Button'
import Labeled from '@/components/commonInGeneral/inputFamily/labeled/Labeled'
import { Hstack } from '@/components/commonInGeneral/layout'
import type { RecruitWriteChildrenProps } from '@/types'
import { RECRUIT_WRITE_CONFIG } from '@/utils/constants'
import { Plus } from 'lucide-react'
import TagSelectModal from '@/components/recruit/write/tagSelectModal/TagSelectModal'
import { useEffect, useState } from 'react'
import type { RecruitWriteSchema } from '@/lib/zodSchema'
import type { UseFormSetValue } from 'react-hook-form'
import RWTagSelectEmpty from './_RWTagSelectEmpty'
import RWTagSelectContained from './_RWTagSelectContained'
import useStudyHubStore from '@/store/store'

interface WithRWTagSelectProps {
  setValue: UseFormSetValue<RecruitWriteSchema>
}

const RWTagSelect = ({
  setValue,
  errors,
}: RecruitWriteChildrenProps & WithRWTagSelectProps) => {
  const selectedTagArray = useStudyHubStore((state) => state.selectedTagArray)
  const setModalKey = useStudyHubStore((state) => state.setModalKey)

  useEffect(() => {
    setValue('tags', selectedTagArray)
  }, [selectedTagArray, setValue])

  return (
    <Labeled isInDanger={Boolean(errors.tags)}>
      <Hstack className="items-end justify-between">
        <Labeled.Header>사용자 정의 태그</Labeled.Header>
        <Button
          type="button"
          color="primary"
          size="sm"
          className="mb-oz-xs"
          onClick={() => setModalKey('tagSelect')}
        >
          <Plus size={14} />
          태그 검색
        </Button>
      </Hstack>
      {selectedTagArray.length === 0 && <RWTagSelectEmpty />}
      {selectedTagArray.length > 0 && <RWTagSelectContained />}

      <Labeled.Footer>{errors?.tags?.message}</Labeled.Footer>
      <Labeled.Footer>
        태그는 최대 {RECRUIT_WRITE_CONFIG.MAX_TAG}개까지 선택할 수 있습니다. (
        {selectedTagArray.length}/{RECRUIT_WRITE_CONFIG.MAX_TAG})
      </Labeled.Footer>
    </Labeled>
  )
}

export default RWTagSelect
