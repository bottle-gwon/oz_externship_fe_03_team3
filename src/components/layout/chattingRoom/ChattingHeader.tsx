import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import useStudyHubStore from '@/store/store'
import { X } from 'lucide-react'
import type { ReactNode } from 'react'

interface ChattingHeader {
  children: ReactNode
}

const ChattingHeader = ({ children }: ChattingHeader) => {
  const { closeChatUI } = useStudyHubStore()

  return (
    <Hstack
      gap="none"
      className="h-[73px] items-center justify-between rounded-t-lg border-b border-gray-200 bg-gray-50 p-4"
    >
      <Vstack gap="none">{children}</Vstack>
      <X
        size={18}
        onClick={closeChatUI}
        className="cursor-pointer text-gray-400"
      />
    </Hstack>
  )
}

export default ChattingHeader
