import Button from '@/components/commonInGeneral/button/Button'
import ConfirmationModal from '@/components/commonInGeneral/modal/confirmationModal/ConfirmationModal'
import useStudyHubStore from '@/store/store'

const RDConfirmClipboardModalMany = () => {
  const modalKey = useStudyHubStore((state) => state.modalKey)
  const setModalKey = useStudyHubStore((state) => state.setModalKey)

  return (
    <>
      <ConfirmationModal
        isOn={modalKey === 'clipboardSuccess'}
        onClose={() => setModalKey(null)}
      >
        <ConfirmationModal.Title>
          클립보드에 URL이 복사되었습니다
        </ConfirmationModal.Title>
        <ConfirmationModal.ButtonSection>
          <Button onClick={() => setModalKey(null)}>확인</Button>
        </ConfirmationModal.ButtonSection>
      </ConfirmationModal>

      <ConfirmationModal
        isOn={modalKey === 'clipboardFail'}
        onClose={() => setModalKey(null)}
      >
        <ConfirmationModal.Title>
          알 수 없는 오류가 발생했습니다
        </ConfirmationModal.Title>
        <ConfirmationModal.Content>
          잠시 후 다시 시도해주세요
        </ConfirmationModal.Content>
        <ConfirmationModal.ButtonSection>
          <Button onClick={() => setModalKey(null)}>확인</Button>
        </ConfirmationModal.ButtonSection>
      </ConfirmationModal>
    </>
  )
}

export default RDConfirmClipboardModalMany
