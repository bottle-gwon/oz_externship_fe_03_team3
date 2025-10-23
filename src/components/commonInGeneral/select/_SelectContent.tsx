import type { ReactNode } from 'react'
import { Vstack } from '../layout'
import RoundBox from '../roundBox/RoundBox'
import useSelectContext from './_useSelectContext'

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
      className="absolute z-10 w-full"
    >
      <Vstack gap="none">{children}</Vstack>
    </RoundBox>
  )
}

export default SelectContent
