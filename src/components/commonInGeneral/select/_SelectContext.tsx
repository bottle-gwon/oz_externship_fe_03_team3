import { createContext, type JSX } from 'react'

interface SelectContextProps {
  onOptionSelect: (option: string) => void
  isOpened: boolean
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>
  selectedOption: string | null
  setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>
  selectedIcon: JSX.Element | null
  setSelectedIcon: React.Dispatch<React.SetStateAction<JSX.Element | null>>
  triggerRef: React.RefObject<HTMLDivElement | null>
}

const SelectContext = createContext<SelectContextProps | null>(null)

export default SelectContext
