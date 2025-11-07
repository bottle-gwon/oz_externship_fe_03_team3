import Button from '@/components/commonInGeneral/button/Button'
import useStudyHubStore from '@/store/store'
import { Share2 } from 'lucide-react'

const RDShareButton = ({ isWide }: { isWide?: boolean }) => {
  const setModalKey = useStudyHubStore((state) => state.setModalKey)

  const handleClick = () => {
    setModalKey('clipboard')
  }
  return (
    <Button
      variant="outlined"
      size="lg"
      shape={isWide ? 'rectangle' : 'square'}
      onClick={handleClick}
    >
      <Share2 size={isWide ? 16 : undefined} />
      {isWide && '공유하기'}
    </Button>
  )
}

export default RDShareButton
