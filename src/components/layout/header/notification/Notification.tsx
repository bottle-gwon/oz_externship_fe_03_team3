import api from '@/api/api'
import Button from '@/components/commonInGeneral/button/Button'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import FlexOneContainer from '@/components/commonInGeneral/layout/_FlexOneContainer'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import type {
  Notification as NotificationBox,
  NotificationsResponseData,
  NotificationType,
} from '@/types/_notificationInterfaces'
import { useQuery } from '@tanstack/react-query'
import dummyNotificationsResponseData from './_dummyNotificationsResponseData'

type NotificationTab = 'all' | 'unread' | 'read'
const typeToLabel: Record<NotificationTab, string> = {
  all: '전체 보기',
  unread: '읽지 않음',
  read: '읽음',
}

const typeToBg: Record<NotificationType, string> = {
  STUDY_JOIN: '',
  STUDY_NOTE_CREATE: '',
  STUDY_REVIEW_REQUEST: '',
  APLLICATION_ACCPET: '',
  APPLICATION_REJECT: '',
  ADD_APPLICATION: '',
  TODY_SCHEDULE: '',
  UPCOMING_SCHEDULE: '',
}

const NotificationIcon = ({ type }: { type: NotificationType }) => {
  return (
    <div
      className={`${typeToBg[type]} h-8 w-8 rounded-full bg-amber-500`}
    ></div>
  )
}

const NotificationUnreadDot = () => {
  return <div className="bg-primary-500 h-2 w-2 rounded-full" />
}
const NotificationCard = ({
  notification,
}: {
  notification: NotificationBox
}) => {
  return (
    <Hstack
      className={[
        notification.is_read ? '' : 'bg-primary-50',
        'p-oz-lg items-center border-b border-b-gray-100 last:border-b-0',
      ].join(' ')}
    >
      <NotificationIcon type={notification.type} />
      <p className="grow">{notification.content}</p>
      {!notification.is_read && <NotificationUnreadDot />}
    </Hstack>
  )
}

const NotificationTab = ({
  tab,
  isSelected,
}: {
  tab: NotificationTab
  isSelected?: boolean
}) => {
  return (
    <Button
      variant="ghost"
      color={isSelected ? 'primary' : 'mono'}
      shape="spread"
      className={['py-oz-md', isSelected ? '' : 'text-gray-500'].join(' ')}
    >
      {typeToLabel[tab]}
    </Button>
  )
}

const NotificationBox = () => {
  // const endpoint = '/notifications'
  // const { data } = useQuery({
  //   queryKey: [endpoint],
  //   queryFn: async () => {
  //     const response = await api.get(endpoint)
  //     return response.data as NotificationsResponseData
  //   },
  // })

  const data = dummyNotificationsResponseData

  return (
    <RoundBox padding="none">
      <Vstack className="h-[475px] w-[384px] gap-0 overflow-hidden">
        <Hstack className="p-oz-lg items-center justify-between border-b border-b-gray-200">
          <h2 className="text-lg font-semibold">알림</h2>
          <Button color="primary" variant="ghost" shape="slim">
            모두 읽음
          </Button>
        </Hstack>

        <div className="grid grid-cols-3 border-b border-b-gray-200">
          <NotificationTab tab="all" isSelected />
          <NotificationTab tab="unread" />
          <NotificationTab tab="read" />
        </div>

        <FlexOneContainer isYScrollable className="border-b border-b-gray-200">
          {data?.results.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
            />
          ))}
        </FlexOneContainer>

        <div className="h-[45px] bg-gray-50" />
      </Vstack>
    </RoundBox>
  )
}

export default NotificationBox
