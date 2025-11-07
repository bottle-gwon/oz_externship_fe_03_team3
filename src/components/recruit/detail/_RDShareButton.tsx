import Button from '@/components/commonInGeneral/button/Button'
import useStudyHubStore from '@/store/store'
import { Share2 } from 'lucide-react'
import { useLocation } from 'react-router'

const writeToClipboard = async (text: string) => {
  const setModalKey = useStudyHubStore.getState().setModalKey
  try {
    // NOTE: 실패 모달을 보려면 아래 주석을 해제해주세요
    // throw new Error("테스트 에러입니다")
    // ---- 여기까지
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
