import Labeled from '@/components/commonInGeneral/inputFamily/labeled/Labeled'
import Select from '@/components/commonInGeneral/select/Select'
import type { RecruitWriteChildrenProps } from '@/types'
import { RECRUIT_WRITE_CONFIG } from '@/utils/constants'
import { Controller } from 'react-hook-form'

const RWExpectedPersonnelSelect = ({
  errors,
  control,
}: RecruitWriteChildrenProps) => {
  return (
    <Labeled isRequired isInDanger={Boolean(errors.expected_personnel)}>
      <Labeled.Header>예상 모집 인원</Labeled.Header>
      <Controller
        control={control}
        name="expected_personnel"
        render={({ field: { onChange } }) => (
          <Select onOptionSelect={onChange}>
            <Select.Trigger>예상 모집 인원을 선택하세요</Select.Trigger>
            <Select.Content>
              {Array(RECRUIT_WRITE_CONFIG.MAX_PERSONNEL)
                .fill(0)
                .map((_, index) => (
                  <Select.Option
                    key={index}
                    value={index + 1}
                  >{`${index + 1}명`}</Select.Option>
                ))}
            </Select.Content>
          </Select>
        )}
      />
      <Labeled.Footer>{errors?.expected_personnel?.message}</Labeled.Footer>
    </Labeled>
  )
}

export default RWExpectedPersonnelSelect
