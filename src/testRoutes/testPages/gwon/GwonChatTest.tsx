import ChattingLayout from '@/components/layout/chattingRoom/chattingLayout'

const GwonChatTest = () => {
  return (
    <>
      <ChattingLayout>
        <ChattingLayout.Header>
          <h3 className="text-[16px] font-semibold">테스트 중</h3>
          <span className="text-xs">테스트 데이터</span>
        </ChattingLayout.Header>
        <ChattingLayout.Body className="h-[309px] border-transparent p-[0px]">
          <p className="">xptm</p>
          <p>dddd</p>
        </ChattingLayout.Body>
      </ChattingLayout>
      테스트
    </>
  )
}

export default GwonChatTest
