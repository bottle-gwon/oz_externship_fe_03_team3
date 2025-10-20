import { createContext } from 'react'

interface ModalContextProps {
  onClose: () => void
}

const ModalContext = createContext<ModalContextProps | null>(null)

export default ModalContext
