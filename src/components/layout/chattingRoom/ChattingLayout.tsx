import { Vstack } from '@/components/commonInGeneral/layout'
import type { ReactNode } from 'react'
import ChattingHeader from './ChattingHeader'
import ModalBody from '@/components/commonInGeneral/modal/_ModalBody'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import ChattingStatus from './ChattingStatus'

interface Chatting {
  roomType?: string // 룸 종류
  title?: ReactNode //
  children: ReactNode
}

const ChattingLayout = ({ children }: Chatting) => {
  return (
    <RoundBox
      padding="none"
      className="fixed right-6 bottom-24 z-2 min-h-[384px] w-[320px] border border-gray-200 shadow-[0_25px_50px_-12px_rgb(0_0_0_/_0.25)]"
    >
      <Vstack gap="none" className="h-full">
        {children}
      </Vstack>
    </RoundBox>
  )
}

ChattingLayout.Header = ChattingHeader
// ChattingLayout.Body = ChattingBody
ChattingLayout.UserStatus = ChattingStatus
ChattingLayout.Body = ModalBody //모달 바디 재활용

export default ChattingLayout
