import { Vstack } from '@/components/commonInGeneral/layout'
import type { MessageList } from '@/types/_chatInterfaces'
import ChatBox from './ChatBox'

interface ChatArray {
  messages: MessageList[]
}

const ChatDisplay = ({ messages }: ChatArray) => {
  return (
    <Vstack padding="md" className="mx-[-24px] h-full overflow-y-scroll">
      {messages.map((el) => (
        <ChatBox key={el.id + el.created_at} chat={el} />
      ))}
    </Vstack>
  )
}

export default ChatDisplay
