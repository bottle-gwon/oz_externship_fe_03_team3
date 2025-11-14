import Labeled from '@/components/commonInGeneral/inputFamily/labeled/Labeled'
import useStudyHubStore from '@/store/store'
import type { RecruitWriteChildrenProps } from '@/types'

const RWDueDateInput = ({ errors, register }: RecruitWriteChildrenProps) => {
  const editingRecruit = useStudyHubStore((state) => state.editingRecruit)

  if (!register) {
    return
  }

  return (
    <Labeled isRequired isInDanger={Boolean(errors.due_date)}>
      <Labeled.Header>공고 마감 기한</Labeled.Header>
      <Labeled.Input
        {...register('due_date')}
        type="date"
        defaultValue={editingRecruit?.close_at.slice(0, 10)}
      />
      <Labeled.Footer>{errors?.due_date?.message}</Labeled.Footer>
    </Labeled>
  )
}

export default RWDueDateInput
