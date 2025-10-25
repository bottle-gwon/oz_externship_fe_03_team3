import { Vstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import type { MessageList } from '@/types/_chatInterfaces'

interface ChatBoxInterface {
  chat: MessageList
}

// 사용자 임시 아이디 값
const USER_ID = 8

const ChatBox = ({ chat }: ChatBoxInterface) => {
  const date = new Date(chat.created_at)
  const hour = date.getUTCHours()
  const munite = date.getUTCMinutes()

  return (
    <Vstack gap="xs" className="w-full">
      {chat.sender_id !== USER_ID ? (
        <span className="text-xs text-gray-600">{chat.sender_nickname}</span>
      ) : null}
      <RoundBox
        padding="sm"
        radius="lg"
        isBordered={false}
        className="min-h-9 max-w-[220px] rounded-bl-sm !bg-gray-100 px-3"
      >
        <span className="text-sm text-gray-900">{chat.content}</span>
      </RoundBox>
      <span className="text-xs text-gray-500">{`${hour}:${munite}`}</span>
    </Vstack>
  )
}

export default ChatBox
