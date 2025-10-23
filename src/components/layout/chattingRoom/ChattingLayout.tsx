import { Vstack } from '@/components/commonInGeneral/layout'
import type { ReactNode } from 'react'
import ChattingHeader from './ChattingHeader'
import ModalBody from '@/components/commonInGeneral/modal/_ModalBody'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'

interface Chatting {
  roomType?: string // 룸 종류
  title?: ReactNode //
  children: ReactNode
}

const ChattingLayout = ({ children }: Chatting) => {
  return (
    <RoundBox
      padding="none"
      className="fixed right-6 bottom-24 h-[384px] w-[320px] border border-gray-200"
    >
      <Vstack gap="none">{children}</Vstack>
    </RoundBox>
  )
}

ChattingLayout.Header = ChattingHeader
// ChattingLayout.Body = ChattingBody
ChattingLayout.Body = ModalBody //모달 바디 재활용

export default ChattingLayout
