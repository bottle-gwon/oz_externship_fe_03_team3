import { Vstack } from '@/components/commonInGeneral/layout'
import Select from '@/components/commonInGeneral/select/Select'

const RecruitTagSelect = () => {
  return (
    <Vstack gap="none" className="w-full">
      <p className="mb-oz-sm">태그</p>
      <Select onOptionSelect={() => null}>
        <Select.Trigger>전체 태그</Select.Trigger>
      </Select>
    </Vstack>
  )
}

export default RecruitTagSelect
