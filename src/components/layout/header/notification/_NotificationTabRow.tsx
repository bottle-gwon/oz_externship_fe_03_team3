import Button from '@/components/commonInGeneral/button/Button'
import useNotificationStore from '@/store/notification/notificationStore'
import { notificationTabArray, type NotificationTab } from '@/types'

const tabToLabel: Record<NotificationTab, string> = {
  all: '전체 보기',
  unread: '읽지 않음',
  read: '읽음',
}

const NotificationTabUnderline = () => {
  // TODO: isSelected 받아서 애니메이션 넣어야
  return <div className="bg-primary-500 absolute bottom-0 h-[2px] w-full" />
}

const NotificationTab = ({
  tab,
  isSelected,
}: {
  tab: NotificationTab
  isSelected?: boolean
}) => {
  const setSelectedTab = useNotificationStore((state) => state.setSelectedTab)
  const notificationCounts = useNotificationStore(
    (state) => state.notificationCounts
  )

  const countText =
    notificationCounts && notificationCounts[tab]
      ? ` (${notificationCounts[tab]})`
      : ''

  return (
    <div className="relative">
      <Button
        variant="ghost"
        color={isSelected ? 'primary' : 'mono'}
        shape="spread"
        className={[isSelected ? '' : 'text-gray-500', 'py-oz-md w-full'].join(
          ' '
        )}
        onClick={() => setSelectedTab(tab)}
      >
        {`${tabToLabel[tab]}${countText}`}
      </Button>
      {isSelected && <NotificationTabUnderline />}
    </div>
  )
}

const NotificationTabRow = () => {
  const selectedTab = useNotificationStore((state) => state.selectedTab)
  const isSelectedArray = notificationTabArray.map((tab) => tab === selectedTab)

  return (
    <div className="grid grid-cols-3 border-b border-b-gray-200">
      {notificationTabArray.map((notification, index) => (
        <NotificationTab
          key={notification}
          tab={notification}
          isSelected={isSelectedArray[index]}
        />
      ))}
    </div>
  )
}

export default NotificationTabRow
