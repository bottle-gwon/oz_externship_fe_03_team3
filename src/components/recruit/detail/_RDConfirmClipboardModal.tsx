import Button from '@/components/commonInGeneral/button/Button'
import ConfirmationModal from '@/components/commonInGeneral/modal/confirmationModal/ConfirmationModal'
import useStudyHubStore from '@/store/store'

const RDConfirmClipboardModal = () => {
  const modalKey = useStudyHubStore((state) => state.modalKey)
  const setModalKey = useStudyHubStore((state) => state.setModalKey)

  return (
    <ConfirmationModal
      isOn={modalKey === 'clipboard'}
      onClose={() => setModalKey(null)}
    >
      <ConfirmationModal.Title>
        클립보드에 URL이 복사되었습니다
      </ConfirmationModal.Title>
      <ConfirmationModal.ButtonSection>
        <Button onClick={() => setModalKey(null)}>확인</Button>
      </ConfirmationModal.ButtonSection>
    </ConfirmationModal>
  )
}

export default RDConfirmClipboardModal
