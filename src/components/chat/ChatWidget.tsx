import useStudyHubStore from '@/store/store'
import ChatList from './ChatList'
import ChattingRoom from './ChattingRoom'

// 레이아웃에서 출력용
const ChatWidget = () => {
  const chatState = useStudyHubStore((state) => state.chatState)

  if (chatState.status === 'off') {
    return
  }

  if (chatState.status === 'chatList') {
    return <ChatList />
  }

  if (chatState.status === 'chatRoom') {
    return <ChattingRoom />
  }
}

export default ChatWidget
