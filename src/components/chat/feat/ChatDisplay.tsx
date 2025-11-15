import { Vstack } from '@/components/commonInGeneral/layout'
import ChatBox from './ChatBox'
import ChattingRoomSkeleton from '../skeleton/ChattingRoomSkeleton'
import Skeleton from '@/components/commonInGeneral/skeleton/Skeleton'
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
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

  const [bottom, setBottom] = useState(0)
  const [debounceValue] = useDebounce(bottom, 50)

  const previndex = useRef(0)
  const scrollingRef = useRef<number>(0)

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

  // 윈도잉(가상화 리스트)
  const rowVirtualizer = useVirtualizer({
    count: chatMessageArray.length, // 렌더링할 아이템 개수
    getScrollElement: () => containerRef.current, //스크롤 요소
    estimateSize: (_) => 120, // 각 메시지 예상 높이
    overscan: 10, // 화면 바깥에 미리 렌더링 할 메시지 수
    scrollToFn,
    initialOffset: Number.POSITIVE_INFINITY,
  })

  const handleScroll = () => {
    const el = rowVirtualizer.scrollElement
    if (!el || isFetchingNextPage || isPending) {
      return
    }
    // const scrollBottom = rowVirtualizer.getTotalSize() - ((rowVirtualizer.scrollOffset|| 0)+ (rowVirtualizer.scrollElement?.clientHeight ||0))
    setBottom(el.scrollHeight - (el.scrollTop + el.clientHeight))
  }
  const onDebounce = useCallback(
    (result: number) => {
      if (result > 50) {
        setChatScrollBottom(false)
      } else {
        setChatScrollBottom(true)
      }
    },
    [setChatScrollBottom]
  )

  useEffect(() => {
    onDebounce(debounceValue)
  }, [debounceValue, onDebounce])

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
    console.log(chatMessageArray.length, '길이')
    if (containerRef.current && chatInit && !isPending) {
      rowVirtualizer.scrollToIndex(chatMessageArray.length - 1, {
        align: 'end',
        behavior: 'auto',
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
          align: 'end',
          behavior: 'smooth',
        })
        // previndex.current = chatMessageArray.length
      }

      // previndex.current = chatMessageArray.length
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatScrollBottom, chatMessageArray])

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
