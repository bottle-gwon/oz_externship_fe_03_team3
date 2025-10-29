import Button from '@/components/commonInGeneral/button/Button'
import Labeled from '@/components/commonInGeneral/inputFamily/labeled/Labeled'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import TagSelection from '@/components/recruit/write/tagSelectModal/feat/TagSelection'
import type { RecruitWriteChildrenProps } from '@/types'
import { RECRUIT_WRITE_CONFIG } from '@/utils/constants'
import { Plus } from 'lucide-react'
import TagIcon from '@/assets/tag.svg'
import TagSelectModal from '@/components/recruit/write/tagSelectModal/TagSelectModal'
import { useEffect, useState } from 'react'
import TagSelected from '@/components/recruit/write/tagSelectModal/feat/TagSelected'
import type { RecruitWriteSchema } from '@/lib/zodSchema'
import type { UseFormSetValue } from 'react-hook-form'
import RWTagSelectEmpty from './_RWTagSelectEmpty'
import RWTagSelectContained from './_RWTagSelectContained'

interface WithRWTagSelectProps {
  setValue: UseFormSetValue<RecruitWriteSchema>
}

const RWTagSelect = ({
  setValue,
  errors,
}: RecruitWriteChildrenProps & WithRWTagSelectProps) => {
  const [isOn, setIsOn] = useState(false)
  const [selectedTagArray, setSelectedTagArray] = useState<string[]>([])

  useEffect(() => {
    setValue('tags', selectedTagArray)
  }, [selectedTagArray, setValue])

  return (
    <>
      <Labeled isInDanger={Boolean(errors.tags)}>
        <Hstack className="items-end justify-between">
          <Labeled.Header>사용자 정의 태그</Labeled.Header>
          <Button
            type="button"
            color="primary"
            size="sm"
            className="mb-oz-xs"
            onClick={() => setIsOn(true)}
          >
            <Plus size={14} />
            태그 검색
          </Button>
        </Hstack>
        {selectedTagArray.length === 0 && <RWTagSelectEmpty />}
        {selectedTagArray.length > 0 && (
          <RWTagSelectContained
            selectedTagArray={selectedTagArray}
            setSelectedTagArray={setSelectedTagArray}
          />
        )}

        <Labeled.Footer>{errors?.tags?.message}</Labeled.Footer>
        <Labeled.Footer>
          태그는 최대 {RECRUIT_WRITE_CONFIG.MAX_TAG}개까지 선택할 수 있습니다. (
          {selectedTagArray.length}/{RECRUIT_WRITE_CONFIG.MAX_TAG})
        </Labeled.Footer>
      </Labeled>

      <TagSelectModal
        isOn={isOn}
        onClose={() => setIsOn(false)}
        tagArray={selectedTagArray}
        setTagArray={setSelectedTagArray}
      />
    </>
  )
}

export default RWTagSelect
