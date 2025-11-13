import Labeled from '@/components/commonInGeneral/inputFamily/labeled/Labeled'
import useStudyHubStore from '@/store/store'
import type { RecruitWriteChildrenProps } from '@/types'

const RWEstimatedCostInput = ({
  errors,
  register,
}: RecruitWriteChildrenProps) => {
  const editingRecruit = useStudyHubStore((state) => state.editingRecruit)

  if (!register) {
    return
  }

  return (
    <Labeled isInDanger={Boolean(errors.estimated_cost)}>
      <Labeled.Header>예상 결제 비용(원)</Labeled.Header>
      <Labeled.Input
        {...register('estimated_cost')}
        type="number"
        placeholder="미입력시 강의 비용 자동 계산"
        defaultValue={editingRecruit?.estimated_fee || undefined}
      />
      <Labeled.Footer>{errors?.estimated_cost?.message}</Labeled.Footer>
    </Labeled>
  )
}

export default RWEstimatedCostInput
