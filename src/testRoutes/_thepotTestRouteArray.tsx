import ThePottButtonPage from './testPages/thepott/ThePottButtonPage'
import ThePottInputFamilyPage from './testPages/thepott/ThePottInputFamilyPage'
import ThePottModalPage from './testPages/thepott/ThePottModalPage'
import ThePottRoundBoxPage from './testPages/thepott/ThePottRoundBoxPage'
import ThepottTestPage from './testPages/thepott/ThepottTestPage'

const thepottTestRouteArray = [
  { path: '/test/thepott', element: <ThepottTestPage /> },
  { path: '/test/thepott/button', element: <ThePottButtonPage /> },
  { path: '/test/thepott/roundbox', element: <ThePottRoundBoxPage /> },
  { path: 'test/thepott/modal', element: <ThePottModalPage /> },
  { path: '/test/thepott/input-family', element: <ThePottInputFamilyPage /> },
]

export default thepottTestRouteArray
