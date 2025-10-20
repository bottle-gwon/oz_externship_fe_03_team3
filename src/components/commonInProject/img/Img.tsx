import type { ImgProps } from '@/types'

const placeholder =
  'https://cdn.shortpixel.ai/spai/q_lossy+ret_img+to_auto/linuxiac.com/wp-content/uploads/2020/06/archlinux-1024x768.jpg'

interface WithImgProps {
  isWide?: boolean
  fallbackImageUrl?: string
}

const Img = ({
  isWide,
  fallbackImageUrl = placeholder,
  ...props
}: ImgProps & WithImgProps) => {
  const wideResult = isWide ? 'aspect-video' : 'aspect-[4/3]'
  const handleLoad: React.ReactEventHandler<HTMLImageElement> = (event) => {
    if (!fallbackImageUrl) {
      return
    }

    const img = event.currentTarget
    if (img.naturalWidth === 0 || img.naturalHeight === 0) {
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
      {...props}
      onLoad={handleLoad}
      onError={handleError}
      className={`${wideResult} w-full object-cover`}
    />
  )
}

export default Img
