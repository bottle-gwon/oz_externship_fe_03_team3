import { useEffect, useRef, useState, type JSX } from 'react'
import { Vstack } from '../layout'
import type { DivProps } from '@/types'
import SelectContext from './_SelectContext'
import SelectTrigger from './_SelectTrigger'
import SelectContent from './_SelectContent'
import SelectOption from './_SelectOption'

interface WithSelectProps {
  onOptionSelect: (option: string | number) => void
  defaultChildren?: string
  isInDanger?: boolean
}

const Select = ({
  onOptionSelect,
  defaultChildren,
  isInDanger,
  ...props
}: DivProps & WithSelectProps) => {
  const { className, children, ...rest } = props

  const [isOpened, setIsOpened] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState<
    string | number | undefined
  >(defaultChildren)
  const [selectedChildren, setSelectedChildren] = useState<string | null>(null)
  const [selectedIcon, setSelectedIcon] = useState<JSX.Element | null>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!defaultChildren) {
      return
    }
    setSelectedChildren(defaultChildren)
  }, [defaultChildren])

  return (
    <SelectContext
      value={{
        onOptionSelect,
        isOpened,
        setIsOpened,
        selectedValue,
        setSelectedValue,
        selectedChildren,
        setSelectedChildren,
        selectedIcon,
        setSelectedIcon,
        triggerRef,
        isInDanger,
      }}
    >
      <Vstack {...rest} gap="xs" className={`${className} relative gap-0`}>
        {children}
      </Vstack>
    </SelectContext>
  )
}

Select.Trigger = SelectTrigger
Select.Content = SelectContent
Select.Option = SelectOption

export default Select
