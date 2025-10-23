import { useEffect, useRef, type ReactNode } from 'react'
import { Vstack } from '../layout'
import RoundBox from '../roundBox/RoundBox'
import useSelectContext from './_useSelectContext'

const SelectContent = ({ children }: { children: ReactNode }) => {
  const { isOpened, setIsOpened, triggerRef } = useSelectContext()

  const contentRef = useRef<HTMLDivElement>(null)

  const handleClick = (event: MouseEvent) => {
    if (!contentRef.current) {
      return
    }
    if (
      contentRef.current.contains(event.target as Node) ||
      triggerRef.current?.contains(event.target as Node)
    ) {
      return
    }

    setIsOpened(false)
  }

  useEffect(() => {
    if (!isOpened) {
      return
    }

    window.addEventListener('mousedown', handleClick)
    return () => window.removeEventListener('mousedown', handleClick)
  }, [isOpened])

  if (!isOpened) {
    return null
  }

  if (!triggerRef.current) {
    return null
  }

  return (
    <RoundBox
      ref={contentRef}
      style={{ top: triggerRef.current.offsetHeight + 4 }}
      padding="xs"
      className="absolute z-10 w-full"
    >
      <Vstack gap="none">{children}</Vstack>
    </RoundBox>
  )
}

export default SelectContent
