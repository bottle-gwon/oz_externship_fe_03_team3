import ChattingLayout from '@/components/layout/chattingRoom/ChattingLayout'
import ChatListCard from './feat/ChatListCard'
import useStudyHubStore from '@/store/store'
import { useEffect } from 'react'
import ChatListSkeleton from './skeleton/ChatListSkeleton'
// import useOneWayInfinityScroll from '@/hooks/useOneWayInfinityScroll'
// import ChatListSkeletonCard from './skeleton/ChatListSkeletonCard'
import { useChatRoomList } from '@/hooks/chat/useChat'
import type { ChatRoomData } from '@/types/_chat'
// import NoMoreChatList from './feat/NoMoreChatList'

// 채팅 목록
const ChatList = () => {
  // const responseData = DUMMY_CHATLIST

  const unreadCounter = useStudyHubStore((state) => state.unReadCounter) //안읽은 메시지
  const chatRoomArray = useStudyHubStore((state) => state.chatRoomArray)
  const setChatRoomArray = useStudyHubStore((state) => state.setChatRoomArray)
  const setUnReadCounter = useStudyHubStore((state) => state.setUnReadCounter)

  const { data, isPending, isError, error } = useChatRoomList()

  // 페이지 네이션 쪽에 문제가 생겼다 해서 무한 스크롤 관련 로직은 일단 주석 처리 해놨습니다.
  // const LoadingRef = useRef<HTMLDivElement | null>(null)
  // useOneWayInfinityScroll(LoadingRef, () => {
  // 다음 페이지 없으면 로딩 안함
  // if (hasNextPage && !isFetchingNextPage) {
  //   fetchNextPage()
  // }
  // })

  useEffect(() => {
    // 더미 데이터 익스프레스
    // if (data?.data && Array.isArray(data?.data)) {
    //   setChatRoomArray(data.data)
    //   const count = data?.data?.reduce((acc: number, cur: ChatRoomData) => {
    //     return acc + cur.unread_message_count
    //   }, 0)
    //   setUnReadCounter(count)
    // }

    //실제 api
    if (data && Array.isArray(data)) {
      setChatRoomArray(data)
      const count = data.reduce((acc: number, cur: ChatRoomData) => {
        return acc + cur.unread_message_count
      }, 0)
      setUnReadCounter(count)
    } else {
      setChatRoomArray([])
    }
  }, [data, setChatRoomArray, setUnReadCounter])

  const overflow = isPending ? 'overflow-hidden' : 'overflow-y-scroll'

  return (
    <ChattingLayout>
      <ChattingLayout.Header>
        <h3 className="text-[16px] font-semibold">채팅방</h3>
        <span className="text-primary-600 text-xs">{`${unreadCounter}개의 읽지 않은 메시지`}</span>
      </ChattingLayout.Header>

      <ChattingLayout.Body
        className={`h-[309px] w-full border-transparent p-[0px] ${overflow}`}
      >
        {/* 테스트를 위해 스켈레톤을 카드보다 위로 올려 놨습니다. */}
        {isPending && <ChatListSkeleton />}
        {!isPending &&
          chatRoomArray.map((el) => <ChatListCard key={el.uuid} room={el} />)}
        {isError && <p>{error.message} 에러 발생</p>}
        {/* {!hasNextPage && <NoMoreChatList />} */}
        {/* 무한 스크롤 훅이 감지하는 위치  */}
        {/* <div ref={LoadingRef} className="h-0.5 w-full shrink-0"></div> */}
        {/* {isFetchingNextPage && <ChatListSkeletonCard />} */}
      </ChattingLayout.Body>
    </ChattingLayout>
  )
}

export default ChatList
