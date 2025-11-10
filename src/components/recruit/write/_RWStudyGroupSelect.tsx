import Labeled from '@/components/commonInGeneral/inputFamily/labeled/Labeled'
import { Vstack } from '@/components/commonInGeneral/layout'
import Select from '@/components/commonInGeneral/select/Select'
import useStudyHubStore from '@/store/store'
import { useState } from 'react'
import { Controller } from 'react-hook-form'
import type { RecruitWriteChildrenProps, StudyGroup } from '@/types'
import RWStudyGroupInfo from './_RWStudyGroupInfo'
import { useQuery } from '@tanstack/react-query'
import api from '@/api/api'

const RWStudyGroupSelect = ({ errors, control }: RecruitWriteChildrenProps) => {
  const [selectedStudyGroup, setSelectedStudyGroup] =
    useState<StudyGroup | null>(null)
  const editingRecruit = useStudyHubStore((state) => state.editingRecruit)

  const endpoint = '/studies/groups'
  const { data } = useQuery({
    queryKey: [endpoint],
    queryFn: async () => (await api.get(endpoint)).data.results as StudyGroup[],
  })

  const handleOptionSelect = (study_group_id: string | number) => {
    if (!data) {
      return
    }

    const result = data.find(({ uuid }) => uuid === study_group_id)
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
                {data &&
                  data.map((studyGroup) => (
                    <Select.Option
                      key={studyGroup.uuid}
                      value={studyGroup.uuid}
                    >
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
