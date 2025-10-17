import ThePottButtonPage from './testPages/thepott/ThePottButtonPage'
import ThepottTestPage from './testPages/thepott/ThepottTestPage'

const thepottTestRouteArray = [
  { path: '/test/thepott', element: <ThepottTestPage /> },
  { path: '/test/thepott/button', element: <ThePottButtonPage /> },
]

export default thepottTestRouteArray
