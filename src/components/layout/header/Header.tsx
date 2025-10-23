import Button from '@/components/commonInGeneral/button/Button'
import { Hstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import Logo from '@/assets/logo.svg'
import { useNavigate } from 'react-router'
import useStudyHubStore from '@/store/store'

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
  const navigate = useNavigate()

  const navigateToLecture = () => navigate('/lecture')
  const navigateToRecruit = () => navigate('/recruit')

  // TODO: 스터디 URL 받으면 교체해야 함
  const redirectToStudy = () => (window.location.href = 'https://google.com')
  // TODO: 로그인 URL 받으면 교체해야 함
  const redirectToLogin = () => (window.location.href = 'https://google.com')
  // TODO: 회원가입 URL 받으면 교체해야 함
  const redirectToSignup = () => (window.location.href = 'https://google.com')

  return (
    <div className="border border-b-gray-200 bg-white">
      <Container width="lg" className="px-oz-xxl py-oz-sm">
        <Hstack>
          <div className="grow">
            <img src={Logo} />
          </div>
          <DebugLoginButton />
          <Button variant="ghost" onClick={navigateToLecture}>
            강의 목록
          </Button>
          <Button variant="ghost" onClick={redirectToStudy}>
            스터디 그룹
          </Button>
          <Button variant="ghost" onClick={navigateToRecruit}>
            구인 공고
          </Button>
          <Button variant="ghost" onClick={redirectToLogin}>
            로그인
          </Button>
          <Button color="primary" onClick={redirectToSignup}>
            회원가입
          </Button>
        </Hstack>
      </Container>
    </div>
  )
}

export default Header
