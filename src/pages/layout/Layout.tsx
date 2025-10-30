import { Outlet } from 'react-router'
import FlexOneContainer from '../../components/commonInGeneral/layout/_FlexOneContainer'
import FullScreen from '../../components/commonInGeneral/layout/_FullScreen'
import Header from '../../components/layout/header/Header'
import FloatingButtonContainer from '@/components/layout/floatingButton/FloatingButtonContainer'
import FloatingButton from '@/components/layout/floatingButton/FloatingButton'
import { ArrowUp } from 'lucide-react'
import { lazy, Suspense, useRef } from 'react'
import FloatingButtonSkeleton from '@/components/chat/skeleton/FloatingButtonSkeleton'
import ChatWidgetSkeleton from '@/components/chat/skeleton/ChatWidgetSkeleton'

const ChatWidget = lazy(() => import('@/components/chat/ChatWidget'))
const ChatFloatingButton = lazy(
  () => import('@/components/chat/ChatFloatingButton')
)

// Todo 현재는 안읽은 메시지를 더미값으로 전달 하고 있지만 추후에 zustand 활용해서 안읽은 메시지값을 전달할것
const Layout = () => {
  const topRef = useRef<HTMLDivElement>(null) // 스크롤 되는 페이지

  const onClickTop = () => {
    if (topRef.current) {
      topRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <FullScreen className="relative bg-gray-50">
      <Header />
      <FlexOneContainer isYScrollable ref={topRef}>
        <Outlet />

        {/* 플로팅 아이콘 */}
        <FloatingButtonContainer>
          {/* 위로가기 아이콘 */}
          <FloatingButton theme="mono" onClick={onClickTop}>
            <ArrowUp size={24} strokeWidth={4} />
          </FloatingButton>

          {/* 메시지 아이콘 */}
          <Suspense fallback={<FloatingButtonSkeleton />}>
            <ChatFloatingButton />
          </Suspense>
        </FloatingButtonContainer>
        {/* 채팅 */}
        <Suspense fallback={<ChatWidgetSkeleton />}>
          <ChatWidget />
        </Suspense>
      </FlexOneContainer>
    </FullScreen>
  )
}

export default Layout
