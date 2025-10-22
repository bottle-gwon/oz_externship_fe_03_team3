import FloatingButton from '@/components/layout/floatingButton/FloatingButton'
import { ArrowUp, MessageCircle } from 'lucide-react'

const GwonFloating = () => {
  return (
    <>
      플로팅 테스트임당
      {/* 위로가기 아이콘 */}
      <FloatingButton theme="mono">
        <ArrowUp size={24} strokeWidth={4} />
      </FloatingButton>
      {/* 메시지 아이콘 */}
      <FloatingButton theme="primary">
        <MessageCircle size={24} />
      </FloatingButton>
    </>
  )
}

export default GwonFloating
