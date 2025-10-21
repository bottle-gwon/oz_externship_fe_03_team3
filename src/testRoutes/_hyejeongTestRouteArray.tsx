import HyejeongPageTitle from './testPages/hyejeong/HyejeongPageTitle'
import HyejeongRecruitPage from './testPages/hyejeong/HyejeongRecruitPage'
import HyejeongRecommendSection from './testPages/hyejeong/HyejeongRecommendSection'

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
]

export default hyejeongTestRouteArray
