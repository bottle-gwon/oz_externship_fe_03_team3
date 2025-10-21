import HyejeongPageTitle from './testPages/hyejeong/HyejeongPageTitle'
import HyejeongRecommendSection from './testPages/hyejeong/HyejeongRecommendSection'

const hyejeongTestRouteArray = [
  {
    path: '/test/hyejeong',
    element: <HyejeongRecommendSection />,
  },
  { path: '/test/hyejeong/title', element: <HyejeongPageTitle /> },
]

export default hyejeongTestRouteArray
