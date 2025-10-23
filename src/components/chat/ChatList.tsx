import ChattingLayout from '@/components/layout/chattingRoom/ChattingLayout'
import ChatListCard from './ChatListCard'

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

  return (
    <ChattingLayout>
      <ChattingLayout.Header>
        <h3 className="text-[16px] font-semibold">채팅방</h3>
        <span className="text-primary-600 text-xs">{`0개의 읽지 않은 메시지`}</span>
      </ChattingLayout.Header>
      <ChattingLayout.Body className="h-[309px] overflow-y-scroll border-transparent p-[0px]">
        {responseData.data.room.map((el) => (
          <ChatListCard key={el.study_group_id} room={el} />
        ))}
      </ChattingLayout.Body>
    </ChattingLayout>
  )
}

export default ChatList
