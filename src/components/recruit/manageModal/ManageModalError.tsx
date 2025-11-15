import UnknwonErrorContent from '@/components/commonInGeneral/error/UnknownErrorContent'
import { Vstack } from '@/components/commonInGeneral/layout'
import Modal from '@/components/commonInGeneral/modal/Modal'

interface ManageDetailErrorProps {
  isOn: boolean
  onClose: React.Dispatch<React.SetStateAction<boolean>>
}

const ManageModalError = ({ isOn, onClose }: ManageDetailErrorProps) => {
  const handleClose = () => {
    onClose(false)
  }
  return (
    <Modal isOn={isOn} onClose={handleClose} width="md">
      <Modal.Header>
        <Vstack gap="xs">
          <h2 className="text-lg font-semibold">지원현황관리</h2>
        </Vstack>
      </Modal.Header>
      <Modal.Body className="h-[492px]">
        <UnknwonErrorContent />
      </Modal.Body>
    </Modal>
  )
}

export default ManageModalError
