// import ChatList from '@/components/chat/ChatList'
import ChattingRoom from '@/components/chat/ChattingRoom'
import Button from '@/components/commonInGeneral/button/Button'
import useStudyHubStore from '@/store/store'
// import ChattingLayout from '@/components/layout/chattingRoom/chattingLayout'

const GwonChatTest = () => {
  const openChatRoom = useStudyHubStore((state) => state.openChatRoom)
  const chatState = useStudyHubStore((state) => state.chatState)

  const testOpenChatRoom = () => {
    openChatRoom('123', '리눅스 공부')
  }
  return (
    <>
      <Button onClick={testOpenChatRoom}>채팅방 업뎃</Button>
      {/* <ChattingLayout>
        <ChattingLayout.Header>
          <h3 className="text-[16px] font-semibold">테스트 중</h3>
          <span className="text-xs">테스트 데이터</span>
        </ChattingLayout.Header>
        <ChattingLayout.Body className="h-[309px] border-transparent p-[0px]">
          <p className="">xptm</p>
          <p>dddd</p>
        </ChattingLayout.Body>
      </ChattingLayout> */}
      {/* <ChatList /> */}
      <ChattingRoom />
      테스트
      {chatState.status}
    </>
  )
}

export default GwonChatTest
