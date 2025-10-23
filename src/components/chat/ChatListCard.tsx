import { Hstack, Vstack } from '../commonInGeneral/layout'

// Todo 관련 API 나오면 고치기
// Note 관련 API가 없는 관계로 UI확인용으로 임의로 작성 했습니다.
type ChatListCardType = {
  title: string
  study_group_id: number
  sender_id: number
  sender_nickname: string
  created_at: string
  new_message: number
  content: string | null
}

interface ChatListCardInterface {
  room: ChatListCardType
}

const ChatListCard = ({ room }: ChatListCardInterface) => {
  const date = new Date(room.created_at)
  const month = date.getMonth()
  const day = date.getDay()
  return (
    <Vstack
      gap="none"
      className="min-h-[76px] w-full cursor-pointer border-b border-gray-200 p-3 transition hover:bg-gray-100 active:bg-gray-200"
    >
      <Hstack className="justify-between">
        <p className="text-sm text-gray-900">{room.title}</p>
        <Hstack>
          <p className="text-xs text-gray-500">{`${month}월 ${day}일`}</p>
          <p className="bg-danger-500 h-[20px] min-w-[20px] rounded-full px-[6px] py-[2px] text-center text-xs text-white">
            {room.new_message >= 1 ? room.new_message : null}
          </p>
        </Hstack>
      </Hstack>
      <Hstack>
        <p className="text-xs text-gray-600">
          {room.content
            ? `${room.sender_nickname}: ${room.content}`
            : '(대화가 없습니다. 대화를 시작해보세요)'}
        </p>
      </Hstack>
    </Vstack>
  )
}

export default ChatListCard
