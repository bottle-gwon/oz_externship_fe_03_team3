import type { ReactNode } from 'react'
import Modal from '../Modal'
import { Hstack, Vstack } from '../../layout'

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
  return <Hstack className="mt-oz-xxl">{children}</Hstack>
}

interface ConfirmationModalProps {
  isOn: boolean
  onClose: () => void
  children: ReactNode
  modalZIndex?: number
}

const ConfirmationModal = ({
  isOn,
  onClose,
  children,
  modalZIndex,
}: ConfirmationModalProps) => {
  return (
    <Modal width="xs" modalZIndex={modalZIndex} isOn={isOn} onClose={onClose}>
      <Vstack className="p-oz-xxl items-center gap-0">{children}</Vstack>
    </Modal>
  )
}

ConfirmationModal.Title = ConfirmationModalTitle
ConfirmationModal.Content = ConfirmationModalContent
ConfirmationModal.ButtonSection = ConfirmationModalButtonSection

export default ConfirmationModal
