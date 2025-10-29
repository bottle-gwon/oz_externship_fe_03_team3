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
import { useState } from 'react'

const RWTagSelect = ({ errors }: RecruitWriteChildrenProps) => {
  const [isOn, setIsOn] = useState(false)
  const [selectedTagArray, setSelectedTagArray] = useState<string[]>([])

  const handleDeleteTag = (tag: string) => {
    const filteredTagArray = selectedTagArray.filter((el) => el !== tag)
    setSelectedTagArray(filteredTagArray)
  }

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
        <RoundBox color="mono-bright" padding="xl" borderStyle="dashed">
          <Vstack gap="sm" className="items-center text-gray-500">
            <img src={TagIcon} />
            <Vstack gap="none" className="items-center">
              <h4 className="text-sm">선택된 태그가 없습니다</h4>
              <p className="text-xs">
                태그 검색 버튼을 클릭해서 태그를 추가해보세요
              </p>

              <TagSelection
                tagArray={selectedTagArray}
                onDeleteTag={handleDeleteTag}
              />
              <p>{JSON.stringify(selectedTagArray)}</p>
            </Vstack>
          </Vstack>
        </RoundBox>
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
