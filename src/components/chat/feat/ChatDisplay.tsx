import { Vstack } from '@/components/commonInGeneral/layout'
import type { MessageList } from '@/types/_chatInterfaces'
import ChatBox from './ChatBox'
import ChattingRoomSkeleton from '../skeleton/ChattingRoomSkeleton'

interface ChatArray {
  messages: MessageList[]
  isPending: boolean
}

const ChatDisplay = ({ messages, isPending }: ChatArray) => {
  return (
    <Vstack padding="md" className="mx-[-24px] h-full overflow-y-scroll">
      {/* 테스트를 위해서 위로 올려 뒀습니다. */}
      {isPending && <ChattingRoomSkeleton />}
      {messages.map((el) => (
        <ChatBox key={el.id + el.created_at} chat={el} />
      ))}
    </Vstack>
  )
}

export default ChatDisplay
