import Button from '@/components/commonInGeneral/button/Button'
import { Hstack } from '@/components/commonInGeneral/layout'
import { Bell, UserRound } from 'lucide-react'

// TODO: 속성은 api 응답에 맞춰야
const ProfileButton = ({ name }: { name: string }) => {
  return (
    <Hstack>
      <UserRound />
    </Hstack>
  )
}

const LoggedInButtonMany = () => {
  // TODO: 액세스 토큰 받으면 내 정보 받아오기 해야 함
  //
  const dummyName = '김오즈'
  return (
    <>
      <Button variant="ghost">
        <Bell />
      </Button>
      <Button variant="ghost">
        <div className="bg-primary-50">
          <UserRound />
        </div>
        {dummyName}
      </Button>
    </>
  )
}

export default LoggedInButtonMany
