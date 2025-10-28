import Button from '@/components/commonInGeneral/button/Button'
import { Hstack } from '@/components/commonInGeneral/layout'
import { Check, X } from 'lucide-react'

const ManageDetailModalButtons = () => {
  return (
    <Hstack className="justify-end">
      <Button variant="contained" color="danger" size="lg">
        <Hstack gap="sm" className="items-center">
          <X size={16} />
          <p>거절</p>
        </Hstack>
      </Button>
      <Button variant="contained" color="success" size="lg">
        <Hstack gap="sm" className="items-center">
          <Check size={16} />
          <p>승인</p>
        </Hstack>
      </Button>
    </Hstack>
  )
}

export default ManageDetailModalButtons
