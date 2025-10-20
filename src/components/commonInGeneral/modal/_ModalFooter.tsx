import type { DivProps } from '@/types'
import { Vstack } from '../layout'

const ModalFooter = ({ children, ...rest }: DivProps) => {
  const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation()
  }
  return (
    <Vstack {...rest} padding="xl" gap="none" onClick={handleClick}>
      {children}
    </Vstack>
  )
}

export default ModalFooter
