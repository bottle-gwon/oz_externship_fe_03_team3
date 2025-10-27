import type { DivProps } from '@/types'
import { X } from 'lucide-react'
import { Hstack } from '../layout'
import ModalBody from './_ModalBody'
import useModalContext from './_useModalContext'

const ModalHeader = ({ ...props }: DivProps) => {
  const { className, children, ...rest } = props
  const { onClose } = useModalContext()
  return (
    <ModalBody {...rest} className={`${className}`}>
      <Hstack className="items-center justify-between">
        {children}
        <X onClick={onClose} />
      </Hstack>
    </ModalBody>
  )
}

export default ModalHeader
