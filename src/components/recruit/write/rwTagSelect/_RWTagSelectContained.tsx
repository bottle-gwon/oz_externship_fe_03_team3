import { Hstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import TagSelected from '@/components/recruit/write/tagSelectModal/feat/TagSelected'
import useStudyHubStore from '@/store/store'

const RWTagSelectContained = () => {
  const selectedTagArray = useStudyHubStore((state) => state.selectedTagArray)
  const setSelectedTagArray = useStudyHubStore(
    (state) => state.setSelectedTagArray
  )

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
