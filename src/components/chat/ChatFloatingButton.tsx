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
  const badgeTest = 12 // 안 읽은 메시지
  const chatState = useStudyHubStore((state) => state.chatState)
  const openChatList = useStudyHubStore((state) => state.openChatList)
  const closeChatUI = useStudyHubStore((state) => state.closeChatUI)
  const accessToken = useStudyHubStore((state) => state.accessToken)

  const isOff = chatState.status === 'off'

  const onClickChat = () => {
    if (chatState.status === 'off') {
      openChatList()
    } else {
      closeChatUI()
    }
  }

  if (!accessToken) {
    return null
  }

  return (
    <FloatingButton theme="primary" badge={badgeTest} onClick={onClickChat}>
      {ChatIcon(isOff)}
    </FloatingButton>
  )
}

export default ChatFloatingButton
