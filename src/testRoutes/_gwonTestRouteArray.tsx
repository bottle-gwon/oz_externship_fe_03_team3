import { lazy } from 'react'

// 테스트 라우트에서도 코드 스플리팅을 하려고 합니다!
const GwonTagModalTest = lazy(() => import('./testPages/gwon/GwonTagModalTest'))
const GwonTestPage = lazy(() => import('./testPages/gwon/GwonTestPage'))
const GwonFloating = lazy(() => import('./testPages/gwon/GwonFloatingTest'))
const GwonChatTest = lazy(() => import('./testPages/gwon/GwonChatTest'))

const gwonTestRouteArray = [
  { path: '/test/gwon', element: <GwonTestPage /> },
  { path: 'test/gwon/modal', element: <GwonTagModalTest /> },
  { path: 'test/gwon/floating', element: <GwonFloating /> },
  { path: 'test/gwon/chat', element: <GwonChatTest /> },
]

export default gwonTestRouteArray
