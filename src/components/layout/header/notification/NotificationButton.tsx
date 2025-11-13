import Button from '@/components/commonInGeneral/button/Button'
import Dropdown from '@/components/commonInGeneral/dropdown/Dropdown'
import Skeleton from '@/components/commonInGeneral/skeleton/Skeleton'
import { Bell } from 'lucide-react'
import { Suspense } from 'react'
import NotificationBox from './_NotificationBox'
import useNotificationStore from '@/store/notification/notificationStore'
import useNotificationsQuery from '@/hooks/notification/useNotificationsQuery'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'

const NotificationButton = () => {
  const notificationArray = useNotificationStore(
    (state) => state.notificationArray
  )
  const selectedTab = useNotificationStore((state) => state.selectedTab)

  const { isPending, error } = useNotificationsQuery()

  const isShowingSkeleton =
    isPending && notificationArray.length === 0 && selectedTab === 'all'

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Button variant="ghost" size="lg">
          <Bell />
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        {/* NOTE: 읽음, 읽지 않음 탭에선 전체 알림을 필터링한 것을 스켈레톤 대용으로 사용하기에 스켈레톤이 필요 없습니다 */}
        {isShowingSkeleton && (
          <Skeleton heightInPixel={475} widthInPixel={384} />
        )}
        {/* TODO: 여기 에러 컴포넌트도 작게 만들어야 함 */}
        {error && <RoundBox>알 수 없는 에러가 발생했습니다</RoundBox>}
        <Suspense
          fallback={<Skeleton heightInPixel={475} widthInPixel={384} />}
        >
          <NotificationBox />
        </Suspense>
      </Dropdown.Content>
    </Dropdown>
  )
}

export default NotificationButton
