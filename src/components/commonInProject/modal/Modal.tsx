import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import FullScreen from '@/components/commonInGeneral/layout/_FullScreen'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import { widthMap } from '@/lib/tailwindClassNameMap'
import type { DivProps, SmToLg } from '@/types'
import { X } from 'lucide-react'
import { createContext, useContext } from 'react'

interface ModalContextProps {
  onClose: () => void
}

const ModalContext = createContext<ModalContextProps | null>(null)

const useModalContext = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('---- 콘텍스트가 없습니다!')
  }

  return context
}

const ModalFooter = ({ children, ...rest }: DivProps) => {
  const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation()
  }
  return (
    <Vstack {...rest} padding="xl" gap="none" onClick={handleClick}>
      {children}
    </Vstack>
  )
}

const ModalBody = ({ className, children, ...rest }: DivProps) => {
  return (
    <ModalFooter {...rest} className={`${className} border-b border-gray-200`}>
      {children}
    </ModalFooter>
  )
}

const ModalHeader = ({ ...props }: DivProps) => {
  const { className, children, ...rest } = props
  const { onClose } = useModalContext()
  return (
    <ModalBody {...rest} className={`${className} grow`}>
      <Hstack className="items-center justify-between">
        {children}
        <X onClick={onClose} />
      </Hstack>
    </ModalBody>
  )
}

interface WithModalProps {
  isOn: boolean
  modalZIndex?: number
  width?: SmToLg

  onClose: () => void
}

const Modal = ({
  isOn,
  width = 'md',
  modalZIndex = 0,
  onClose,
  ...props
}: DivProps & WithModalProps) => {
  const { style, className, children, ...rest } = props

  const zIndex = 90 + modalZIndex

  const widthResult = widthMap[width]

  if (!isOn) {
    return null
  }

  return (
    <ModalContext.Provider value={{ onClose }}>
      <FullScreen
        {...rest}
        isCentered
        className={`${className} fixed`}
        onClick={onClose}
      >
        <FullScreen style={{ zIndex }} className="fixed bg-black opacity-50" />
        <RoundBox
          {...rest}
          style={{ ...style, zIndex: zIndex + 1 }}
          isBordered={false}
          padding="none"
          className={`${className} ${widthResult}`}
        >
          {children}
        </RoundBox>
      </FullScreen>
    </ModalContext.Provider>
  )
}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
