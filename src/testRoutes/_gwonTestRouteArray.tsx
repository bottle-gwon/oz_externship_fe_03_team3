import { lazy } from 'react'

// 테스트 라우트에서도 코드 스플리팅을 하려고 합니다!
const GwonTagModalTest = lazy(() => import('./testPages/gwon/GwonTagModalTest'))
const GwonTestPage = lazy(() => import('./testPages/gwon/GwonTestPage'))

const gwonTestRouteArray = [
  { path: '/test/gwon', element: <GwonTestPage /> },
  { path: 'test/gwon/modal', element: <GwonTagModalTest /> },
]

export default gwonTestRouteArray
