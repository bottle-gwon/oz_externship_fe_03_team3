import ThePottButtonPage from './testPages/thepott/ThePottButtonPage'
import ThePottRoundBoxPage from './testPages/thepott/ThePottRoundBoxPage'
import ThepottTestPage from './testPages/thepott/ThepottTestPage'

const thepottTestRouteArray = [
  { path: '/test/thepott', element: <ThepottTestPage /> },
  { path: '/test/thepott/button', element: <ThePottButtonPage /> },
  { path: '/test/thepott/roundbox', element: <ThePottRoundBoxPage /> },
]

export default thepottTestRouteArray
