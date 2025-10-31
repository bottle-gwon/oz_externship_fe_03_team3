import Button from '@/components/commonInGeneral/button/Button'
import { Hstack } from '@/components/commonInGeneral/layout'
import useStudyHubStore from '@/store/store'
import { Bell } from 'lucide-react'
import type { Me } from '@/types'
import ProfileImage from '@/components/commonInProject/ProfileImage/ProfileImage'

const ProfileButton = ({ me }: { me: Me }) => {
  return (
    <Button color="primary" variant="ghost" size="lg" className="py-oz-sm p-0">
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
