import TestApiPage from './testPages/TestApiPage'
import TestFrontPage from './testPages/TestFrontPage'

const commonTestRouteArray = [
  { path: '/test', element: <TestFrontPage /> },
  { path: '/test/api', element: <TestApiPage /> },
]

export default commonTestRouteArray
