import { Vstack } from '@/components/commonInGeneral/layout'
import ChatBox from './ChatBox'
import ChattingRoomSkeleton from '../skeleton/ChattingRoomSkeleton'
import Skeleton from '@/components/commonInGeneral/skeleton/Skeleton'
import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import useStudyHubStore from '@/store/store'
import {
  elementScroll,
  useVirtualizer,
  type VirtualizerOptions,
} from '@tanstack/react-virtual'
import useDebounce from '@/hooks/useDebounce'

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

  const [debounceValue] = useDebounce(true, 500)

  const previndex = useRef(0)
  const scrollingRef = useRef<number>(0)

  // 스크롤 애니메이션 함수
  const easeInOutQuint = (t: number) => {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
  }
  const scrollToFn: VirtualizerOptions<HTMLDivElement, Element>['scrollToFn'] =
    useCallback((offset, canSmooth, instance) => {
      const duration = 1000
      const start = containerRef.current?.scrollTop || 0
      const startTime = (scrollingRef.current = Date.now())

      const run = () => {
        if (scrollingRef.current !== startTime) return
        const now = Date.now()
        const elapsed = now - startTime
        const progress = easeInOutQuint(Math.min(elapsed / duration, 1))
        const interpolated = start + (offset - start) * progress

        if (elapsed < duration) {
          elementScroll(interpolated, canSmooth, instance)
          requestAnimationFrame(run)
        } else {
          elementScroll(interpolated, canSmooth, instance)
        }
      }

      requestAnimationFrame(run)
    }, [])
  // console.log(chatMessageArray)
  // 윈도잉(가상화 리스트)
  const rowVirtualizer = useVirtualizer({
    count: chatMessageArray.length, // 렌더링할 아이템 개수
    getScrollElement: () => containerRef.current, //스크롤 요소
    estimateSize: (_) => 120, // 각 메시지 예상 높이
    overscan: 30, // 화면 바깥에 미리 렌더링 할 메시지 수
    enabled: !isPending,
    scrollToFn,
    // scrollPaddingEnd: 100,
  })

  // 스크롤이 하단에 있는지 판단( 하단 === 채팅중)
  const handleScroll = () => {
    const el = rowVirtualizer.scrollElement
    if (!el || isFetchingNextPage || isPending) {
      return
    }
    // const scrollBottom = rowVirtualizer.getTotalSize() - ((rowVirtualizer.scrollOffset|| 0)+ (rowVirtualizer.scrollElement?.clientHeight ||0))
    // setBottom(el.scrollHeight - (el.scrollTop + el.clientHeight))
    const height = el.scrollHeight - (el.scrollTop + el.clientHeight)

    if (height > 50) {
      setChatScrollBottom(false)
    } else {
      setChatScrollBottom(true)
    }
  }

  useEffect(() => {
    setChatInit(debounceValue)
  }, [debounceValue, setChatInit])

  // 처음 들어오면 아래로 이동하는 useEffect
  // Todo 추후에 안읽은 메시지로 이동 하도록 변경
  useLayoutEffect(() => {
    if (!containerRef) {
      return
    }
    if (chatMessageArray.length === 0) {
      return
    }
    // debugger
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
      // 무한 스크롤 할때
      if (previndex.current !== chatMessageArray.length) {
        rowVirtualizer.scrollToIndex(
          chatMessageArray.length - previndex.current - 1,
          {
            align: 'end',
          }
        )
        previndex.current = chatMessageArray.length
      }
      // 탐색 중에 채팅이 올때
      // else{
      //   rowVirtualizer.scrollToIndex(
      //     chatMessageArray.length - previndex.current - 1,
      //   )
      // }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetchingNextPage, rowVirtualizer])

  // 채팅
  useEffect(() => {
    if (!chatInit && chatMessageArray.length > previndex.current) {
      // 바닥에 있을때 === 채팅 할때
      if (chatScrollBottom) {
        rowVirtualizer.scrollToIndex(chatMessageArray.length - 1, {
          align: 'center',
          behavior: 'smooth',
        })
        // previndex.current = chatMessageArray.length
      }

      previndex.current = chatMessageArray.length
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatScrollBottom, chatMessageArray])

  return (
    <Vstack
      padding="md"
      gap="none"
      className={`mx-[-24px] h-full ${overflow} !my-0 !py-0`}
      ref={containerRef}
      onScroll={handleScroll}
      style={{
        contain: 'strict',
      }}
    >
      <div ref={LoadingRef} className="m-0 h-0 p-0"></div>
      {isPending && <ChattingRoomSkeleton />}
      {isFetchingNextPage && (
        <Skeleton widthInPixel={270} heightInPixel={100} className="shrink-0" />
      )}
      <div
        className={`relative w-full`}
        style={{
          height: rowVirtualizer.getTotalSize(),
        }}
      >
        {/* 가상화 리스트 적용 */}
        <Vstack
          gap="none"
          padding="none"
          className="absolute top-0 left-0 w-full"
          style={{
            transform: `translateY(${rowVirtualizer.getVirtualItems()[0]?.start ?? 0}px)`,
          }}
        >
          {!isPending &&
            rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const message = chatMessageArray[virtualRow.index]
              return (
                <div
                  key={virtualRow.key}
                  data-index={virtualRow.index}
                  ref={rowVirtualizer.measureElement}
                >
                  <ChatBox chat={message} />
                </div>
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
