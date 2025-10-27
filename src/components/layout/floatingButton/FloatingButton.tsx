import { Hstack } from '@/components/commonInGeneral/layout'
import type { Color } from '@/types'
import type { ReactEventHandler, ReactNode } from 'react'
import IconBadge from './Badge'

export interface FloatingIconProps {
  children: ReactNode
  theme?: Color //테마
  badge?: ReactNode //메시지 배지
  onClick?: ReactEventHandler
}

const themeResult = (theme: Color) => {
  // 현재는 위로가기, 채팅만 있기 때문에 두개만 적용합니다.
  // 이후에 필요하시면 자유롭게 추가하시면 됩니다.
  if (!['mono', 'primary'].includes(theme)) {
    return
  }

  switch (theme) {
    case 'mono':
      return 'bg-gray-300 text-white hover:bg-gray-400 active:bg-gray-500'
    case 'primary':
      return 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700'
  }
}
const FloatingButton = ({
  children,
  theme = 'mono',
  badge,
  onClick,
}: FloatingIconProps) => {
  const themeColor = themeResult(theme)
  const badgeValid = !!(badge || badge === 0)

  return (
    <div className="relative h-16 w-16">
      <button
        className={`${themeColor} h-16 w-16 cursor-pointer rounded-full shadow-[0_10px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1)] transition`}
        onClick={onClick}
      >
        <Hstack className="items-center justify-center">{children}</Hstack>

        {/* 배지 존재 하면 출력 */}
        <IconBadge isValid={badgeValid} badgeValue={badge} />
      </button>
    </div>
  )
}

export default FloatingButton
