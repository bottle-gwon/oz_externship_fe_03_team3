import { Vstack } from '@/components/commonInGeneral/layout'
import type { MessageList } from '@/types/_chatInterfaces'
import ChatBox from './ChatBox'

interface ChatArray {
  messages: MessageList[]
}

const ChatDisplay = ({ messages }: ChatArray) => {
  return (
    <Vstack className="mx-[-24px] h-[195px] overflow-y-scroll px-3">
      {messages.map((el) => (
        <ChatBox key={el.id + el.created_at} chat={el} />
      ))}
    </Vstack>
  )
}

export default ChatDisplay
