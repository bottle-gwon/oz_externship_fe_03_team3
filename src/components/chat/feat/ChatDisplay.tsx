import { Vstack } from '@/components/commonInGeneral/layout'
import ChatBox from './ChatBox'
import ChattingRoomSkeleton from '../skeleton/ChattingRoomSkeleton'
import Skeleton from '@/components/commonInGeneral/skeleton/Skeleton'
import { useEffect, useRef } from 'react'
import useStudyHubStore from '@/store/store'
import { useVirtualizer } from '@tanstack/react-virtual'

interface ChatArray {
  isPending: boolean
  isFetchingNextPage: boolean
  LoadingRef: React.RefObject<HTMLDivElement | null>
}

const ChatDisplay = ({
  isPending,
  isFetchingNextPage,
  LoadingRef,
}: ChatArray) => {
  // const [scrollHeight, setScrollHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null)
  const overflow = isPending ? 'overflow-hidden' : 'overflow-y-scroll'
  const chatMessageArray = useStudyHubStore((state) => state.chatMessageArray)

  // 윈도잉(가상화 리스트)
  const rowVirtualizer = useVirtualizer({
    count: chatMessageArray.length, // 렌더링할 아이템 개수
    getScrollElement: () => containerRef.current, //스크롤 요소
    estimateSize: (_) => 80, // 각 메시지 예상 높이 여기서는 최저 높이로 설정 했습니다.
    overscan: 3, // 화면 바깥에 미리 렌더링 할 메시지 수
  })

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
  }, [containerRef])

  return (
    <Vstack
      padding="md"
      className={`mx-[-24px] h-full ${overflow}`}
      ref={containerRef}
    >
      <div className={`relative w-full h-[${rowVirtualizer.getTotalSize()}]`}>
        {/* 가상화 리스트 적용 */}
        <Vstack
          className="absolute w-full"
          style={{
            transform: `translateY(${rowVirtualizer.getVirtualItems()[0]?.start ?? 0}px)`,
          }}
        >
          {isPending && <ChattingRoomSkeleton />}
          {isFetchingNextPage && (
            <Skeleton
              widthInPixel={270}
              heightInPixel={100}
              className="shrink-0"
            />
          )}

          <div ref={LoadingRef}></div>
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const message = chatMessageArray[virtualRow.index]
            return (
              <ChatBox
                key={virtualRow.key}
                chat={message}
                measure={rowVirtualizer.measureElement}
              />
            )
          })}
        </Vstack>
      </div>
      {/* {chatMessageArray.map((el) => (
        <ChatBox key={el.id + el.created_at} chat={el} />
      ))} */}
    </Vstack>
  )
}

export default ChatDisplay
