import Button from '@/components/commonInGeneral/button/Button'
import ConfirmationModal from '@/components/commonInGeneral/modal/confirmationModal/ConfirmationModal'
import useManageDetailConfirmation from '@/hooks/manageDetailModal/useManageDetailConfirmation'
import type { Applicant } from '@/types'

interface ManageDetailConfirmationModalProps {
  nickname: string
  applicant: Applicant
  recruitmentId: string
}

const ManageDetailConfirmationModal = ({
  nickname,
  applicant,
  recruitmentId,
}: ManageDetailConfirmationModalProps) => {
  const { isPending, currentConfig, handleClose } = useManageDetailConfirmation(
    { nickname, applicant, recruitmentId }
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
            shape="wideRectangle"
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
