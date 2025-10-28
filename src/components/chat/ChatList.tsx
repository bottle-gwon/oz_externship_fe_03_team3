import ChattingLayout from '@/components/layout/chattingRoom/ChattingLayout'
import ChatListCard from './feat/ChatListCard'
import useStudyHubStore from '@/store/store'
import { useEffect, useRef, useState } from 'react'
import ChatListSkeleton from './skeleton/ChatListSkeleton'

// TODO api 연결할때 지우기!
// Note: 아직 API가 없어서 일단 임의로 작성 했습니다. 추후에 관련 API 가 나오면 수정 하도록 하겠습니다.
const DUMMY_CHATLIST = {
  status: 'success',
  code: 'SUCCESS',
  message: '메시지 목록 조회 성공',
  data: {
    room: [
      {
        title: '채팅방 테스트 입니다.',
        study_group_id: 201,
        sender_id: 5,
        sender_nickname: '홍길동',
        content: '오늘 스터디 7시에 시작합니다.',
        new_message: 3,
        created_at: '2025-10-15T10:30:00Z',
      },
      {
        title: '채팅방 테스트2',
        study_group_id: 202,
        sender_id: 5,
        sender_nickname: '홍길동',
        content: '오늘 스터디 7시에 시작합니다.',
        new_message: 1,
        created_at: '2025-10-15T10:30:00Z',
      },
      {
        title: '채팅방 테스트3',
        study_group_id: 203,
        sender_id: 5,
        sender_nickname: '홍길동',
        content: null,
        new_message: 1,
        created_at: '2025-10-15T10:30:00Z',
      },
      {
        title: '채팅방 테스트3',
        study_group_id: 203,
        sender_id: 5,
        sender_nickname: '홍길동',
        content: null,
        new_message: 0,
        created_at: '2025-10-15T10:30:00Z',
      },
      {
        title: '채팅방 테스트3',
        study_group_id: 203,
        sender_id: 5,
        sender_nickname: '홍길동',
        content: null,
        new_message: 0,
        created_at: '2025-10-15T10:30:00Z',
      },
      {
        title: '채팅방 테스트3',
        study_group_id: 203,
        sender_id: 5,
        sender_nickname: '홍길동',
        content: null,
        new_message: 1,
        created_at: '2025-10-15T10:30:00Z',
      },
    ],
    pagination: {
      page: 1,
      page_size: 20,
      total_count: 102,
    },
  },
}

// 채팅 목록
const ChatList = () => {
  const responseData = DUMMY_CHATLIST
  const unreadCounter = useStudyHubStore((state) => state.unReadCounter) //안읽은 메시지
  const [isPending, setIsPending] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setIsPending(true)
    timerRef.current = setTimeout(() => setIsPending(false), 1500)
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  const overflow = isPending ? 'overflow-hidden' : 'overflow-y-scroll'
  return (
    <ChattingLayout>
      <ChattingLayout.Header>
        <h3 className="text-[16px] font-semibold">채팅방</h3>
        <span className="text-primary-600 text-xs">{`${unreadCounter}개의 읽지 않은 메시지`}</span>
      </ChattingLayout.Header>

      <ChattingLayout.Body
        className={`h-[309px] border-transparent p-[0px] ${overflow}`}
      >
        {/* 테스트를 위해 스켈레톤을 카드보다 위로 올려 놨습니다. */}
        {isPending && <ChatListSkeleton />}
        {responseData.data.room.map((el) => (
          <ChatListCard key={el.study_group_id} room={el} />
        ))}
      </ChattingLayout.Body>
    </ChattingLayout>
  )
}

export default ChatList
