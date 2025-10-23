import { lazy } from 'react'
import AnnouncementManagementPage from './testPages/nari/AnnouncementManagementPage'

// 테스트 라우트에서도 코드 스플리팅을 하려고 합니다!
const NariTastPage = lazy(() => import('./testPages/nari/_nariTastPage'))
const ApplicationModalPage = lazy(
  () => import('../pages/recruit/ApplicationModalPage')
)

const nariRouteArray = [
  { path: '/test/nari', element: <NariTastPage /> },
  { path: '/test/narimodal', element: <ApplicationModalPage /> },
  { path: '/test/narimanage', element: <AnnouncementManagementPage /> },
]

export default nariRouteArray
