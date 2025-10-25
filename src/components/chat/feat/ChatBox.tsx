import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import type { MessageList } from '@/types/_chatInterfaces'

interface ChatBoxInterface {
  chat: MessageList
}

const ChatBox = ({ chat }: ChatBoxInterface) => {
  return (
    <RoundBox padding="sm" className="min-h-9">
      {chat.content}
    </RoundBox>
  )
}

export default ChatBox
