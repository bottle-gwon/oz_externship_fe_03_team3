import ChattingLayout from '@/components/layout/chattingRoom/ChattingLayout'
import useStudyHubStore from '@/store/store'
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

//  Todo 관련 API 업데이트 적용되면 바로 변경 할것!
// const TestUserStatus = {
//   result: [
//     { name: '홍길동', id: 31, isConnected: true, isLeader: true },
//     { name: '김길동', id: 32, isConnected: true, isLeader: false },
//     { name: '정길동', id: 33, isConnected: false, isLeader: false },
//     { name: '장길동', id: 34, isConnected: true, isLeader: false },
//     { name: '주길동', id: 35, isConnected: false, isLeader: false },
//     { name: '이길동', id: 36, isConnected: true, isLeader: false },
//   ],
// }

//채팅 더미
// const TestChat = {
//   messages: [
//     {
//       id: 201,
//       sender_id: 5,
//       sender_nickname: '홍길동',
//       study_group_id: 100,
//       content: '오늘 스터디 7시에 시작합니다.',
//       file_url: null,
//       is_read: true,
//       created_at: '2025-10-15T10:30:00Z',
//     },
//     {
//       id: 201,
//       sender_id: 6,
//       sender_nickname: '김길동',
//       study_group_id: 100,
//       content: 'ㅇㅋㅇㅋ',
//       file_url: null,
//       is_read: true,
//       created_at: '2025-10-15T10:35:00Z',
//     },
//     {
//       id: 201,
//       sender_id: 7,
//       sender_nickname: '이길동',
//       study_group_id: 100,
//       content: '넵',
//       file_url: null,
//       is_read: true,
//       created_at: '2025-10-15T10:37:00Z',
//     },
//     {
//       id: 201,
//       sender_id: 8,
//       sender_nickname: '장길동',
//       study_group_id: 100,
//       content: '테스트 중입니다. 조금 긴 메시지 테스트',
//       file_url: null,
//       is_read: true,
//       created_at: '2025-10-15T11:40:00Z',
//     },
//     {
//       id: 201,
//       sender_id: 9,
//       sender_nickname: '선길동',
//       study_group_id: 100,
//       content: '테스트 중입니다.',
//       file_url: null,
//       is_read: true,
//       created_at: '2025-10-15T11:45:00Z',
//     },
//   ],
// }

const OnlineUser = ({ isPending }: { isPending: boolean }) => {
  const chatOnline = useStudyHubStore((state) => state.chatOnline)

  if (isPending && chatOnline !== null) {
    return <Skeleton widthInPixel={162} heightInPixel={14} />
  }

  return (
    <p className="text-xs text-gray-600">{`${chatOnline?.count}명 온라인`}</p>
  )
}

const ChattingRoom = () => {
  const chatState = useStudyHubStore((state) => state.chatState)
  const openChatList = useStudyHubStore((state) => state.openChatList)
  const setChatMessageArray = useStudyHubStore(
    (state) => state.setChatMessageArray
  )
  const chatMessageArray = useStudyHubStore((state) => state.chatMessageArray)
  const chatInit = useStudyHubStore((state) => state.chatInit)

  const page = useStudyHubStore((state) => state.page)
  const setPage = useStudyHubStore((state) => state.setPage)
  const chatOnline = useStudyHubStore((state) => state.chatOnline)

  // const [isPending, setIsPending] = useState(true) //임시 로딩
  // const [isFetchingNextPage, setIsFetchingNextPage] = useState(false)
  // const [hasNextPage, _] = useState(true)

  // const timerRef = useRef<NodeJS.Timeout | null>(null)
  // const scrollTimerRef = useRef<NodeJS.Timeout | null>(null)

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
    // 아래 타이머 관련은 추후 삭제하고 api로 연결할 예정입니다. 일단은 예시로 로딩만 볼 수 있게 했습니다.
    // if (scrollTimerRef.current) {
    //   clearTimeout(scrollTimerRef.current)
    // }
    // 로딩중일때, 다음 페이지가 없으면 는 무한 스크롤 시작 안함
    if (hasNextPage && !isFetchingNextPage! && !chatInit) {
      fetchNextPage()
    }

    // setIsFetchingNextPage(true)
    // scrollTimerRef.current = setTimeout(
    //   () => setIsFetchingNextPage(false),
    //   1500
    // )
  })

  // useEffect(() => {
  //   return () => {
  //     if (scrollTimerRef.current) {
  //       clearTimeout(scrollTimerRef.current)
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

  // 데이터 저장, 정렬
  const sortMessage = (message: ChatMessage[]) => {
    return message.sort(
      (a, b) => Date.parse(a.created_at) - Date.parse(b.created_at)
    )
  }

  useEffect(() => {
    if (data?.pages && !isFetchingNextPage) {
      const messages = data?.pages[data.pageParams.length - 1]?.data?.messages

      if (!messages) {
        return
      }

      if (page === 0) {
        if (data.pageParams.length === 0) {
          const allMessage = [...messages].flatMap((res) => res || []) || []
          const sortMessaged = sortMessage(allMessage)
          setChatMessageArray(sortMessaged)
        } else {
          const allMessage =
            data?.pages.flatMap((res) => res.data?.messages || []) || []
          const sortMessaged = sortMessage(allMessage)
          setChatMessageArray(sortMessaged)
        }
      } else {
        const allMessage =
          [...chatMessageArray, ...messages].flatMap((res) => res || []) || []
        const sortMessaged = sortMessage(allMessage)

        setChatMessageArray(sortMessaged)
      }

      setPage(data.pageParams.length)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
