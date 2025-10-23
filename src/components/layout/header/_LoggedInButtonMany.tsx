import Button from '@/components/commonInGeneral/button/Button'
import { Hstack } from '@/components/commonInGeneral/layout'
import Img from '@/components/commonInProject/img/Img'
import useStudyHubStore from '@/store/store'
import { Bell } from 'lucide-react'
import UserRound from '@/assets/user-round.svg'
import type { Me } from '@/types'

const ProfileImage = ({ url }: { url: string }) => {
  return (
    <div className="h-[32px] w-[32px]">
      <Img
        src={url}
        fallbackImageUrl={UserRound}
        className="bg-primary-100 p-oz-sm h-full rounded-full"
      />
    </div>
  )
}

const ProfileButton = ({ me }: { me: Me }) => {
  return (
    <Button color="primary" variant="ghost" size="lg" className="h-fit w-fit">
      <Hstack className="items-center">
        <ProfileImage url={me.profile_image_url} />
        <p className="shrink-0 text-gray-700">{me.name}</p>
      </Hstack>
    </Button>
  )
}

const LoggedInButtonMany = () => {
  const me = useStudyHubStore((state) => state.me)
  if (!me) {
    return null
  }

  return (
    <>
      <Button variant="ghost" size="lg">
        <Bell />
      </Button>
      <ProfileButton me={me} />
    </>
  )
}

export default LoggedInButtonMany
