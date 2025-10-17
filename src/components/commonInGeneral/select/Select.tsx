import {
  createContext,
  useContext,
  useRef,
  useState,
  type JSX,
  type ReactNode,
} from 'react'
import { Hstack, Vstack } from '../layout'
import RoundBox from '../roundBox/RoundBox'
import { ArrowBigDown, ChevronDown } from 'lucide-react'

interface SelectContextProps {
  isOpened: boolean
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>
  selectedItem: string | null
  setSelectedItem: React.Dispatch<React.SetStateAction<string | null>>
  triggerRef: React.RefObject<HTMLDivElement | null>
}

const SelectContext = createContext<SelectContextProps | null>(null)

const useSelectContext = () => {
  const context = useContext(SelectContext)
  if (!context) {
    throw Error('---- 콘텍스트가 없어요!')
  }
  return context
}

const SelectTrigger = ({ children }: { children: string }) => {
  const { setIsOpened, selectedItem, triggerRef } = useSelectContext()
  const handleClick = () => {
    setIsOpened((prev) => !prev)
  }

  const label = selectedItem ?? children
  return (
    <RoundBox ref={triggerRef} onClick={handleClick}>
      <Hstack>
        <Hstack className="grow">{label}</Hstack>
        <ChevronDown />
      </Hstack>
    </RoundBox>
  )
}

const SelectOption = ({
  icon,
  children,
}: {
  icon?: JSX.Element
  children: string
}) => {
  const { setIsOpened, setSelectedItem } = useSelectContext()
  const handleClick = () => {
    setIsOpened(false)
    setSelectedItem(children)
  }

  // TODO: 나중에 p 태그는 Text로 교체
  return (
    <RoundBox isBordered={false} onClick={handleClick}>
      <Hstack>
        {icon && icon}
        <p>{children}</p>
      </Hstack>
    </RoundBox>
  )
}

const SelectContent = ({ children }: { children: ReactNode }) => {
  const { isOpened, triggerRef } = useSelectContext()

  if (!isOpened) {
    return null
  }

  if (!triggerRef.current) {
    return null
  }

  return (
    <RoundBox
      style={{ top: triggerRef.current.offsetHeight + 4 }}
      padding="xs"
      className="absolute w-full"
    >
      <Vstack gap="none">{children}</Vstack>
    </RoundBox>
  )
}

const Select = ({ children }: { children: ReactNode }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  return (
    <SelectContext
      value={{
        isOpened,
        setIsOpened,
        selectedItem,
        setSelectedItem,
        triggerRef,
      }}
    >
      <Vstack gap="xs" className="relative gap-0">
        {children}
      </Vstack>
    </SelectContext>
  )
}

Select.Trigger = SelectTrigger
Select.Content = SelectContent
Select.Option = SelectOption

export default Select
