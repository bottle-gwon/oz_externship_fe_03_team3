import type { DivProps } from '@/types'
import ModalFooter from './_ModalFooter'

const ModalBody = ({ className, children, ...rest }: DivProps) => {
  return (
    <ModalFooter {...rest} className={`${className} border-b border-gray-200`}>
      {children}
    </ModalFooter>
  )
}

export default ModalBody
