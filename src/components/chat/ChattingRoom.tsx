import ChattingLayout from '@/components/layout/chattingRoom/ChattingLayout'
import useStudyHubStore from '@/store/store'
import { ArrowLeft } from 'lucide-react'
import { Hstack, Vstack } from '../commonInGeneral/layout'

const ChattingRoom = () => {
  const chatState = useStudyHubStore((state) => state.chatState)
  const openChatList = useStudyHubStore((state) => state.openChatList)

  return (
    <ChattingLayout>
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
      채팅 방
    </ChattingLayout>
  )
}

export default ChattingRoom
