import { Hstack } from '@/components/commonInGeneral/layout'
import type { ReactNode } from 'react'

interface IconBadgeInterface {
  isValid: boolean
  badgeValue: ReactNode
}

const IconBadge = ({ isValid, badgeValue }: IconBadgeInterface) => {
  if (!isValid) {
    return
  }

  return (
    <Hstack
      gap="none"
      padding="none"
      className="bg-danger-500 absolute top-[-8px] right-[-8px] h-6 min-w-6 items-center justify-center rounded-full p-2 text-xs"
    >
      <span className="font-semibold">{badgeValue}</span>
    </Hstack>
  )
}

export default IconBadge
