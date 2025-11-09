import { Vstack } from '@/components/commonInGeneral/layout'
import Select from '@/components/commonInGeneral/select/Select'
import useRecruitManageStore from '@/store/recruit/manage/recruitManageStore'
import {
  recruitArrangementInTextArray,
  type RecruitArrangementInText,
} from '@/types'

const RecruitManageOrderingSelect = () => {
  const selectedOrderingInText = useRecruitManageStore(
    (state) => state.selectedOrderingInText
  )
  const setSelectedOrderingInText = useRecruitManageStore(
    (state) => state.setSelectedOrderingInText
  )

  return (
    <Vstack gap="none" className="w-full">
      <p className="mb-oz-sm">정렬</p>
      <Select
        onOptionSelect={(option) =>
          setSelectedOrderingInText(option as RecruitArrangementInText)
        }
      >
        <Select.Trigger>{selectedOrderingInText}</Select.Trigger>
        <Select.Content>
          {recruitArrangementInTextArray.map((orderingInText) => (
            <Select.Option key={orderingInText} value={orderingInText}>
              {orderingInText}
            </Select.Option>
          ))}
        </Select.Content>
      </Select>
    </Vstack>
  )
}

export default RecruitManageOrderingSelect
