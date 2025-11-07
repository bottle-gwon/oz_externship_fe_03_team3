import Button from '@/components/commonInGeneral/button/Button'
import useStudyHubStore from '@/store/store'
import { Share2 } from 'lucide-react'
import { useLocation } from 'react-router'

const writeToClipboard = async (text: string) => {
  const setModalKey = useStudyHubStore.getState().setModalKey
  try {
    await navigator.clipboard.writeText(text)
    setModalKey('clipboardSuccess')
  } catch {
    setModalKey('clipboardFail')
  }
}

const RDShareButton = ({ isWide }: { isWide?: boolean }) => {
  const location = useLocation()

  const handleClick = () => {
    const url = `${import.meta.env.VITE_OUR_DOMAIN}${location.pathname}`
    writeToClipboard(url)
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
