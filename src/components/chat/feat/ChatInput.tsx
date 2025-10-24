import { Hstack } from '@/components/commonInGeneral/layout'
import SendIcon from '@/assets/send.svg'

const ChatInput = () => {
  return (
    <Hstack
      gap="xs"
      padding="md"
      className="mx-[-24px] items-center border-t border-gray-200"
    >
      <input
        placeholder="메시지를 입력하세요..."
        className="h-[38px] w-full rounded-3xl border border-gray-300 px-[13px] py-[9px]"
      />
      <button className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-gray-300 p-2 hover:bg-gray-400 active:bg-gray-500">
        <img src={SendIcon} />
      </button>
    </Hstack>
  )
}

export default ChatInput
