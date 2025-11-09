import Button from '@/components/commonInGeneral/button/Button'
import ConfirmationModal from '@/components/commonInGeneral/modal/confirmationModal/ConfirmationModal'
import checkHavingKorean from '@/utils/koreanCheck'

interface ErrorModalInterface {
  isOn: boolean
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  detail: string
}

const ErrorModal = ({ isOn, setIsOn, title, detail }: ErrorModalInterface) => {
  const errorTitle = checkHavingKorean(title)
    ? title
    : `정의 되지 않은 에러 / ${title}`
  const errorDetail = checkHavingKorean(title)
    ? detail
    : `정의 되지 않은 에러 / ${detail}`

  return (
    <ConfirmationModal
      isOn={isOn}
      onClose={() => {
        setIsOn(false)
      }}
    >
      <ConfirmationModal.Title>
        <h4>{errorTitle}</h4>
      </ConfirmationModal.Title>

      <ConfirmationModal.Content>
        <p>{errorDetail}</p>
      </ConfirmationModal.Content>

      <ConfirmationModal.ButtonSection>
        <Button onClick={() => setIsOn(false)}>확인</Button>
      </ConfirmationModal.ButtonSection>
    </ConfirmationModal>
  )
}

export default ErrorModal
