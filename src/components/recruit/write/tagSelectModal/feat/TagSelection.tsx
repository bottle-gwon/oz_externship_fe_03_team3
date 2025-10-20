import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import TagSelected from './TagSelected'

const TagSelection = () => {
  return (
    <Vstack
      gap="sm"
      className="h-[89px] w-[672px] items-start justify-start px-6"
    >
      <span className="h-[20px] text-sm">{`선택된 태그 (0/0)`}</span>
      <Hstack>
        <TagSelected />
      </Hstack>
    </Vstack>
  )
}

export default TagSelection
