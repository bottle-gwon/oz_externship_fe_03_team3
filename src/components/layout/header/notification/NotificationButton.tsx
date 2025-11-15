import Button from '@/components/commonInGeneral/button/Button'
import Dropdown from '@/components/commonInGeneral/dropdown/Dropdown'
import Skeleton from '@/components/commonInGeneral/skeleton/Skeleton'
import { Bell } from 'lucide-react'
import { Suspense } from 'react'
import NotificationBox from './_NotificationBox'
import useNotificationStore from '@/store/notification/notificationStore'
import useNotificationsQuery from '@/hooks/notification/useNotificationsQuery'
import CountBadge from '@/components/commonInGeneral/countBadge/CountBadge'
import NotificationSkeleton from './_NotificationSkeleton'

const NotificationButton = () => {
  const allNotificationArray = useNotificationStore(
    (state) => state.allNotificationArray
  )
  const selectedTab = useNotificationStore((state) => state.selectedTab)
  const notificationCounts = useNotificationStore(
    (state) => state.notificationCounts
  )
  const hasBeenOpened = useNotificationStore((state) => state.hasBeenOpened)

  const { isPending } = useNotificationsQuery()

  // NOTE: 에러 컴포넌트를 확인할 때 아래를 주석 처리 해주세요
  const isShowingSkeleton =
    isPending && !hasBeenOpened && selectedTab === 'total'
  // ---- 여기까지

  // NOTE: 에러 컴포넌틀 확인할 때 아래 주석을 해제해주세요
  // const isShowingSkeleton = false
  // const isShowingError = true
  // ---- 여기까지

  const unreadCount = notificationCounts?.unread ?? 0

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <div className="relative">
          <Button variant="ghost">
            <Bell />
          </Button>
          <CountBadge
            isVisible={Boolean(unreadCount)}
            count={unreadCount}
            topRightClassName="top-[-6px] right-0"
          />
        </div>
      </Dropdown.Trigger>
      <Dropdown.Content>
        {/* NOTE: 읽음, 읽지 않음 탭에선 전체 알림을 필터링한 것을 스켈레톤 대용으로 사용하기에 스켈레톤이 필요 없습니다 */}
        {isShowingSkeleton && <NotificationSkeleton />}
        {!isShowingSkeleton && (
          <Suspense fallback={<NotificationSkeleton />}>
            <NotificationBox />
          </Suspense>
        )}
      </Dropdown.Content>
    </Dropdown>
  )
}

export default NotificationButton
