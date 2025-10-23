import Button from '@/components/commonInGeneral/button/Button'
import { Hstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import Logo from '@/assets/logo.svg'
import useStudyHubStore from '@/store/store'
import CommonButtonMany from './_CommonButtonMany'
import LoggedInButtonMany from './_LoggedInButtonMany'
import LoggedOutButtonMany from './_LoggedOutButtonMany'

// TODO: 리프레시 토큰 캐시로 받고 로그인 api 연결하면 삭제해야!
const DebugLoginButton = () => {
  const accessToken = useStudyHubStore((state) => state.accessToken)
  const setAccessToken = useStudyHubStore((state) => state.setAccessToken)

  const handleClick = () => {
    if (accessToken) {
      setAccessToken(null)
      return
    }
    setAccessToken('this_is_dummy_access_token')
  }

  const label = accessToken ? 'DEBUG Logged in' : 'DEBUG Logged out'
  return <Button onClick={handleClick}>{label}</Button>
}

const Header = () => {
  const accessToken = useStudyHubStore((state) => state.accessToken)

  return (
    <div className="border border-b-gray-200 bg-white">
      <Container width="lg" className="px-oz-xxl py-oz-sm">
        <Hstack>
          <div className="grow">
            <img src={Logo} />
          </div>
          <DebugLoginButton />
          <CommonButtonMany />
          {accessToken && <LoggedInButtonMany />}
          {!accessToken && <LoggedOutButtonMany />}
        </Hstack>
      </Container>
    </div>
  )
}

export default Header
