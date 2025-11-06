import { Hstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import useTagStore from '@/store/tag/tagStore'
import { X } from 'lucide-react'

interface TagSelection {
  tag: string
  onDeleteTag: (tag: string) => void
}

const TagSelected = ({ tag, onDeleteTag }: TagSelection) => {
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
        <button onClick={() => onDeleteTag(tag)} className="cursor-pointer">
          <X className="size-4" />
        </button>
      </Hstack>
    </RoundBox>
  )
}

export default TagSelected
