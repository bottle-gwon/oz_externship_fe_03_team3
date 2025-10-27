import useStudyHubStore from '@/store/store'
import FloatingButton from '../layout/floatingButton/FloatingButton'
import { MessageCircle, X } from 'lucide-react'

const ChatFloatingButton = () => {
  const badgeTest = 12 // 안 읽은 메시지
  const chatState = useStudyHubStore((state) => state.chatState)
  const openChatList = useStudyHubStore((state) => state.openChatList)
  const closeChatUI = useStudyHubStore((state) => state.closeChatUI)

  const onClickChat = () => {
    if (chatState.status === 'off') {
      openChatList()
    } else {
      closeChatUI()
    }
  }

  return (
    <FloatingButton theme="primary" badge={badgeTest} onClick={onClickChat}>
      {chatState.status === 'off' ? (
        <MessageCircle size={24} />
      ) : (
        <X size={24} />
      )}
    </FloatingButton>
  )
}

export default ChatFloatingButton
