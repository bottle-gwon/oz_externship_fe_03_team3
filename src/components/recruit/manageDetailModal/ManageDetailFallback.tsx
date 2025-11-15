import Modal from '@/components/commonInGeneral/modal/Modal'

interface ManageDetailFallbackProps {
  isOn: boolean
  onClose: () => void
}

const ManageDetailFallback = ({ isOn, onClose }: ManageDetailFallbackProps) => {
  return (
    <Modal isOn={isOn} onClose={onClose} width="sm">
      <Modal.Body>
        <p>불러올 지원자 정보가 없습니다.</p>
      </Modal.Body>
    </Modal>
  )
}

export default ManageDetailFallback
