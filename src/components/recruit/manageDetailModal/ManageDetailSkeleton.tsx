import { Vstack } from '@/components/commonInGeneral/layout'
import Skeleton from '@/components/commonInGeneral/skeleton/Skeleton'
import Modal from '@/components/commonInGeneral/modal/Modal'

interface ManageDetailSkeletonProps {
  isOn: boolean
  onClose: () => void
}

const ManageDetailSkeleton = ({ isOn, onClose }: ManageDetailSkeletonProps) => {
  return (
    <Modal isOn={isOn} onClose={onClose} width="sm">
      <Modal.Header>
        <h2 className="text-lg font-semibold">지원자 상세 정보</h2>
      </Modal.Header>
      <Modal.Body>
        <Vstack gap="xl">
          <Skeleton heightInPixel={128} />
          <Skeleton heightInPixel={80} />

          {Array.from({ length: 5 }).map((_, idx) => (
            <Vstack gap="sm" key={idx}>
              <Skeleton heightInPixel={20} widthInPixel={70} />
              <Skeleton heightInPixel={80} />
            </Vstack>
          ))}
        </Vstack>
      </Modal.Body>
    </Modal>
  )
}

export default ManageDetailSkeleton
