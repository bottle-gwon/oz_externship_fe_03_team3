import type { ReactNode } from 'react'
import Modal from '../Modal'

const ConfirmationModalTitle = ({ children }: { children: ReactNode }) => {
  return <div className="text-lg font-semibold">{children}</div>
}
const ConfirmationModalContent = ({ children }: { children: ReactNode }) => {
  return <div className="mt-oz-lg">{children}</div>
}

const ConfirmationModalButtonSection = ({
  children,
}: {
  children: ReactNode
}) => {
  return <div className="grid auto-cols-[50px]">{children}</div>
}

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

ConfirmationModal.Title = ConfirmationModalTitle
ConfirmationModal.Content = ConfirmationModalContent
ConfirmationModal.ButtonSection = ConfirmationModalButtonSection

export default ConfirmationModal
