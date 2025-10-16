import { Outlet } from 'react-router'
import FlexOneContainer from '../../components/commonInGeneral/layout/_FlexOneContainer'
import FullScreen from '../../components/commonInGeneral/layout/_FullScreen'
import Header from '../../components/layout/header/Header'

const Layout = () => {
  return (
    <FullScreen>
      <Header />
      <FlexOneContainer isYScrollable>
        <Outlet />
      </FlexOneContainer>
    </FullScreen>
  )
}

export default Layout
