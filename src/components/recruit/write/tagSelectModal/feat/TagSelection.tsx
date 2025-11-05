import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import TagSelected from './TagSelected'
import Container from '@/components/commonInGeneral/layout/_Container'
import useStudyHubStore from '@/store/store'

const TagSelection = () => {
  const currentTagArray = useStudyHubStore((state) => state.currentTagArray)
  const deleteCurrentTagArray = useStudyHubStore(
    (state) => state.deleteCurrentTagArray
  )
  if (!currentTagArray || !Array.isArray(currentTagArray)) {
    return
  }

  return (
    <Vstack
      gap="sm"
      className="-mx-6 h-[89px] w-[672px] items-start justify-center border-b border-gray-200 px-6"
    >
      <span className="h-[20px] text-sm">{`선택된 태그 (${currentTagArray.length}/5)`}</span>
      <Container>
        <Hstack>
          {currentTagArray.map((el, i) => (
            <TagSelected
              key={el + i}
              tag={el}
              onDeleteTag={deleteCurrentTagArray}
            />
          ))}
        </Hstack>
      </Container>
    </Vstack>
  )
}

export default TagSelection
