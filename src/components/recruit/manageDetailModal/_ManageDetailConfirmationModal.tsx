import Button from '@/components/commonInGeneral/button/Button'
import ConfirmationModal from '@/components/commonInGeneral/modal/confirmationModal/ConfirmationModal'
import useManageDetailConfirmation from '@/hooks/manageDetailModal/useManageDetailConfirmation'

interface ManageDetailConfirmationModalProps {
  nickname: string
}

const ManageDetailConfirmationModal = ({
  nickname,
}: ManageDetailConfirmationModalProps) => {
  const { currentConfig, handleClose } = useManageDetailConfirmation(nickname)

  if (!currentConfig) {
    return null
  }

  return (
    <ConfirmationModal isOn={!!currentConfig} onClose={handleClose}>
      <ConfirmationModal.Title>{currentConfig.title}</ConfirmationModal.Title>
      <ConfirmationModal.ButtonSection>
        {currentConfig.buttons.map((button, index) => (
          <Button
            key={index}
            variant="contained"
            color={button.color}
            onClick={button.onClick}
          >
            {button.text}
          </Button>
        ))}
      </ConfirmationModal.ButtonSection>
    </ConfirmationModal>
  )
}

export default ManageDetailConfirmationModal
