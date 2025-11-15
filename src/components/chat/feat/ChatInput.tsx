import { Hstack } from '@/components/commonInGeneral/layout'
import SendIcon from '@/assets/send.svg'
import useStudyHubStore from '@/store/store'
import { useEffect, useState } from 'react'
import useChatStore from '@/store/chat/chatStore'

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
// const URL = import.meta.env.VITE_SOCEKT_BASE_URL_FOR_DEV
const URL = import.meta.env.VITE_SOCEKT_BASE_URL

const ChatInput = ({ isPending }: ChatInput) => {
  const LoadingStatus = chatInputStatus(isPending)

  const chatState = useChatStore((state) => state.chatState)
  const chatConnect = useChatStore((state) => state.chatConnect)
  const chatDisConnect = useChatStore((state) => state.chatDisConnect)
  const sendMessage = useChatStore((state) => state.sendMessage)
  const accessToken = useStudyHubStore((state) => state.accessToken)

  const [inputValue, setInputValue] = useState<string>('')

  useEffect(() => {
    if (chatState.status === 'chatRoom') {
      // chatConnect(`${URL}/ws/study-groups/${chatState.id}/chat`) //테스트용
      chatConnect(`${URL}/${chatState.id}/?token=${accessToken}`) //실제 api 연결
    }

    return () => {
      chatDisConnect()
    }
  }, [chatConnect, chatDisConnect, chatState, accessToken])

  const handleMessageKeydown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue !== '' && !e.nativeEvent.isComposing) {
      sendMessage(inputValue)
      setInputValue('')
    }
  }
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const onClickSend = () => {
    if (inputValue !== '') {
      sendMessage(inputValue)
      setInputValue('')
    }
  }

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
        value={inputValue}
        onChange={onChangeInput}
        onKeyDown={handleMessageKeydown}
      />
      <button
        className={`${LoadingStatus.button} flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full p-2`}
        disabled={isPending}
        onClick={onClickSend}
      >
        <img src={SendIcon} />
      </button>
    </Hstack>
  )
}

export default ChatInput
