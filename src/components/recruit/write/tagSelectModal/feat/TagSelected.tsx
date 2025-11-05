import { Hstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import useStudyHubStore from '@/store/store'
import { X } from 'lucide-react'

interface TagSelection {
  tag: string
}

const TagSelected = ({ tag }: TagSelection) => {
  const deleteCurrentTagArray = useStudyHubStore(
    (state) => state.deleteCurrentTagArray
  )

  return (
    <RoundBox
      color="primary"
      padding="xs"
      radius="full"
      isBordered={false}
      className="bg-primary-100 h-[28px] px-3"
    >
      <Hstack gap="sm" className="h-full w-full items-center justify-center">
        <span>{tag}</span>
        <button
          onClick={() => deleteCurrentTagArray(tag)}
          className="cursor-pointer"
        >
          <X className="size-4" />
        </button>
      </Hstack>
    </RoundBox>
  )
}

export default TagSelected
