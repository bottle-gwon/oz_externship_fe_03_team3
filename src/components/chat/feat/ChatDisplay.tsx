import { Vstack } from '@/components/commonInGeneral/layout'
import type { MessageList } from '@/types/_chatInterfaces'
import ChatBox from './ChatBox'
import ChattingRoomSkeleton from '../skeleton/ChattingRoomSkeleton'
import Skeleton from '@/components/commonInGeneral/skeleton/Skeleton'

interface ChatArray {
  messages: MessageList[]
  isPending: boolean
  isFetchingNextPage: boolean
  LoadingRef: React.RefObject<HTMLDivElement | null>
}

const ChatDisplay = ({
  messages,
  isPending,
  isFetchingNextPage,
  LoadingRef,
}: ChatArray) => {
  const overflow = isPending ? 'overflow-hidden' : 'overflow-y-scroll'

  return (
    <Vstack padding="md" className={`mx-[-24px] h-full ${overflow}`}>
      {/* 테스트를 위해서 위로 올려 뒀습니다. */}
      {isPending && <ChattingRoomSkeleton />}
      {messages.map((el) => (
        <ChatBox key={el.id + el.created_at} chat={el} />
      ))}
      <div ref={LoadingRef}></div>
      {isFetchingNextPage && (
        <Skeleton widthInPixel={270} heightInPixel={100} className="shrink-0" />
      )}
    </Vstack>
  )
}

export default ChatDisplay
