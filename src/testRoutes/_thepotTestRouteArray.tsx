import GwonTestPage from './testPages/gwon/gwonTestPage'
import ThepottTestPage from './testPages/thepott/ThepottTestPage'

const thepottTestRouteArray = [
  { path: '/test/thepott', element: <ThepottTestPage /> },
  { path: '/test/gwon', element: <GwonTestPage /> },
]

export default thepottTestRouteArray
