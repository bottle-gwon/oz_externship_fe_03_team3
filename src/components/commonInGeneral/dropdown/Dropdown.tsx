import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { Hstack } from '../layout'
import DropdownContext from './_DropdownContext'
import useDropdownContext from './_useDropdownContext'
import RoundBox from '../roundBox/RoundBox'

const DropdonwTrigger = ({ children }: { children: ReactNode }) => {
  const { setIsOn, triggerRef } = useDropdownContext()
  const handleClick = () => {
    setIsOn((prev) => !prev)
  }
  return (
    <div ref={triggerRef} onClick={handleClick}>
      {children}
    </div>
  )
}

const DropdownContent = ({ children }: { children: ReactNode }) => {
  const { triggerRef, isOn, setIsOn } = useDropdownContext()
  const contentRef = useRef<HTMLDivElement>(null)

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (!contentRef.current) {
        return
      }

      if (
        contentRef.current.contains(event.target as Node) ||
        triggerRef.current?.contains(event.target as Node)
      ) {
        return
      }

      setIsOn(false)
    },
    [setIsOn, triggerRef]
  )

  useEffect(() => {
    if (!isOn) {
      return
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [isOn, handleClick])

  if (!isOn) {
    return null
  }

  if (!triggerRef.current) {
    return null
  }

  const style = {
    top: triggerRef.current.offsetHeight + 4,
    right: 0,
  }

  return (
    <div ref={contentRef} style={style} className="absolute z-10">
      {children}
    </div>
  )
}

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
  return (
    <DropdownContent>
      <RoundBox padding="none" className="w-[192px]">
        {children}
      </RoundBox>
    </DropdownContent>
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
