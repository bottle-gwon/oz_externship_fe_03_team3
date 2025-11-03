import Button from '@/components/commonInGeneral/button/Button'
import { Vstack } from '@/components/commonInGeneral/layout'
import ConfirmationModal from '@/components/commonInGeneral/modal/confirmationModal/ConfirmationModal'
import useStudyHubStore from '@/store/store'
import type { Color } from '@/types'

interface ManageDetailConfirmationModalProps {
  nickname: string
  onClose: () => void
  isOn: boolean
}

interface ButtonConfig {
  text: string
  color: Color
  onClick: () => void
}

interface ConfirmationConfig {
  title: string
  buttons: ButtonConfig[]
}

const ManageDetailConfirmationModal = ({
  nickname,
  isOn,
  onClose,
}: ManageDetailConfirmationModalProps) => {
  const modalKeyArray = useStudyHubStore((state) => state.modalKeyArray)
  const setModalKeyArray = useStudyHubStore((state) => state.setModalKeyArray)

  // 승인 버튼 클릭
  const handleApproveClick = () => {
    setModalKeyArray(['manage', 'manageDetail', 'resultApprove'])
  }

  // 거절 버튼 클릭
  const handleRejectClick = () => {
    setModalKeyArray(['manage', 'manageDetail', 'resultReject'])
  }

  // 승인 확정
  const handleConfirmApprove = async () => {
    // 승인 API 호출
    setModalKeyArray(['manage'])
  }

  // 거절 확정
  const handleConfirmReject = async () => {
    // 거절 API 호출
    setModalKeyArray(['manage'])
  }

  const handleClose = () => {
    onClose()
  }

  const confirmationConfig: Record<string, ConfirmationConfig> = {
    confirmApprove: {
      title: `${nickname}님을 승인하시겠습니까?`,
      buttons: [
        {
          text: '취소',
          color: 'mono',
          onClick: handleClose,
        },
        {
          text: '승인',
          color: 'success',
          onClick: handleApproveClick,
        },
      ],
    },
    confirmReject: {
      title: `${nickname}님을 거절하시겠습니까?`,
      buttons: [
        {
          text: '취소',
          color: 'mono',
          onClick: handleClose,
        },
        {
          text: '거절',
          color: 'danger',
          onClick: handleRejectClick,
        },
      ],
    },
    resultApprove: {
      title: '승인이 완료되었습니다',
      buttons: [
        {
          text: '확인',
          color: 'mono',
          onClick: handleConfirmApprove,
        },
      ],
    },
    resultReject: {
      title: '거절이 완료되었습니다',
      buttons: [
        {
          text: '확인',
          color: 'mono',
          onClick: handleConfirmReject,
        },
      ],
    },
  }

  const currentModalKey = modalKeyArray.find((key) =>
    [
      'confirmApprove',
      'confirmReject',
      'resultApprove',
      'resultReject',
    ].includes(key)
  )

  const currentConfig = currentModalKey
    ? confirmationConfig[currentModalKey]
    : null

  if (!currentConfig) {
    return null
  }

  const handleModalContentClick = (e: React.MouseEvent) => {
    // e.stopPropagation()
  }

  return (
    <ConfirmationModal isOn={isOn} onClose={onClose}>
      <Vstack gap="none" onClick={handleModalContentClick}>
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
      </Vstack>
    </ConfirmationModal>
  )
}

export default ManageDetailConfirmationModal
