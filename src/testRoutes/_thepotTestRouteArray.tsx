import { lazy } from 'react'
// 테스트 라우트에서도 코드 스플리팅을 하려고 합니다!
const ThePottButtonPage = lazy(
  () => import('./testPages/thepott/ThePottButtonPage')
)
const ThePottInputFamilyPage = lazy(
  () => import('./testPages/thepott/ThePottInputFamilyPage')
)
const ThePottModalPage = lazy(
  () => import('./testPages/thepott/ThePottModalPage')
)
const ThePottRoundBoxPage = lazy(
  () => import('./testPages/thepott/ThePottRoundBoxPage')
)
const ThepottTestPage = lazy(
  () => import('./testPages/thepott/ThepottTestPage')
)
const ThePottMarkdownPage = lazy(
  () => import('./testPages/thepott/ThePottMarkdownPage')
)

const thepottTestRouteArray = [
  { path: '/test/thepott', element: <ThepottTestPage /> },
  { path: '/test/thepott/button', element: <ThePottButtonPage /> },
  { path: '/test/thepott/roundbox', element: <ThePottRoundBoxPage /> },
  { path: 'test/thepott/modal', element: <ThePottModalPage /> },
  { path: '/test/thepott/input-family', element: <ThePottInputFamilyPage /> },
  { path: '/test/thepott/markdown', element: <ThePottMarkdownPage /> },
]

export default thepottTestRouteArray
