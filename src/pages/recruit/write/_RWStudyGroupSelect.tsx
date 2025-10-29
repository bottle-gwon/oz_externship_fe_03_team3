import Labeled from '@/components/commonInGeneral/inputFamily/labeled/Labeled'
import { Vstack } from '@/components/commonInGeneral/layout'
import Select from '@/components/commonInGeneral/select/Select'
import useStudyHubStore from '@/store/store'
import { useEffect } from 'react'
import { Controller } from 'react-hook-form'
import dummyGetStudyGroupsResponse from './_dummyGetStudyGroupsResponse'
import type { RecruitWriteChildrenProps } from '@/types'

const RWStudyGroupSelect = ({ errors, control }: RecruitWriteChildrenProps) => {
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

  return (
    <Vstack>
      <Labeled isRequired isInDanger={Boolean(errors.study_group_id)}>
        <Labeled.Header>대상 스터디 그룹</Labeled.Header>
        <Controller
          control={control}
          name="study_group_id"
          render={({ field: { onChange } }) => (
            <Select onOptionSelect={onChange}>
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
    </Vstack>
  )
}

export default RWStudyGroupSelect
