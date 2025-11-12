import Button from '@/components/commonInGeneral/button/Button'
import ConfirmationModal from '@/components/commonInGeneral/modal/confirmationModal/ConfirmationModal'
import useManageDetailConfirmation from '@/hooks/manageDetailModal/useManageDetailConfirmation'

interface ManageDetailConfirmationModalProps {
  nickname: string
  applicantId: number
}

const ManageDetailConfirmationModal = ({
  nickname,
  applicantId,
}: ManageDetailConfirmationModalProps) => {
  const { isPending, currentConfig, handleClose } = useManageDetailConfirmation(
    { nickname, applicantId }
  )

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
            status={isPending ? 'pending' : 'enabled'}
          >
            {button.text}
          </Button>
        ))}
      </ConfirmationModal.ButtonSection>
    </ConfirmationModal>
  )
}

export default ManageDetailConfirmationModal
