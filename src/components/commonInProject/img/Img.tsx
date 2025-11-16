import type { ImgProps } from '@/types'
import recruitNoImage from '@/assets/no-image.png'

const placeholder = recruitNoImage

interface WithImgProps {
  isWide?: boolean
  fallbackImageUrl?: string
}

const Img = ({
  isWide,
  fallbackImageUrl = placeholder,
  ...props
}: ImgProps & WithImgProps) => {
  const { className, ...rest } = props
  const handleLoad: React.ReactEventHandler<HTMLImageElement> = (event) => {
    if (!fallbackImageUrl) {
      return
    }

    const img = event.currentTarget
    if (img.naturalWidth < 50 || img.naturalHeight < 50) {
      img.src = fallbackImageUrl
    }
  }

  const handleError: React.ReactEventHandler<HTMLImageElement> = (event) => {
    if (!fallbackImageUrl) {
      return
    }

    event.currentTarget.src = fallbackImageUrl
  }
  return (
    <img
      {...rest}
      onLoad={handleLoad}
      onError={handleError}
      className={[
        className,
        isWide ? 'aspect-video' : 'aspect-[4/3]',
        'w-full object-cover',
      ].join(' ')}
    />
  )
}

export default Img
