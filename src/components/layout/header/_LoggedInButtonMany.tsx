import Button from '@/components/commonInGeneral/button/Button'
import { Hstack } from '@/components/commonInGeneral/layout'
import useStudyHubStore from '@/store/store'
import type { Me } from '@/types'
import ProfileImage from '@/components/commonInProject/ProfileImage/ProfileImage'
import Dropdown from '@/components/commonInGeneral/dropdown/Dropdown'
import { subApi } from '@/api/api'
import NotificationButton from './notification/NotificationButton'

const logout = async () => {
  const state = useStudyHubStore.getState()
  const accessToken = state.accessToken
  await subApi.post('/auth/logout', undefined, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  state.setMe(null)
  state.setAccessToken(null)
}

const ProfileButton = ({ me }: { me: Me }) => {
  const handleChange = (value: string) => {
    switch (value) {
      case 'mypage':
        window.location.href = import.meta.env.VITE_MYPAGE_PAGE_URL
        return
      case 'logout':
        logout()
        return
      default:
        throw new Error('---- 잘못된 드롭다운 값이 선택되었습니다')
    }
  }
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Button
          color="primary"
          variant="ghost"
          size="lg"
          className="py-oz-sm p-0"
        >
          <Hstack className="items-center">
            <ProfileImage url={me.profile_img_url} />
            <p className="shrink-0 text-gray-700">{me.name}</p>
          </Hstack>
        </Button>
      </Dropdown.Trigger>

      <Dropdown.Menu onChange={handleChange}>
        <Dropdown.MenuItem value="mypage">마이페이지</Dropdown.MenuItem>
        <Dropdown.MenuItem value="logout">로그아웃</Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  )
}

const LoggedInButtonMany = () => {
  const me = useStudyHubStore((state) => state.me)
  if (!me) {
    return null
  }

  return (
    <>
      <NotificationButton />
      <ProfileButton me={me} />
    </>
  )
}

export default LoggedInButtonMany
