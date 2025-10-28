import Button from '@/components/commonInGeneral/button/Button'
import { Hstack } from '@/components/commonInGeneral/layout'
import { Check, X } from 'lucide-react'

interface ManageDetailButtonsProps {
  onClose: () => void
}

const ManageDetailModalButtons = ({ onClose }: ManageDetailButtonsProps) => {
  // 승인, 거절 누르면 모달이 꺼지게 임시 지정
  return (
    <Hstack className="justify-end">
      <Button variant="contained" color="danger" size="lg" onClick={onClose}>
        <Hstack gap="sm" className="items-center">
          <X size={16} />
          <p>거절</p>
        </Hstack>
      </Button>
      <Button variant="contained" color="success" size="lg" onClick={onClose}>
        <Hstack gap="sm" className="items-center">
          <Check size={16} />
          <p>승인</p>
        </Hstack>
      </Button>
    </Hstack>
  )
}

export default ManageDetailModalButtons
