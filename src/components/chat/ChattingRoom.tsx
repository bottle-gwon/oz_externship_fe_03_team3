import ChattingLayout from '@/components/layout/chattingRoom/ChattingLayout'
import { ArrowLeft } from 'lucide-react'
import { Hstack, Vstack } from '../commonInGeneral/layout'
import ChatUserStatus from './feat/ChatUserStatus'
import ChatInput from './feat/ChatInput'
import ChatDisplay from './feat/ChatDisplay'
import ChattingStatusSkeleton from './skeleton/ChattingStatusSkeleton'
import Skeleton from '../commonInGeneral/skeleton/Skeleton'
import useOneWayInfinityScroll from '@/hooks/useOneWayInfinityScroll'
import { useChatRoomMessage } from '@/hooks/chat/useChat'
import { useEffect, useRef } from 'react'
import type { ChatMessage } from '@/types/_chat'
import useChatStore from '@/store/chat/chatStore'

// 현재 온라인 유저 명수 표기
const OnlineUser = ({ isPending }: { isPending: boolean }) => {
  const chatOnline = useChatStore((state) => state.chatOnline)
  if (isPending && chatOnline !== null) {
    return <Skeleton widthInPixel={162} heightInPixel={14} />
  }

  return (
    <p className="text-xs text-gray-600">{`${chatOnline?.count}명 온라인`}</p>
  )
}

const ChattingRoom = () => {
  const chatState = useChatStore((state) => state.chatState)
  const openChatList = useChatStore((state) => state.openChatList)
  const setChatMessageArray = useChatStore((state) => state.setChatMessageArray)
  // const chatMessageArray = useChatStore((state) => state.chatMessageArray)
  const chatInit = useChatStore((state) => state.chatInit)

  // const page = useChatStore((state) => state.page)
  // const setPage = useChatStore((state) => state.setPage)
  const chatOnline = useChatStore((state) => state.chatOnline)

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isError,
    error,
  } = useChatRoomMessage()

  const LoadingRef = useRef<HTMLDivElement | null>(null)
  useOneWayInfinityScroll(LoadingRef, () => {
    // 스크롤이 타겟에 들어왔을때 (훅에서는 100% 보일때로 설정해둠)
    // 로딩중일때, 다음 페이지가 없으면 는 무한 스크롤 시작 안함

    if (hasNextPage && !isFetchingNextPage! && !chatInit) {
      fetchNextPage()
    }
  })

  // 데이터 저장, 정렬
  // const sortMessage = (message: ChatMessage[]) => {
  //   return message.sort(
  //     (a, b) => Date.parse(a.created_at) - Date.parse(b.created_at)
  //   )
  // }

  // 메시지 정렬, 메시지 배열 초기화
  useEffect(() => {
    if (data?.pages && !isFetchingNextPage) {
      // const messageArray =
      // data?.pages[data.pageParams.length - 1]?.data?.messages
      const messageArray = data?.pages[data.pageParams.length - 1]?.results

      if (!messageArray) {
        return
      }
      const allMessage = [...messageArray].flatMap((res) => res || []) || []
      setChatMessageArray(allMessage)

      // 초기화
      // if (page === 0) {
      //   if (data.pageParams.length === 0) {
      //     const allMessage = [...messageArray].flatMap((res) => res || []) || []
      //     const sortMessaged = sortMessage(allMessage)
      //     setChatMessageArray(sortMessaged)
      //   } else {
      //     const allMessage =
      //       data?.pages.flatMap((res) => res.results || []) || []
      //     const sortMessaged = sortMessage(allMessage)
      //     setChatMessageArray(sortMessaged)
      //   }
      // } else {
      //   const allMessage =
      //     [...chatMessageArray, ...messageArray].flatMap((res) => res || []) ||
      //     []
      //   const sortMessaged = sortMessage(allMessage)

      //   setChatMessageArray(sortMessaged)
      // }

      // setPage(data.pageParams.length)
    }
  }, [data, isFetchingNextPage, setChatMessageArray])

  if (chatState.status !== 'chatRoom') {
    return
  }

  if (isError) {
    return <>{error} 임시</>
  }

  return (
    <ChattingLayout>
      {/* 헤더 */}
      <ChattingLayout.Header>
        <Hstack gap="lg" className="items-center">
          <ArrowLeft
            size={16}
            className="cursor-pointer"
            onClick={openChatList}
          />
          <Vstack gap="none">
            <p className="text-base font-semibold text-gray-900">
              {chatState.title}
            </p>
            <OnlineUser isPending={isPending} />
          </Vstack>
        </Hstack>
      </ChattingLayout.Header>

      {/* 채팅방 사용자들 스테이터스 */}
      <ChattingLayout.UserStatus isPending={isPending && !chatOnline}>
        {isPending && <ChattingStatusSkeleton />}
        {chatOnline?.users.map((el) => (
          <ChatUserStatus key={el.id} status={el} />
        ))}
      </ChattingLayout.UserStatus>

      {/* 채팅창 */}
      <ChattingLayout.Body className="h-[280px] grow justify-between border-transparent !py-0">
        <ChatDisplay
          isPending={isPending}
          isFetchingNextPage={isFetchingNextPage}
          LoadingRef={LoadingRef}
        />
        <ChatInput isPending={isPending} />
      </ChattingLayout.Body>
    </ChattingLayout>
  )
}

export default ChattingRoom
