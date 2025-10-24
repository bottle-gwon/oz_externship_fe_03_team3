import Img from '@/components/commonInProject/img/Img'
import UserRound from '@/assets/user-round.svg'

export type UrlType = string | null
export type ImageSizeType = 'sm' | 'lg' | 'xl'
export interface ProfileImageProps {
  url: UrlType
  size?: ImageSizeType
}

const makeImageSizeResult = (size: ImageSizeType) => {
  switch (size) {
    case 'sm':
      return 'h-8 w-8'
    case 'lg':
      return 'h-12 w-12'
    case 'xl':
      return 'h-16 w-16'
  }
}

const ProfileImage = ({ url, size = 'sm' }: ProfileImageProps) => {
  const paddingClass = url ? '' : 'p-oz-sm'

  return (
    <div className={makeImageSizeResult(size)}>
      <Img
        src={url || UserRound}
        fallbackImageUrl={UserRound}
        className={`bg-primary-100 h-full w-full rounded-full ${paddingClass}`}
      />
    </div>
  )
}

export default ProfileImage
