import { Vstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import type { ChatMessage } from '@/types/_chat'

interface ChatBoxInterface {
  chat: ChatMessage
  measure: (node: Element | null | undefined) => void
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
const SENDER_NICKNAME = '스터디장_김'

const ChatBox = ({ chat, measure }: ChatBoxInterface) => {
  const date = new Date(chat.created_at)
  const time = date.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
  const isOwner = SENDER_NICKNAME === chat?.sender.nickname
  const boxStyle = chatBoxStyle(isOwner)

  return (
    <Vstack gap="xs" className={`w-full ${boxStyle.align}`} ref={measure}>
      {!isOwner && (
        <span className="text-xs text-gray-600">{chat?.sender.nickname}</span>
      )}
      <RoundBox
        padding="sm"
        radius="lg"
        isBordered={false}
        className={`min-h-9 max-w-[220px] ${boxStyle.box} px-3 wrap-break-word`}
      >
        <span className={`text-sm ${boxStyle.text}`}>{chat.content}</span>
      </RoundBox>
      <span className="text-xs text-gray-500">{time}</span>
    </Vstack>
  )
}

export default ChatBox
