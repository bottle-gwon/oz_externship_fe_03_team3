import Labeled from '@/components/commonInGeneral/inputFamily/labeled/Labeled'
import useStudyHubStore from '@/store/store'
import type { RecruitWriteChildrenProps } from '@/types'

const RWTitleInput = ({ errors, register }: RecruitWriteChildrenProps) => {
  const editingRecruit = useStudyHubStore((state) => state.editingRecruit)

  if (!register) {
    return null
  }

  return (
    <Labeled isRequired isInDanger={Boolean(errors.title)}>
      <Labeled.Header>공고 제목</Labeled.Header>
      <Labeled.Input
        {...register('title')}
        defaultValue={editingRecruit?.title}
      />
      <Labeled.Footer>{errors?.title?.message}</Labeled.Footer>
    </Labeled>
  )
}

export default RWTitleInput
