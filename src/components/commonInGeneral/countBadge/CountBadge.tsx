interface CountBadgeProps {
  isVisible: boolean
  count: number
  // NOTE: 기본값으로는 top-[-8px] right-[-8px] (병권님 IconBadge와 동일)
  topRightClassName?: string
}

// NOTE: IconBadge만 사용하면 글자색을 수정해야 해서 공통 컴포넌트를 만들었습니다
// NOTE: 병권님께서는 교체 시 스타일 수정 없이 사용하실 수 있게 설정해뒀습니다
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
        'bg-danger-500 absolute z-2 flex h-6 min-w-6 items-center justify-center rounded-full p-2 text-xs font-semibold text-white',
      ].join(' ')}
    >
      {count}
    </div>
  )
}

export default CountBadge
