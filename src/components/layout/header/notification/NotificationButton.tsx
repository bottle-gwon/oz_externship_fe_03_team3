import Button from '@/components/commonInGeneral/button/Button'
import Dropdown from '@/components/commonInGeneral/dropdown/Dropdown'
import Skeleton from '@/components/commonInGeneral/skeleton/Skeleton'
import { Bell } from 'lucide-react'
import { Suspense } from 'react'
import NotificationBox from './_NotificationBox'
import useNotificationStore from '@/store/notification/notificationStore'
import useNotificationsQuery from '@/hooks/notification/useNotificationsQuery'
import CountBadge from '@/components/commonInGeneral/countBadge/CountBadge'
import NotificationErrorContent from './NotificationErrorContent'

const NotificationButton = () => {
  const notificationArray = useNotificationStore(
    (state) => state.notificationArray
  )
  const selectedTab = useNotificationStore((state) => state.selectedTab)
  const notificationCounts = useNotificationStore(
    (state) => state.notificationCounts
  )

  const { isPending, error } = useNotificationsQuery()

  // NOTE: 에러 컴포넌트를 확인할 때 아래를 주석 처리 해주세요
  const isShowingSkeleton =
    isPending && notificationArray.length === 0 && selectedTab === 'total'
  const isShowingError = error && notificationArray.length === 0
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
        {isShowingSkeleton && (
          <Skeleton heightInPixel={475} widthInPixel={384} />
        )}
        {isShowingError && <NotificationErrorContent />}
        {!isShowingSkeleton && !isShowingError && (
          <Suspense
            fallback={<Skeleton heightInPixel={475} widthInPixel={384} />}
          >
            <NotificationBox />
          </Suspense>
        )}
      </Dropdown.Content>
    </Dropdown>
  )
}

export default NotificationButton
