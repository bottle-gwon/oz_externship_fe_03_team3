import { Hstack } from '@/components/commonInGeneral/layout'
import SendIcon from '@/assets/send.svg'
import useStudyHubStore from '@/store/store'
import { useEffect } from 'react'

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

  const setChatConnected = useStudyHubStore((state) => state.setChatConnected)
  const chatState = useStudyHubStore((state) => state.chatState)
  const chatConnected = useStudyHubStore((state) => state.chatConnected)
  const chatConnect = useStudyHubStore((state) => state.chatConnect)
  const chatDisConnect = useStudyHubStore((state) => state.chatDisConnect)

  useEffect(() => {
    if (chatState.status === 'chatRoom')
      chatConnect(`${URL}/ws/study-groups/${chatState.id}/chat`)
    return () => {
      chatDisConnect()
    }
  }, [chatConnect, chatDisConnect, chatState])

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
