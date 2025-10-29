import { Hstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import TagSelected from '@/components/recruit/write/tagSelectModal/feat/TagSelected'

interface RWTagSelectContainedProps {
  selectedTagArray: string[]
  setSelectedTagArray: React.Dispatch<React.SetStateAction<string[]>>
}

const RWTagSelectContained = ({
  selectedTagArray,
  setSelectedTagArray,
}: RWTagSelectContainedProps) => {
  const handleDelteTag = (tagName: string) => {
    const filteredTagArray = selectedTagArray.filter((tag) => tag !== tagName)
    setSelectedTagArray(filteredTagArray)
  }

  return (
    <RoundBox color="mono-dim" padding="lg">
      <Hstack className="wrap gap-oz-sm">
        {selectedTagArray.map((tag) => (
          <TagSelected key={tag} tag={tag} onDeleteTag={handleDelteTag} />
        ))}
      </Hstack>
    </RoundBox>
  )
}

export default RWTagSelectContained
