import { lazy } from 'react'
import RecruitManagementPage from './testPages/nari/RecruitManagementPage'
import HowToUseSelect from '@/components/commonInGeneral/select/HowToUseSelect'

// 테스트 라우트에서도 코드 스플리팅을 하려고 합니다!
const NariTastPage = lazy(() => import('./testPages/nari/_nariTastPage'))
const ApplicationModalPage = lazy(
  () => import('../pages/recruit/ApplicationModalPage')
)

const nariRouteArray = [
  { path: '/test/nari', element: <NariTastPage /> },
  { path: '/test/narimodal', element: <ApplicationModalPage /> },
  { path: '/test/narimanage', element: <RecruitManagementPage /> },
  { path: '/test/narimanage1', element: <HowToUseSelect /> },
]

export default nariRouteArray
