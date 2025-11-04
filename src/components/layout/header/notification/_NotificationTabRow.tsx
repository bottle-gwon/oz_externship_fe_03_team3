import Button from '@/components/commonInGeneral/button/Button'

type NotificationTab = 'all' | 'unread' | 'read'

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
  return (
    <div className="relative">
      <Button
        variant="ghost"
        color={isSelected ? 'primary' : 'mono'}
        shape="spread"
        className={[isSelected ? '' : 'text-gray-500', 'py-oz-md w-full'].join(
          ' '
        )}
      >
        {tabToLabel[tab]}
      </Button>
      {isSelected && <NotificationTabUnderline />}
    </div>
  )
}

const NotificationTabRow = () => {
  return (
    <div className="grid grid-cols-3 border-b border-b-gray-200">
      <NotificationTab tab="all" isSelected />
      <NotificationTab tab="unread" />
      <NotificationTab tab="read" />
    </div>
  )
}

export default NotificationTabRow
