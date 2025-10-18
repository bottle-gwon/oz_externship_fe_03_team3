import type { DivProps, SmToLg } from '@/types'
import FullScreen from '../layout/_FullScreen'
import RoundBox from '../roundBox/RoundBox'
import { widthMap } from '@/lib/tailwindClassNameMap'
import { Hstack, Vstack } from '../layout'
import { X } from 'lucide-react'

const ModalBody = ({ className, children, ...rest }: DivProps) => {
  return (
    <div {...rest} className={`${className} border-bottom border-gray-200`}>
      {children}
    </div>
  )
}

const ModalHeader = ({ ...props }: DivProps) => {
  const { className, children, ...rest } = props
  return (
    <Hstack gap="none" padding="xl">
      <ModalBody {...rest} className={`${className} grow`}>
        {children}
      </ModalBody>
      <X />
    </Hstack>
  )
}

const ModalFooter = ({ children, ...rest }: DivProps) => {
  return <div {...rest}>{children}</div>
}

interface WithModalProps {
  isOn: boolean
  modalZIndex?: number
  width?: SmToLg
  onBackgroundClick: React.MouseEventHandler<HTMLDivElement>
}

const Modal = ({
  isOn,
  width = 'md',
  modalZIndex = 0,
  onBackgroundClick,
  ...props
}: DivProps & WithModalProps) => {
  const { style, className, children, ...rest } = props

  const zIndex = 90 + modalZIndex

  const widthResult = widthMap[width]

  if (!isOn) {
    return null
  }

  return (
    <FullScreen
      {...rest}
      style={{ ...style, zIndex }}
      className={`${className} fixed flex items-center justify-center bg-black opacity-50`}
      onClick={onBackgroundClick}
    >
      <RoundBox
        {...rest}
        isBordered={false}
        className={`${className} ${widthResult}`}
      >
        {children}
      </RoundBox>
    </FullScreen>
  )
}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
