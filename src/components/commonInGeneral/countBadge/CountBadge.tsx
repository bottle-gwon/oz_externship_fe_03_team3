interface CountBadgeProps {
  isVisible: boolean
  count: number
  topRightClassName?: string
}

const CountBadge = ({
  isVisible,
  count,
  topRightClassName,
}: CountBadgeProps) => {
  if (!isVisible) {
    return
  }

  return (
    <div
      className={[
        topRightClassName ? topRightClassName : 'top-[-8px] right-[-8px]',
        'bg-danger-500 absolute flex h-6 min-w-6 items-center justify-center rounded-full p-2 text-xs font-semibold text-white',
      ].join(' ')}
    >
      {count}
    </div>
  )
}

export default CountBadge
