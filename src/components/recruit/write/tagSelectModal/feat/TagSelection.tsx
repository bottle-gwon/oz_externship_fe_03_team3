import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import TagSelected from './TagSelected'

interface TagSelection {
  tagArray: string[]
  onDeleteTag: (tagName: string) => void
}

const TagSelection = ({ tagArray, onDeleteTag }: TagSelection) => {
  if (!tagArray || !Array.isArray(tagArray)) {
    return
  }

  return (
    <Vstack
      gap="sm"
      className="h-[89px] w-[672px] items-start justify-center border-b border-gray-200 px-6"
    >
      <span className="h-[20px] text-sm">{`선택된 태그 (${tagArray.length}/5)`}</span>
      <Hstack>
        {tagArray.map((el, i) => (
          <TagSelected key={el + i} tag={el} onDeleteTag={onDeleteTag} />
        ))}
      </Hstack>
    </Vstack>
  )
}

export default TagSelection
