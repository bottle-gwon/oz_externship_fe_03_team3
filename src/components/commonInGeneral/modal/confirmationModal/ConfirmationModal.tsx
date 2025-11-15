import type { ReactNode } from 'react'
import Modal from '../Modal'
import { Vstack } from '../../layout'
import type { ButtonProps } from '@/types'
import Button, { type WithButtonProps } from '../../button/Button'

const ConfirmationModalTitle = ({ children }: { children: ReactNode }) => {
  return <div className="text-center text-lg font-semibold">{children}</div>
}
const ConfirmationModalContent = ({ children }: { children: ReactNode }) => {
  return <div className="mt-oz-lg inline-block w-fit text-left">{children}</div>
}

const ConfirmationModalButton = (props: ButtonProps & WithButtonProps) => {
  const { children, shape: _shape, ...rest } = props
  return (
    <Button {...rest} shape="wideRectangle">
      {children}
    </Button>
  )
}

const ConfirmationModalButtonSection = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <div className="mt-oz-xxl gap-oz-xs grid w-full auto-cols-fr grid-flow-col">
      {children}
    </div>
  )
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
      <Modal.Footer>
        <Vstack className="items-center gap-0">{children}</Vstack>
      </Modal.Footer>
    </Modal>
  )
}

ConfirmationModal.Title = ConfirmationModalTitle
ConfirmationModal.Content = ConfirmationModalContent
ConfirmationModal.ButtonSection = ConfirmationModalButtonSection
ConfirmationModal.Button = ConfirmationModalButton

export default ConfirmationModal
