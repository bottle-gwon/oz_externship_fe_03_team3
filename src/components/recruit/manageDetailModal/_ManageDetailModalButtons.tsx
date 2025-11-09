import Button from '@/components/commonInGeneral/button/Button'
import { Hstack } from '@/components/commonInGeneral/layout'
import { Check, X } from 'lucide-react'

interface ManageDetailButtonsProps {
  onApprove: () => void
  onReject: () => void
}
const ManageDetailModalButtons = ({
  onApprove,
  onReject,
}: ManageDetailButtonsProps) => {
  const handleRejectClick = () => {
    onReject()
  }

  const handleApproveClick = () => {
    onApprove()
  }

  return (
    <Hstack className="justify-end">
      <Button
        variant="contained"
        color="danger"
        size="lg"
        onClick={handleRejectClick}
      >
        <Hstack gap="sm" className="items-center">
          <X size={16} />
          <p>거절</p>
        </Hstack>
      </Button>
      <Button
        variant="contained"
        color="success"
        size="lg"
        onClick={handleApproveClick}
      >
        <Hstack gap="sm" className="items-center">
          <Check size={16} />
          <p>승인</p>
        </Hstack>
      </Button>
    </Hstack>
  )
}

export default ManageDetailModalButtons
