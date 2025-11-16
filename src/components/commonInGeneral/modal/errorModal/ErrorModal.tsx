import Button from '@/components/commonInGeneral/button/Button'
import ConfirmationModal from '@/components/commonInGeneral/modal/confirmationModal/ConfirmationModal'
import checkHavingKorean from '@/utils/koreanCheck'

interface ErrorModalInterface {
  isOn: boolean
  setIsOn?: React.Dispatch<React.SetStateAction<boolean>>
  onClose?: () => void
  title: string
  detail: string
}

const ErrorModal = ({
  isOn,
  setIsOn,
  onClose,
  title,
  detail,
}: ErrorModalInterface) => {
  const errorTitle = checkHavingKorean(title)
    ? title
    : `정의 되지 않은 에러 / ${title}`
  const errorDetail = checkHavingKorean(title)
    ? detail
    : `정의 되지 않은 에러 / ${detail}`

  const handleClose = () => {
    if (setIsOn) {
      setIsOn(false)
      return
    }
    if (onClose) {
      onClose()
      return
    }
  }

  return (
    <ConfirmationModal isOn={isOn} onClose={handleClose}>
      <ConfirmationModal.Title>
        <h4>{errorTitle}</h4>
      </ConfirmationModal.Title>

      <ConfirmationModal.Content>
        <p>{errorDetail}</p>
      </ConfirmationModal.Content>

      <ConfirmationModal.ButtonSection>
        <Button shape="wideRectangle" onClick={handleClose}>
          확인
        </Button>
      </ConfirmationModal.ButtonSection>
    </ConfirmationModal>
  )
}

export default ErrorModal
