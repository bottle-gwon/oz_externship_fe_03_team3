import FloatingButton from '@/components/layout/floatingButton/FloatingButton'
import FloatingButtonContainer from '@/components/layout/floatingButton/FloatingButtonContainer'
import { ArrowUp, MessageCircle } from 'lucide-react'

// Todo 현재는 더미값으로 전달 하고 있지만 추후에 zustand 활용해서 안읽은 메시지값을 전달할것

const GwonFloating = () => {
  const badgeTest = 12
  return (
    <>
      플로팅 테스트임당
      <FloatingButtonContainer>
        {/* 위로가기 아이콘 */}
        <FloatingButton theme="mono">
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
