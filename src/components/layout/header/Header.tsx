import { Hstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import Logo from '@/assets/logo.svg'
import useStudyHubStore from '@/store/store'
import CommonButtonMany from './_CommonButtonMany'
import LoggedInButtonMany from './_LoggedInButtonMany'
import LoggedOutButtonMany from './_LoggedOutButtonMany'
import { useNavigate } from 'react-router'

const Header = () => {
  const accessToken = useStudyHubStore((state) => state.accessToken)

  const handleLogoClick = () => {
    window.location.href = import.meta.env.VITE_LANDING_PAGE_URL
  }

  return (
    <div className="border-b border-b-gray-200 bg-white">
      <Container width="lg" className="px-oz-xxl py-oz-md">
        <Hstack className="h-[40px] items-center gap-0">
          <div className="grow">
            <img
              src={Logo}
              onClick={handleLogoClick}
              className="cursor-pointer"
            />
          </div>
          <CommonButtonMany />
          {accessToken && <LoggedInButtonMany />}
          {!accessToken && <LoggedOutButtonMany />}
        </Hstack>
      </Container>
    </div>
  )
}

export default Header
