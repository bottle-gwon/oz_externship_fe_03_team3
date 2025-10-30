import { Vstack } from '@/components/commonInGeneral/layout'
import type { MessageList } from '@/types/_chatInterfaces'
import ChatBox from './ChatBox'
import ChattingRoomSkeleton from '../skeleton/ChattingRoomSkeleton'
import Skeleton from '@/components/commonInGeneral/skeleton/Skeleton'
import { useEffect, useRef, useState } from 'react'

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
  // const [scrollHeight, setScrollHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null)
  const overflow = isPending ? 'overflow-hidden' : 'overflow-y-scroll'

  useEffect(() => {
    if (!containerRef) {
      return
    }
    if (containerRef.current) {
      // const scrollTop = containerRef.current.scrollHeight - scrollHeight;

      // 추후에 안읽은 메시지로 이동 하도록 변경
      containerRef.current.scrollTop = 20
      // setScrollHeight(containerRef.current.scrollHeight)
    }
  }, [])

  return (
    <Vstack
      padding="md"
      className={`mx-[-24px] h-full ${overflow}`}
      ref={containerRef}
    >
      {/* 테스트를 위해서 위로 올려 뒀습니다. */}
      <div ref={LoadingRef}></div>
      {isFetchingNextPage && (
        <Skeleton widthInPixel={270} heightInPixel={100} className="shrink-0" />
      )}

      {isPending && <ChattingRoomSkeleton />}
      {messages.map((el) => (
        <ChatBox key={el.id + el.created_at} chat={el} />
      ))}
    </Vstack>
  )
}

export default ChatDisplay
