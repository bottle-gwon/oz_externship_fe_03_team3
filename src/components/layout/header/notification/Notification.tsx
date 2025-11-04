import Button from '@/components/commonInGeneral/button/Button'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import FlexOneContainer from '@/components/commonInGeneral/layout/_FlexOneContainer'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'

type NotificationType = 'all' | 'unread' | 'read'
const typeToLabel: Record<NotificationType, string> = {
  all: '전체 보기',
  unread: '읽지 않음',
  read: '읽음',
}

const NotificationTab = ({
  type,
  isSelected,
}: {
  type: NotificationType
  isSelected?: boolean
}) => {
  return (
    <Button
      variant="ghost"
      color={isSelected ? 'primary' : 'mono'}
      shape="spread"
      className={['py-oz-md', isSelected ? '' : 'text-gray-500'].join(' ')}
    >
      {typeToLabel[type]}
    </Button>
  )
}

const Notification = () => {
  return (
    <RoundBox padding="none">
      <Vstack className="h-[475px] w-[384px] gap-0 overflow-hidden">
        <Hstack className="pg p-oz-lg items-center justify-between border-b border-b-gray-200">
          <h2 className="text-lg font-semibold">알림</h2>
          <Button color="primary" variant="ghost" shape="slim">
            모두 읽음
          </Button>
        </Hstack>

        <div className="grid grid-cols-3 border-b border-b-gray-200">
          <NotificationTab type="all" isSelected />
          <NotificationTab type="unread" />
          <NotificationTab type="read" />
        </div>

        <FlexOneContainer isYScrollable className="border-b border-b-gray-200">
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
        </FlexOneContainer>

        <div className="h-[45px] bg-gray-50" />
      </Vstack>
    </RoundBox>
  )
}

export default Notification
