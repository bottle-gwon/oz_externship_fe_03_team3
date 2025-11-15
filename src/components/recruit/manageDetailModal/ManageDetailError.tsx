import UnknwonErrorContent from '@/components/commonInGeneral/error/UnknownErrorContent'
import Modal from '@/components/commonInGeneral/modal/Modal'

interface ManageDetailErrorProps {
  isOn: boolean
  onClose: () => void
}

const ManageDetailError = ({ isOn, onClose }: ManageDetailErrorProps) => {
  return (
    <Modal isOn={isOn} onClose={onClose} width="sm">
      <Modal.Header>
        <h2 className="text-lg font-semibold">지원자 상세 정보</h2>
      </Modal.Header>
      <Modal.Body className="h-[972px]">
        <UnknwonErrorContent />
      </Modal.Body>
    </Modal>
  )
}

export default ManageDetailError
