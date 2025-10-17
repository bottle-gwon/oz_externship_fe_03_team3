import {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { Hstack, Vstack } from '../layout'
import RoundBox from '../roundBox/RoundBox'
import { ChevronDown } from 'lucide-react'

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

const SelectItem = ({
  children,
}: {
  value?: string | number | boolean
  children: string
}) => {
  const { setIsOpened, setSelectedItem } = useSelectContext()
  const handleClick = () => {
    setIsOpened(false)
    setSelectedItem(children)
  }

  return (
    <RoundBox isBordered={false} onClick={handleClick}>
      <Hstack>{children}</Hstack>
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
Select.Item = SelectItem

const SelectDemo = () => {
  return (
    <Select>
      <Select.Trigger>나를 눌러요</Select.Trigger>
      <Select.Content>
        <Select.Item>바나나</Select.Item>
        <Select.Item>사과</Select.Item>
        <Select.Item>당근</Select.Item>
        <Select.Item>디디</Select.Item>
        <Select.Item>즈너</Select.Item>
        <Select.Item>츠</Select.Item>
      </Select.Content>
    </Select>
  )
}

export default SelectDemo
