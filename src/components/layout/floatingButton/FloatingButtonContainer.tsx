import { Vstack } from '@/components/commonInGeneral/layout'
import type { ReactElement } from 'react'
import type { FloatingIconProps } from './FloatingButton'

interface FloatingContainer {
  //FloatingButton 타입만 전달 받음
  children: ReactElement<FloatingIconProps> | ReactElement<FloatingIconProps>[]
}

const FloatingButtonContainer = ({ children }: FloatingContainer) => {
  return (
    <Vstack
      gap="none"
      className="fixed right-6 bottom-6 items-center gap-[31px]"
    >
      {children}
    </Vstack>
  )
}

export default FloatingButtonContainer
