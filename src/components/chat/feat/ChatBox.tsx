import { Vstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import type { MessageList } from '@/types/_chatInterfaces'

interface ChatBoxInterface {
  chat: MessageList
}
const chatBoxStyle = (isOwner: boolean) => {
  if (isOwner) {
    return {
      box: 'rounded-br-sm !bg-primary-500',
      text: 'text-white',
      align: 'items-end',
    }
  } else {
    return {
      box: 'rounded-bl-sm !bg-gray-100',
      text: 'text-gray-900',
      align: '',
    }
  }
}

// 사용자 임시 아이디 값
const USER_ID = 8

const ChatBox = ({ chat }: ChatBoxInterface) => {
  const date = new Date(chat.created_at)
  const hour = date.getUTCHours()
  const munite = date.getUTCMinutes()

  const isOwner = USER_ID === chat.sender_id
  const boxStyle = chatBoxStyle(isOwner)

  return (
    <Vstack gap="xs" className={`w-full ${boxStyle.align}`}>
      {chat.sender_id !== USER_ID ? (
        <span className="text-xs text-gray-600">{chat.sender_nickname}</span>
      ) : null}
      <RoundBox
        padding="sm"
        radius="lg"
        isBordered={false}
        className={`min-h-9 max-w-[220px] ${boxStyle.box} px-3`}
      >
        <span className={`text-sm ${boxStyle.text}`}>{chat.content}</span>
      </RoundBox>
      <span className="text-xs text-gray-500">{`${hour}:${munite}`}</span>
    </Vstack>
  )
}

export default ChatBox
