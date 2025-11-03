import { useRef, useState, type ReactNode } from 'react'
import { Vstack } from '../layout'
import DropdownContext from './_DropdownContext'
import useDropdownContext from './_useDropdownContext'
const DropdownMenuItem = () => {
  return <div></div>
}
const DropdownMenu = () => {
  return <Vstack></Vstack>
}

const DropdownContent = ({ children }: { children: ReactNode }) => {
  const { triggerRef, isOn } = useDropdownContext()
  if (!triggerRef.current) {
    return null
  }

  const style = {
    top: triggerRef.current.offsetHeight + 4,
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

const Dropdown = ({ children }: { children: ReactNode }) => {
  const [isOn, setIsOn] = useState(false)
  const triggerRef = useRef<HTMLDivElement>(null)

  return (
    <DropdownContext.Provider value={{ isOn, setIsOn, triggerRef }}>
      <div className="relative">{children}</div>
    </DropdownContext.Provider>
  )
}

Dropdown.Trigger = DropdonwTrigger
Dropdown.Content = DropdownContent

export default Dropdown
