import { Hstack } from '@/components/commonInGeneral/layout'
import SendIcon from '@/assets/send.svg'
import useStudyHubStore from '@/store/store'
import { useEffect, useRef } from 'react'

interface ChatInput {
  isPending: boolean
}

const chatInputStatus = (isPending: boolean) => {
  if (isPending) {
    return {
      input: 'bg-gray-50',
      button: 'bg-gray-50',
      message: '로딩중...',
    }
  } else {
    return {
      input: '',
      button: 'bg-gray-300 hover:bg-gray-400 active:bg-gray-500',
      message: '메시지를 입력하세요...',
    }
  }
}

// 테스트 임시용
const URL = import.meta.env.VITE_API_BASE_URL

const ChatInput = ({ isPending }: ChatInput) => {
  const LoadingStatus = chatInputStatus(isPending)
  const addChatMessageArray = useStudyHubStore(
    (state) => state.addChatMessageArray
  )
  const setChatConnected = useStudyHubStore((state) => state.setChatConnected)
  const chatConnected = useStudyHubStore((state) => state.chatConnected)

  const ws = useRef<WebSocket>(null)

  const handleOpen = () => {
    console.log('연결 성공')
    // ws.current?.send('connected by react app')
  }

  const handleMessage = (event: MessageEvent) => {
    console.log('메시지 수신:', event.data)
    if (event.data !== '채팅 연결완') {
      addChatMessageArray(JSON.parse(event.data))
    }
  }

  const handleError = (error: Event) => {
    console.error('WebSocket 에러:', error)
    setChatConnected(false)
  }

  const handleClose = () => {
    console.log('WebSocket 연결 종료')
    setChatConnected(false)
  }

  useEffect(() => {
    // 추후 URL 안에 방 id 들어가도록 변경
    ws.current = new WebSocket(URL)

    ws.current.addEventListener('open', handleOpen)
    ws.current.addEventListener('message', handleMessage)
    ws.current.addEventListener('error', handleError)
    ws.current.addEventListener('close', handleClose)

    return () => {
      if (ws.current) {
        ws.current.removeEventListener('open', handleOpen)
        ws.current.removeEventListener('message', handleMessage)
        ws.current.removeEventListener('error', handleError)
        ws.current.removeEventListener('close', handleClose)

        if (ws.current.readyState === WebSocket.OPEN) {
          ws.current.close()
        }
      }
    }
  }, [handleOpen, handleMessage, handleError, handleClose])

  return (
    <Hstack
      gap="xs"
      padding="md"
      className="mx-[-24px] min-h-[63px] items-center border-t border-gray-200"
    >
      <input
        placeholder={LoadingStatus.message}
        className={`${LoadingStatus.input} h-[38px] w-full rounded-3xl border border-gray-300 px-[13px] py-[9px]`}
        disabled={isPending} // 로딩시에는 입력 금지
      />
      <button
        className={`${LoadingStatus.button} flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full p-2`}
        disabled={isPending}
      >
        <img src={SendIcon} />
      </button>
    </Hstack>
  )
}

export default ChatInput
