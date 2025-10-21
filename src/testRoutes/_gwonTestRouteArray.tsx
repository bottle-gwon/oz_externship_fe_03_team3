import GwonTagModalTest from './testPages/gwon/GwonTagModalTest'
import GwonTestPage from './testPages/gwon/GwonTestPage'

const gwonTestRouteArray = [
  { path: '/test/gwon', element: <GwonTestPage /> },
  { path: 'test/gwon/modal', element: <GwonTagModalTest /> },
]

export default gwonTestRouteArray
