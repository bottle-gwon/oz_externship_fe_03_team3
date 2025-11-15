import Button from '@/components/commonInGeneral/button/Button'
import { Hstack } from '@/components/commonInGeneral/layout'
import useStudyHubStore from '@/store/store'
import type { Me } from '@/types'
import ProfileImage from '@/components/commonInProject/ProfileImage/ProfileImage'
import Dropdown from '@/components/commonInGeneral/dropdown/Dropdown'
import { subApi } from '@/api/api'
import NotificationButton from './notification/NotificationButton'
import { User } from 'lucide-react'
import LogoutIcon from '@/assets/logout.svg'

const logout = async () => {
  const state = useStudyHubStore.getState()
  const accessToken = state.accessToken
  try {
    await subApi.post('/auth/logout', undefined, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
  } finally {
    state.setMe(null)
    state.setAccessToken(null)
  }
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
        <Button variant="ghost">
          <Hstack className="h-[20px] items-center">
            <ProfileImage url={me.profile_img_url} />
            <p className="shrink-0 text-gray-700">{me.name}</p>
          </Hstack>
        </Button>
      </Dropdown.Trigger>

      <Dropdown.Menu onChange={handleChange}>
        <Dropdown.MenuItem value="mypage">
          <User size={14} />
          마이페이지
        </Dropdown.MenuItem>
        <Dropdown.MenuItem value="logout">
          <img src={LogoutIcon} />
          <p className="text-danger-600">로그아웃</p>
        </Dropdown.MenuItem>
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
