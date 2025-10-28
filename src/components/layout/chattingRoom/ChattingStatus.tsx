import { Hstack } from '@/components/commonInGeneral/layout'
import type { ReactNode } from 'react'

interface ChattingStatus {
  children: ReactNode
  isPending: boolean
}

// 채팅 접속 상태 -> 아직 어떻게 전달 받을지 확정 나지 않아 props로 받음
const ChattingStatus = ({ children, isPending }: ChattingStatus) => {
  const overflow = isPending ? 'overflow-hidden' : 'overflow-x-scroll'

  return (
    <Hstack
      gap="sm"
      className={`${overflow} min-h-[41px] w-full items-center border-b border-gray-200 bg-gray-50 p-2`}
    >
      {children}
    </Hstack>
  )
}

export default ChattingStatus
