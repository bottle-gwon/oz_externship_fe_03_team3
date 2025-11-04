import Button from '@/components/commonInGeneral/button/Button'
import ConfirmationModal from '@/components/commonInGeneral/modal/confirmationModal/ConfirmationModal'

interface TagSelectErrorModalInterface {
  isOn: boolean
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  detail: string
}

const TagSelectErrorModal = ({
  isOn,
  setIsOn,
  title,
  detail,
}: TagSelectErrorModalInterface) => {
  return (
    <ConfirmationModal
      isOn={isOn}
      onClose={() => {
        setIsOn(false)
      }}
    >
      <ConfirmationModal.Title>
        <h4>{title || '알 수 없는 에러'}</h4>
      </ConfirmationModal.Title>

      <ConfirmationModal.Content>
        <p>{detail || '알 수 없는 에러'}</p>
      </ConfirmationModal.Content>
      <ConfirmationModal.ButtonSection>
        <Button onClick={() => setIsOn(false)}>확인</Button>
      </ConfirmationModal.ButtonSection>
    </ConfirmationModal>
  )
}

export default TagSelectErrorModal
