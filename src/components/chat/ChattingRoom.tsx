import ChattingLayout from '@/components/layout/chattingRoom/ChattingLayout'
import useStudyHubStore from '@/store/store'
import { ArrowLeft } from 'lucide-react'
import { Hstack, Vstack } from '../commonInGeneral/layout'
import ChatUserStatus from './feat/ChatUserStatus'

//  Todo 관련 API 업데이트 적용되면 바로 변경 할것!
const TestUserStatus = {
  result: [
    { name: '홍길동', id: 31, isConnected: true, isLeader: true },
    { name: '김길동', id: 32, isConnected: true, isLeader: false },
    { name: '정길동', id: 33, isConnected: false, isLeader: false },
    { name: '장길동', id: 34, isConnected: true, isLeader: false },
    { name: '주길동', id: 35, isConnected: false, isLeader: false },
    { name: '이길동', id: 36, isConnected: true, isLeader: false },
  ],
}

const ChattingRoom = () => {
  const chatState = useStudyHubStore((state) => state.chatState)
  const openChatList = useStudyHubStore((state) => state.openChatList)

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
            {chatState.status === 'chatRoom' ? (
              <>
                <p className="text-base font-semibold text-gray-900">
                  {chatState.status === 'chatRoom' ? chatState.title : ''}
                </p>
                <p className="text-xs text-gray-600">{`0명 온라인`}</p>
              </>
            ) : null}
          </Vstack>
        </Hstack>
      </ChattingLayout.Header>

      {/* 채팅방 사용자들 스테이터스 */}
      <ChattingLayout.UserStatus>
        {TestUserStatus.result.map((el) => (
          <ChatUserStatus key={el.id} status={el} />
        ))}
      </ChattingLayout.UserStatus>

      {/* 채팅창 */}
      <ChattingLayout.Body className="h-[217px]">채팅 방</ChattingLayout.Body>
    </ChattingLayout>
  )
}

export default ChattingRoom
