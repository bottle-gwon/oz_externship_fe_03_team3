import ChattingLayout from '@/components/layout/chattingRoom/ChattingLayout'
import ChatListCard from './feat/ChatListCard'
import useStudyHubStore from '@/store/store'
import { useEffect } from 'react'
import ChatListSkeleton from './skeleton/ChatListSkeleton'
import useOneWayInfinityScroll from '@/hooks/useOneWayInfinityScroll'
import ChatListSkeletonCard from './skeleton/ChatListSkeletonCard'
import { useChatRoomList } from '@/hooks/chat/useChat'
import NoMoreChatList from './feat/NoMoreChatList'

// TODO api 연결할때 지우기!
// Note: 아직 API가 없어서 일단 임의로 작성 했습니다. 추후에 관련 API 가 나오면 수정 하도록 하겠습니다.
// const DUMMY_CHATLIST = {
//   status: 'success',
//   code: 'SUCCESS',
//   message: '메시지 목록 조회 성공',
//   data: {
//     room: [
//       {
//         title: '채팅방 테스트 입니다.',
//         study_group_id: 201,
//         sender_id: 5,
//         sender_nickname: '홍길동',
//         content: '오늘 스터디 7시에 시작합니다.',
//         new_message: 3,
//         created_at: '2025-10-15T10:30:00Z',
//       },
//       {
//         title: '채팅방 테스트2',
//         study_group_id: 202,
//         sender_id: 5,
//         sender_nickname: '홍길동',
//         content: '오늘 스터디 7시에 시작합니다.',
//         new_message: 1,
//         created_at: '2025-10-15T10:30:00Z',
//       },
//       {
//         title: '채팅방 테스트3',
//         study_group_id: 203,
//         sender_id: 5,
//         sender_nickname: '홍길동',
//         content: null,
//         new_message: 1,
//         created_at: '2025-10-15T10:30:00Z',
//       },
//       {
//         title: '채팅방 테스트3',
//         study_group_id: 204,
//         sender_id: 5,
//         sender_nickname: '홍길동',
//         content: null,
//         new_message: 0,
//         created_at: '2025-10-15T10:30:00Z',
//       },
//       {
//         title: '채팅방 테스트3',
//         study_group_id: 205,
//         sender_id: 5,
//         sender_nickname: '홍길동',
//         content: null,
//         new_message: 0,
//         created_at: '2025-10-15T10:30:00Z',
//       },
//       {
//         title: '채팅방 테스트3',
//         study_group_id: 206,
//         sender_id: 5,
//         sender_nickname: '홍길동',
//         content: null,
//         new_message: 1,
//         created_at: '2025-10-15T10:30:00Z',
//       },
//     ],
//     pagination: {
//       page: 1,
//       page_size: 20,
//       total_count: 102,
//     },
//   },
// }

// 채팅 목록
const ChatList = () => {
  // const responseData = DUMMY_CHATLIST

  // tanstackQuery에서 받아올 내용 임시로 작성
  // const [isPending, setIsPending] = useState(false)
  // const [isFetchingNextPage, setIsFetchingNextPage] = useState(false)
  // const [hasNextPage, _] = useState(true)

  // const timerRef = useRef<NodeJS.Timeout | null>(null)
  // const scrollTimerIdRef = useRef<NodeJS.Timeout | null>(null)

  const unreadCounter = useStudyHubStore((state) => state.unReadCounter) //안읽은 메시지
  const chatRoomArray = useStudyHubStore((state) => state.chatRoomArray)
  const setChatRoomArray = useStudyHubStore((state) => state.setChatRoomArray)

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isError,
    error,
  } = useChatRoomList()

  const LoadingRef = useRef<HTMLDivElement | null>(null)
  useOneWayInfinityScroll(LoadingRef, () => {
    // 스크롤이 타겟에 들어왔을때 (훅에서는 100% 보일때로 설정해둠)
    // 아래 타이머 관련은 추후 삭제하고 api로 연결할 예정입니다. 일단은 예시로 로딩만 볼 수 있게 했습니다.
    // if (scrollTimerIdRef.current) {
    //   clearTimeout(scrollTimerIdRef.current)
    // }
    // 다음 페이지 없으면 로딩 안함
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }

    // setIsFetchingNextPage(true)
    // scrollTimerIdRef.current = setTimeout(
    //   () => setIsFetchingNextPage(false),
    //   1500
    // )
  })

  useEffect(() => {
    if (data?.pages && !isFetchingNextPage) {
      // const newData = data?.pages[data?.pages.length - 1].data?.messages
      // console.log(newData, '테스트')
      // const allMessage = data?.pages
      //   .map(res => res.data?.messages)
      //   .filter(res => res !== undefined)
      const allMessage =
        data?.pages.flatMap((res) => res.data?.messages || []) || []
      setChatRoomArray(allMessage)
    }
  }, [data, isFetchingNextPage, setChatRoomArray])

  // useEffect(() => {
  //   return () => {
  //     if (scrollTimerIdRef.current) {
  //       clearTimeout(scrollTimerIdRef.current)
  //     }
  //   }
  // }, [])

  // useEffect(() => {
  //   setIsPending(true)
  //   timerRef.current = setTimeout(() => setIsPending(false), 1500)
  //   return () => {
  //     if (timerRef.current) {
  //       clearTimeout(timerRef.current)
  //     }
  //   }
  // }, [])

  // 임시 에러 처리
  if (isError) {
    return <>{error} 임시</>
  }
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
          chatRoomArray.map((el) => (
            <ChatListCard key={el.study_group_id} room={el} />
          ))}
        {!hasNextPage && <NoMoreChatList />}
        {/* 무한 스크롤 훅이 감지하는 위치  */}
        <div ref={LoadingRef} className="h-0.5 w-full shrink-0"></div>
        {isFetchingNextPage && <ChatListSkeletonCard />}
      </ChattingLayout.Body>
    </ChattingLayout>
  )
}

export default ChatList
