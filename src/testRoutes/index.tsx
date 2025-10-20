import nariRouteArray from './_nariRouteArray'
import gwonTestRouteArray from './_gwonTestRouteArray'
import thepottTestRouteArray from './_thepotTestRouteArray'
import hyejeongTestRouteArray from './testPages/hyejeong/_hyejeongTestRouteArray'

const testRouteArray = [
  ...thepottTestRouteArray,
  ...hyejeongTestRouteArray,
  ...nariRouteArray,
  ...gwonTestRouteArray,
]

export default testRouteArray
