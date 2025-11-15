import useStudyHubStore from '@/store/store'
import ChatList from './ChatList'
import ChattingRoom from './ChattingRoom'
import { useUnreadChatCount } from '@/hooks/chat/useChat'
import { useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'

// 레이아웃에서 출력용
const ChatWidget = () => {
  const chatState = useStudyHubStore((state) => state.chatState)
  const accessToken = useStudyHubStore((state) => state.accessToken)
  const setUnReadCounter = useStudyHubStore((state) => state.setUnReadCounter)
  const setChatMessageArray = useStudyHubStore(
    (state) => state.setChatMessageArray
  )

  const queryClient = useQueryClient()

  const data = useUnreadChatCount()

  useEffect(() => {
    if (!accessToken) {
      return
    }
    setUnReadCounter(data || 0)
  }, [data, setUnReadCounter, accessToken])

  useEffect(() => {
    if (chatState.status === 'chatList') {
      queryClient.invalidateQueries({
        queryKey: ['/chat'],
      })
      // queryClient.invalidateQueries({
      //   queryKey: ['message'],
      // })
      // setChatMessageArray([])
    }
  }, [chatState, queryClient, setChatMessageArray])

  if (chatState.status === 'off') {
    return
  }

  if (chatState.status === 'chatList' && accessToken) {
    return <ChatList />
  }

  if (chatState.status === 'chatRoom' && accessToken) {
    return <ChattingRoom />
  }
}

export default ChatWidget
