import { createContext } from 'react'

interface DropdownContextProps {
  isOn: boolean
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>
  triggerRef: React.RefObject<HTMLDivElement | null>
}

const DropdownContext = createContext<DropdownContextProps | null>(null)

export default DropdownContext
