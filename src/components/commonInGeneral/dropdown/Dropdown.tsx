import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Hstack, Vstack } from '../layout'
import DropdownContext from './_DropdownContext'
import useDropdownContext from './_useDropdownContext'
import RoundBox from '../roundBox/RoundBox'

const DropdownMenuItem = ({
  children,
  value,
}: {
  children: ReactNode
  value: string
}) => {
  const { setIsOn, setSelectedMenuValue } = useDropdownContext()
  const handleClick = () => {
    setSelectedMenuValue(value)
    setIsOn(false)
  }

  return (
    <Hstack
      onClick={handleClick}
      className="py-oz-md px-oz-lg border-b border-gray-200 last:border-b-0 hover:bg-gray-50 active:bg-gray-100"
    >
      {children}
    </Hstack>
  )
}

const DropdownMenu = ({ children }: { children: ReactNode }) => {
  const { triggerRef, isOn } = useDropdownContext()
  if (!triggerRef.current) {
    return null
  }

  const style = {
    top: triggerRef.current.offsetHeight + 4,
    right: 0,
  }

  if (!isOn) {
    return null
  }

  return (
    <RoundBox padding="none" style={style} className="absolute w-[192]">
      {children}
    </RoundBox>
  )
}

const DropdownContent = ({ children }: { children: ReactNode }) => {
  const { triggerRef, isOn } = useDropdownContext()
  if (!triggerRef.current) {
    return null
  }

  const style = {
    top: triggerRef.current.offsetHeight + 4,
    right: 0,
  }

  if (!isOn) {
    return null
  }

  return (
    <div style={style} className="absolute">
      {children}
    </div>
  )
}

const DropdonwTrigger = ({ children }: { children: ReactNode }) => {
  const { setIsOn, triggerRef } = useDropdownContext()
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation()
    setIsOn((prev) => !prev)
  }
  return (
    <div ref={triggerRef} onClick={handleClick}>
      {children}
    </div>
  )
}

interface DropdownProps {
  children: ReactNode
  onChange: (menuValue: string) => void
}

const Dropdown = ({ children, onChange }: DropdownProps) => {
  const [isOn, setIsOn] = useState(false)
  const [selectedMenuValue, setSelectedMenuValue] = useState<string | null>(
    null
  )
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!selectedMenuValue) {
      return
    }

    onChange(selectedMenuValue)
    setSelectedMenuValue(null)
  }, [selectedMenuValue, onChange])

  return (
    <DropdownContext.Provider
      value={{
        isOn,
        setIsOn,
        triggerRef,
        selectedMenuValue,
        setSelectedMenuValue,
      }}
    >
      <div className="relative w-fit">{children}</div>
    </DropdownContext.Provider>
  )
}

Dropdown.Trigger = DropdonwTrigger
Dropdown.Content = DropdownContent

Dropdown.Menu = DropdownMenu
Dropdown.MenuItem = DropdownMenuItem

export default Dropdown
