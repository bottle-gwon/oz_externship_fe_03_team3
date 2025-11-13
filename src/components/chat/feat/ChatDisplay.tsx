import { Vstack } from '@/components/commonInGeneral/layout'
import ChatBox from './ChatBox'
import ChattingRoomSkeleton from '../skeleton/ChattingRoomSkeleton'
import Skeleton from '@/components/commonInGeneral/skeleton/Skeleton'
import { useEffect, useLayoutEffect, useRef } from 'react'
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
  const chatScrollBottom = useStudyHubStore((state) => state.chatScrollBottom)
  const setChatScrollBottom = useStudyHubStore(
    (state) => state.setChatScrollBottom
  )
  const chatInit = useStudyHubStore((state) => state.chatInit) // 초기 스크롤 세팅할 플래그
  const setChatInit = useStudyHubStore((state) => state.setChatInit)

  const previndex = useRef(0)

  const handleScroll = () => {
    if (!containerRef.current) {
      return
    }
    const { scrollHeight, scrollTop, clientHeight } = containerRef.current
    const scrollBottom = scrollHeight - scrollTop - clientHeight

    if (scrollBottom > 10) {
      setChatScrollBottom(false)
      // setChatScrollBottom(true)
    } else {
      setChatScrollBottom(true)
    }
  }

  // 윈도잉(가상화 리스트)
  const rowVirtualizer = useVirtualizer({
    count: chatMessageArray.length, // 렌더링할 아이템 개수
    getScrollElement: () => containerRef.current, //스크롤 요소
    estimateSize: (_) => 120, // 각 메시지 예상 높이
    overscan: 10, // 화면 바깥에 미리 렌더링 할 메시지 수
  })

  // 처음 들어오면 아래로 이동하는 useEffect
  // Todo 추후에 안읽은 메시지로 이동 하도록 변경
  useLayoutEffect(() => {
    if (!containerRef) {
      return
    }
    if (containerRef.current && chatInit && !isPending) {
      rowVirtualizer.scrollToIndex(chatMessageArray.length - 1, {
        align: 'end',
      })
      setChatInit(false)
      previndex.current = 0
    }
  }, [
    rowVirtualizer,
    chatMessageArray.length,
    chatInit,
    isPending,
    setChatInit,
  ])

  // 메시지 추가 할때 이동
  useEffect(() => {
    if (
      !chatInit &&
      !isFetchingNextPage &&
      chatMessageArray.length > previndex.current
    ) {
      if (chatScrollBottom) {
        rowVirtualizer.scrollToIndex(chatMessageArray.length - 1, {
          align: 'end',
          behavior: 'smooth',
        })
      } else {
        rowVirtualizer.scrollToIndex(
          chatMessageArray.length - previndex.current - 1,
          {
            align: 'end',
          }
        )
      }

      previndex.current = chatMessageArray.length
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetchingNextPage, chatMessageArray.length, rowVirtualizer])

  return (
    <Vstack
      padding="md"
      className={`mx-[-24px] h-full ${overflow}`}
      ref={containerRef}
      onScroll={handleScroll}
    >
      <div
        className={`w-full] relative`}
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
        }}
      >
        {/* 가상화 리스트 적용 */}
        <Vstack
          className="absolute top-0 left-0 w-full"
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
