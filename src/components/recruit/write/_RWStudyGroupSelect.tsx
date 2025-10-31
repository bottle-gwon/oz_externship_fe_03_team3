import Labeled from '@/components/commonInGeneral/inputFamily/labeled/Labeled'
import { Vstack } from '@/components/commonInGeneral/layout'
import Select from '@/components/commonInGeneral/select/Select'
import useStudyHubStore from '@/store/store'
import { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import dummyGetStudyGroupsResponse from './_dummyGetStudyGroupsResponse'
import type { RecruitWriteChildrenProps, StudyGroup } from '@/types'
import RWStudyGroupInfo from './_RWStudyGroupInfo'

const RWStudyGroupSelect = ({ errors, control }: RecruitWriteChildrenProps) => {
  const [selectedStudyGroup, setSelectedStudyGroup] =
    useState<StudyGroup | null>(null)
  const editingRecruit = useStudyHubStore((state) => state.editingRecruit)

  // TODO: api 연결할 땐 useQuery로 교체해야
  const studyGroupArray = useStudyHubStore((state) => state.studyGroupArray)
  const setStudyGroupArray = useStudyHubStore(
    (state) => state.setStudyGroupArray
  )
  useEffect(() => {
    const dummyResponse = dummyGetStudyGroupsResponse
    const array = dummyResponse.data.study_groups
    setStudyGroupArray(array)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOptionSelect = (study_group_id: string | number) => {
    const result = studyGroupArray.find(({ id }) => id === study_group_id)
    if (!result) {
      return
    }
    setSelectedStudyGroup(result)
  }

  return (
    <Vstack>
      <Labeled isRequired isInDanger={Boolean(errors.study_group_id)}>
        <Labeled.Header>대상 스터디 그룹</Labeled.Header>
        <Controller
          control={control}
          name="study_group_id"
          render={({ field: { onChange } }) => (
            <Select
              defaultChildren={editingRecruit?.study_name}
              onOptionSelect={(option) => {
                handleOptionSelect(option)
                onChange(option)
              }}
            >
              <Select.Trigger>스터디 그룹을 선택해주세요</Select.Trigger>
              <Select.Content>
                {studyGroupArray.map((studyGroup) => (
                  <Select.Option key={studyGroup.id} value={studyGroup.id}>
                    {studyGroup.name}
                  </Select.Option>
                ))}
              </Select.Content>
            </Select>
          )}
        />
        <Labeled.Footer>{errors?.study_group_id?.message}</Labeled.Footer>
      </Labeled>
      {selectedStudyGroup && (
        <RWStudyGroupInfo studyGroup={selectedStudyGroup} />
      )}
    </Vstack>
  )
}

export default RWStudyGroupSelect
