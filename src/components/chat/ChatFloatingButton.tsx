import useStudyHubStore from '@/store/store'
import FloatingButton from '../layout/floatingButton/FloatingButton'
import { MessageCircle, X } from 'lucide-react'

const ChatIcon = (isOff: boolean) => {
  if (isOff) {
    return <MessageCircle size={24} />
  } else {
    return <X size={24} />
  }
}

const ChatFloatingButton = () => {
  const chatState = useStudyHubStore((state) => state.chatState)
  const openChatList = useStudyHubStore((state) => state.openChatList)
  const closeChatUI = useStudyHubStore((state) => state.closeChatUI)
  const accessToken = useStudyHubStore((state) => state.accessToken)
  const unreadCounter = useStudyHubStore((state) => state.unReadCounter) //안읽은 메시지

  const isOff = chatState.status === 'off'

  const onClickChat = () => {
    if (chatState.status === 'off') {
      openChatList()
    } else {
      closeChatUI()
    }
  }

  // 채팅방이 꺼져 있고 안읽은 메시지가 1이상일때만출력
  const badgeNumber = isOff && unreadCounter >= 1 ? unreadCounter : null

  if (!accessToken) {
    return null
  }

  return (
    <FloatingButton theme="primary" badge={badgeNumber} onClick={onClickChat}>
      {ChatIcon(isOff)}
    </FloatingButton>
  )
}

export default ChatFloatingButton
