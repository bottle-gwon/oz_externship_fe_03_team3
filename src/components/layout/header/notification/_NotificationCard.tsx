import { Hstack } from '@/components/commonInGeneral/layout'
import type {
  Notification,
  NotificationType,
} from '@/types/_notificationInterfaces'

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
      className={`${typeToBg[type]} h-8 max-w-8 min-w-8 rounded-full bg-amber-500`}
    ></div>
  )
}

const NotificationUnreadDot = () => {
  return <div className="bg-primary-500 h-2 w-2 min-w-2 rounded-full" />
}

const NotificationCard = ({ notification }: { notification: Notification }) => {
  return (
    <Hstack
      className={[
        notification.is_read
          ? 'hover:bg-gray-50 active:bg-gray-100'
          : 'bg-primary-50 hover:bg-primary-100 active:bg-primary-200',
        'p-oz-lg items-center border-b border-b-gray-100 transition last:border-b-0',
      ].join(' ')}
    >
      <NotificationIcon type={notification.type} />
      <p className="grow">{notification.content}</p>
      {!notification.is_read && <NotificationUnreadDot />}
    </Hstack>
  )
}

export default NotificationCard
