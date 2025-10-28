import type { ReactNode } from 'react'
import Modal from '../Modal'

interface ConfirmationModalProps {
  isOn: boolean
  onClose: () => void
  children: ReactNode
}

const ConfirmationModal = ({
  isOn,
  onClose,
  children,
}: ConfirmationModalProps) => {
  return (
    <Modal width="xs" isOn={isOn} onClose={onClose}>
      {children}
    </Modal>
  )
}

export default ConfirmationModal
