import { GridContainer, Vstack } from '@/components/commonInGeneral/layout'
import Modal from '@/components/commonInGeneral/modal/Modal'
import Skeleton from '@/components/commonInGeneral/skeleton/Skeleton'

interface ManageModalSkeletonProps {
  isOn: boolean
  onClose: React.Dispatch<React.SetStateAction<boolean>>
}

const ManageModalSkeleton = ({ isOn, onClose }: ManageModalSkeletonProps) => {
  const sArray = Array.from({ length: 4 }, (_, i) => i + 1)
  const handleClose = () => {
    onClose(false)
  }
  return (
    <Modal isOn={isOn} onClose={handleClose} width="md">
      <Modal.Header>
        <Vstack gap="xs">
          <h2 className="text-lg font-semibold">지원현황관리</h2>
          <Skeleton heightInPixel={20} widthInPixel={357} radius="sm" />
        </Vstack>
      </Modal.Header>

      <Modal.Body className={`min-h-[492px] overflow-auto`}>
        <GridContainer>
          {sArray.map((_, i) => (
            <Skeleton key={i} heightInPixel={204} className="w-full" />
          ))}
        </GridContainer>
      </Modal.Body>
    </Modal>
  )
}

export default ManageModalSkeleton
