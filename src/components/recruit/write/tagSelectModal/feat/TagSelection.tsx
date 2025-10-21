import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import TagSelected from './TagSelected'
import Container from '@/components/commonInGeneral/layout/_Container'

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
      className="-mx-6 h-[89px] w-[672px] items-start justify-center border-b border-gray-200 px-6"
    >
      <span className="h-[20px] text-sm">{`선택된 태그 (${tagArray.length}/5)`}</span>
      <Container>
        <Hstack>
          {tagArray.map((el, i) => (
            <TagSelected key={el + i} tag={el} onDeleteTag={onDeleteTag} />
          ))}
        </Hstack>
      </Container>
    </Vstack>
  )
}

export default TagSelection
