import { Vstack } from '@/components/commonInGeneral/layout'
import Select from '@/components/commonInGeneral/select/Select'

const RecruitOrderingSelect = () => {
  return (
    <Vstack gap="none" className="w-full">
      <p className="mb-oz-sm">정렬</p>
      <Select onOptionSelect={() => null}>
        <Select.Trigger>최신순</Select.Trigger>
      </Select>
    </Vstack>
  )
}

export default RecruitOrderingSelect
