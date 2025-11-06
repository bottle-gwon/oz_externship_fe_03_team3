import CalendarWithDotIcon from '@/assets/CalendarWithDotIcon'
import UsersThreeIcon from '@/assets/UsersThreeIcon'
import { Hstack } from '@/components/commonInGeneral/layout'
import type {
  Notification,
  NotificationType,
} from '@/types/_notificationInterfaces'
import {
  CalendarCheck,
  Check,
  Settings,
  UserCog,
  UserPlus,
  X,
} from 'lucide-react'
import NoteWithPen from '@/assets/note-with-pen.svg'
import CalendarWithLine from '@/assets/calendar-with-line.svg'
import useNotificationMutation from '@/hooks/notification/useNotificationsMutation'

const typeToBg: Record<NotificationType, string> = {
  APPLICATION_CREATED: 'bg-[#DBEAFE]',
  APPLICATION_STATUS_APPROVAL: 'bg-[#DCFCE7]',
  APPLICATION_STATUS_REJECTION: 'bg-[#FEE2E2]',
  STUDY_MEMBER_JOINED: 'bg-[#F3E8FF]',
  STUDY_REVIEW_REQUEST: 'bg-[#FFEDD5]',
  STUDY_SCHEDULE_UPCOMING: 'bg-[#E0E7FF]',
  STUDY_SCHEDULE_TODAY: 'bg-[#FCE7F3]',
  STUDY_RECORD_CREATED: 'bg-[#CCFBF1]',
  SYSTEM: 'bg-gray-100',
  CUSTOM: 'bg-gray-100',
}
const TypeToIcon = {
  APPLICATION_CREATED: <UserPlus size={14} color="#2563EB" />,
  APPLICATION_STATUS_APPROVAL: <Check size={14} color="#16A34A" />,
  APPLICATION_STATUS_REJECTION: <X size={14} color="#DC2626" />,
  STUDY_MEMBER_JOINED: <UsersThreeIcon color="#9333EA" className="size-3" />,
  STUDY_REVIEW_REQUEST: <CalendarCheck size={14} color="#EA580C" />,
  STUDY_SCHEDULE_UPCOMING: (
    <CalendarWithDotIcon color="#4F46E5" className="size-3" />
  ),
  STUDY_SCHEDULE_TODAY: <img src={CalendarWithLine} />,
  STUDY_RECORD_CREATED: <img src={NoteWithPen} />,
  SYSTEM: <Settings size={14} color="var(--color-gray-900)" />,
  CUSTOM: <UserCog size={14} color="var(--color-gray-900)" />,
}

const NotificationIcon = ({ type }: { type: NotificationType }) => {
  return (
    <div
      className={`${typeToBg[type]} flex h-8 max-w-8 min-w-8 items-center justify-center rounded-full`}
    >
      {TypeToIcon[type]}
    </div>
  )
}

const NotificationUnreadDot = () => {
  return <div className="bg-primary-500 h-2 w-2 min-w-2 rounded-full" />
}

const NotificationCard = ({ notification }: { notification: Notification }) => {
  const { patchSingleMutation } = useNotificationMutation()
  const handleClick = () => {
    if (notification.is_read) {
      return
    }

    const newOne: Notification = { ...notification, is_read: true }
    patchSingleMutation.mutate({ data: notification, newOne })

    window.location.href = notification.back_url_link
  }

  return (
    <Hstack
      className={[
        notification.is_read
          ? 'hover:bg-gray-50 active:bg-gray-100'
          : 'bg-primary-50 hover:bg-primary-100 active:bg-primary-200',
        'p-oz-lg items-center border-b border-b-gray-100 transition last:border-b-0',
      ].join(' ')}
      onClick={handleClick}
    >
      <NotificationIcon type={notification.type} />
      <p className="grow">{notification.content}</p>
      {!notification.is_read && <NotificationUnreadDot />}
    </Hstack>
  )
}

export default NotificationCard
