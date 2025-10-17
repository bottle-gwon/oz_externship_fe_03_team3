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
import { ChevronDown } from 'lucide-react'
import type { DivProps } from '@/types'

interface SelectContextProps {
  isOpened: boolean
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>
  selectedOption: string | null
  setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>
  selectedIcon: JSX.Element | null
  setSelectedIcon: React.Dispatch<React.SetStateAction<JSX.Element | null>>
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
  const { setIsOpened, selectedOption, selectedIcon, triggerRef } =
    useSelectContext()
  const handleClick = () => {
    setIsOpened((prev) => !prev)
  }

  const label = selectedOption ?? children

  return (
    <RoundBox ref={triggerRef} onClick={handleClick}>
      <Hstack>
        {selectedIcon ?? selectedIcon}
        <p
          className={`grow ${selectedOption ? 'text-gray-900' : 'text-gray-500'}`}
        >
          {label}
        </p>
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
  const { setIsOpened, setSelectedOption, setSelectedIcon } = useSelectContext()
  const handleClick = () => {
    setSelectedIcon(icon ?? null)

    setIsOpened(false)
    setSelectedOption(children)
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

const Select = ({ className, children, ...props }: DivProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [selectedIcon, setSelectedIcon] = useState<JSX.Element | null>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  return (
    <SelectContext
      value={{
        isOpened,
        setIsOpened,
        selectedOption,
        setSelectedOption,
        selectedIcon,
        setSelectedIcon,
        triggerRef,
      }}
    >
      <Vstack {...props} gap="xs" className={`${className} relative gap-0`}>
        {children}
      </Vstack>
    </SelectContext>
  )
}

Select.Trigger = SelectTrigger
Select.Content = SelectContent
Select.Option = SelectOption

export default Select
