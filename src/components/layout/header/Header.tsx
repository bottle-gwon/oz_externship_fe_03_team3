import Button from '@/components/commonInGeneral/button/Button'
import { Hstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import Logo from '@/assets/logo.svg'
import useStudyHubStore from '@/store/store'
import CommonButtonMany from './_CommonButtonMany'
import LoggedInButtonMany from './_LoggedInButtonMany'
import LoggedOutButtonMany from './_LoggedOutButtonMany'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import api from '@/api/api'

// NOTE: 로그인 테스트용 함수 -> 리프레시 로직 아직 없음
// TODO: 리프레시 로직 적용하고 나면 삭제해야
const loginForDev = async () => {
  const responseLogin = await api.post(
    `${import.meta.env.VITE_ORIGINAL_BASE_URL_FOR_DEV}/auth/login`,
    {
      email: import.meta.env.VITE_LOGIN_ID,
      password: import.meta.env.VITE_LOGIN_PASSWORD,
    }
  )
  const accessToken = responseLogin.data.data.access

  const responseMe = await api.get(
    `${import.meta.env.VITE_ORIGINAL_BASE_URL_FOR_DEV}/users/me`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  )
  const me = responseMe.data

  const setAccessToken = useStudyHubStore.getState().setAccessToken
  const setMe = useStudyHubStore.getState().setMe

  setAccessToken(accessToken)
  setMe(me)
}
const logoutForDev = () => {
  const setAccessToken = useStudyHubStore.getState().setAccessToken
  setAccessToken(null)
}

// TODO: 리프레시 토큰 캐시로 받고 로그인 api 연결하면 삭제해야!
const DebugLoginButton = () => {
  const accessToken = useStudyHubStore((state) => state.accessToken)
  const setMe = useStudyHubStore((state) => state.setMe)

  const handleClick = () => {
    if (accessToken) {
      logoutForDev()
      setMe(null)
      return
    }

    loginForDev()
  }

  const label = accessToken ? 'Log Out' : 'Log In'
  return <Button onClick={handleClick}>{label}</Button>
}

// Todo 채팅 api연결할때 관련 함수 포함해서 지울것
const TestMessageArrived = () => {
  const [inputValue, setInputValue] = useState('')
  const accessToken = useStudyHubStore((state) => state.accessToken)
  const setUnReadCounter = useStudyHubStore((state) => state.setUnReadCounter)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      const parsedValue = parseInt(inputValue)

      if (!isNaN(parsedValue) && parsedValue >= 0) {
        setUnReadCounter(parsedValue)
        setInputValue('')
      } else {
        alert('자연수, 0만 입력 가능합니다.')
      }
    }
  }

  if (!accessToken) {
    return
  }

  return (
    <Hstack>
      <input
        type="text"
        placeholder="안읽은 메시지 테스트"
        className="rounded-xl border border-gray-400 px-3"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </Hstack>
  )
}

const Header = () => {
  const accessToken = useStudyHubStore((state) => state.accessToken)
  const navigate = useNavigate()

  const handleLogoClick = () => {
    if (accessToken) {
      navigate('/lecture')
      return
    }

    window.location.href = import.meta.env.VITE_LANDING_PAGE_URL
  }

  return (
    <div className="border-b border-b-gray-200 bg-white">
      <Container width="lg" className="px-oz-xxl py-oz-sm">
        <Hstack className="items-center gap-0">
          <div className="grow">
            <img
              src={Logo}
              onClick={handleLogoClick}
              className="cursor-pointer"
            />
          </div>
          <TestMessageArrived />
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
