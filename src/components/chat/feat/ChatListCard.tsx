import useStudyHubStore from '@/store/store'
import { Hstack, Vstack } from '../../commonInGeneral/layout'
import type { ChatRoomData } from '@/types/_chat'

interface ChatListCardInterface {
  room: ChatRoomData
}

const ChatListCard = ({ room }: ChatListCardInterface) => {
  const date = new Date(room.created_at)
  const month = date.getMonth()
  const day = date.getDay()
  const openChatList = useStudyHubStore((state) => state.openChatRoom)

  const onClickChatRoom = () => {
    openChatList(room.uuid, room.name)
  }

  const roomContent = room.last_message_content
    ? `${room.last_message_sender_nickname}: ${room.last_message_content}`
    : '(대화가 없습니다. 대화를 시작해보세요)'

  return (
    <Vstack
      gap="none"
      onClick={onClickChatRoom}
      className="min-h-[76px] w-full cursor-pointer border-b border-gray-200 p-3 transition hover:bg-gray-100 active:bg-gray-200"
    >
      <Hstack className="justify-between">
        <p className="text-sm text-gray-900">{room.name}</p>
        <Hstack>
          <p className="text-xs text-gray-500">{`${month}월 ${day}일`}</p>
          {room.unread_message_count >= 1 && (
            <p className="bg-danger-500 h-[20px] min-w-[20px] rounded-full px-[6px] py-[2px] text-center text-xs text-white">
              {room.unread_message_count}
            </p>
          )}
        </Hstack>
      </Hstack>
      <Hstack>
        <p className="text-xs text-gray-600">{roomContent}</p>
      </Hstack>
    </Vstack>
  )
}

export default ChatListCard
