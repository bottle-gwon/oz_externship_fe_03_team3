import FullScreen from '@/components/commonInGeneral/layout/_FullScreen'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import { widthMap } from '@/lib/tailwindClassNameMap'
import type { DivProps, SmToLg } from '@/types'
import ModalContext from './_ModalContext'
import ModalBody from './_ModalBody'
import ModalFooter from './_ModalFooter'
import ModalHeader from './_ModdalHeader'

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
