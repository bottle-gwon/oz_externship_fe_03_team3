import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import FloatingButton from '@/components/layout/floatingButton/FloatingButton'
import FloatingButtonContainer from '@/components/layout/floatingButton/FloatingButtonContainer'
import { ArrowUp, MessageCircle } from 'lucide-react'

// Todo 현재는 더미값으로 전달 하고 있지만 추후에 zustand 활용해서 안읽은 메시지값을 전달할것

const GwonFloating = () => {
  const badgeTest = 12 // 안 읽은 메시지

  const testArray = Array.from({ length: 40 }, (_, index) => index + 1)

  const onClickTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <h1 className="text-4xl font-bold">TOP</h1>
      플로팅 테스트임당
      {testArray.map((el) => (
        <RoundBox key={el}>테스트 내용 채우기</RoundBox>
      ))}
      <FloatingButtonContainer>
        {/* 위로가기 아이콘 */}
        <FloatingButton theme="mono" onClick={onClickTop}>
          <ArrowUp size={24} strokeWidth={4} />
        </FloatingButton>
        {/* 메시지 아이콘 */}
        <FloatingButton theme="primary" badge={badgeTest}>
          <MessageCircle size={24} />
        </FloatingButton>
      </FloatingButtonContainer>
    </>
  )
}

export default GwonFloating
