import { lazy } from 'react'

// 테스트 라우트에서도 코드 스플리팅을 하려고 합니다!
const HyejeongPageTitle = lazy(
  () => import('./testPages/hyejeong/HyejeongPageTitle')
)
const HyejeongRecruitPage = lazy(
  () => import('./testPages/hyejeong/HyejeongRecruitPage')
)
const HyejeongRecommendSection = lazy(
  () => import('./testPages/hyejeong/HyejeongRecommendSection')
)
const HyejeongSubHeader = lazy(
  () => import('./testPages/hyejeong/HyejeongSubHeader')
)

const hyejeongTestRouteArray = [
  {
    path: '/test/hyejeong',
    element: <HyejeongRecommendSection />,
  },
  { path: '/test/hyejeong/title', element: <HyejeongPageTitle /> },
  {
    path: '/test/hyejeong/recruitlist',
    element: <HyejeongRecruitPage />,
  },
  {
    path: '/test/hyejeong/subheader',
    element: <HyejeongSubHeader />,
  },
]

export default hyejeongTestRouteArray
