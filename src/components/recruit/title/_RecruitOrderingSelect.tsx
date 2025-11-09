import { Vstack } from '@/components/commonInGeneral/layout'
import Select from '@/components/commonInGeneral/select/Select'
import useRecruitStore from '@/store/recruit/recruitStore'
import {
  recruitArrangementInTextArray,
  type RecruitArrangementInText,
} from '@/types'

const RecruitOrderingSelect = () => {
  const setSelectedOrderingInText = useRecruitStore(
    (state) => state.setSelectedOrdingInText
  )
  return (
    <Vstack gap="none" className="w-full">
      <p className="mb-oz-sm">정렬</p>
      <Select
        onOptionSelect={(option) =>
          setSelectedOrderingInText(option as RecruitArrangementInText)
        }
      >
        <Select.Trigger>최신순</Select.Trigger>
        <Select.Content>
          {recruitArrangementInTextArray.map((orderingInText) => (
            <Select.Option key={orderingInText}>{orderingInText}</Select.Option>
          ))}
        </Select.Content>
      </Select>
    </Vstack>
  )
}

export default RecruitOrderingSelect
