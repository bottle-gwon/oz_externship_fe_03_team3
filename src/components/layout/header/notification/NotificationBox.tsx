import Button from '@/components/commonInGeneral/button/Button'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import FlexOneContainer from '@/components/commonInGeneral/layout/_FlexOneContainer'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import NotificationCard from './_NotificationCard'
import NotificationTabRow from './_NotificationTabRow'
import useNotificationsQuery from '@/hooks/notification/useNotificationsQuery'
import useNotificationMutation from '@/hooks/notification/useNotificationsMutation'
import useNotificationStore from '@/store/notification/notificationStore'
import Skeleton from '@/components/commonInGeneral/skeleton/Skeleton'
import useOneWayInfinityScroll from '@/hooks/useOneWayInfinityScroll'
import { useRef } from 'react'

const NotificationBox = () => {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const targetRef = useRef<HTMLDivElement | null>(null)
  const notificationArray = useNotificationStore(
    (state) => state.notificationArray
  )

  const { isPending, error, hasNextPage, fetchNextPage } =
    useNotificationsQuery()
  const { patchAllMutation } = useNotificationMutation()
  useOneWayInfinityScroll(targetRef, fetchNextPage, {
    threshold: 0,
    root: rootRef.current,
    rootMargin: '0px 0px 300px 0px',
  })

  return (
    <RoundBox
      padding="none"
      className="overflow-hidden shadow-[0_25px_50px_-12px_rgb(0_0_0_/_0.25)]"
    >
      <Vstack className="h-[475px] w-[384px] gap-0 overflow-hidden">
        <Hstack className="p-oz-lg items-center justify-between border-b border-b-gray-200">
          <h2 className="text-lg font-semibold">알림</h2>
          <Button
            color="primary"
            variant="ghost"
            shape="slim"
            onClick={() =>
              patchAllMutation.mutate({ data: undefined, newOne: undefined })
            }
          >
            모두 읽음
          </Button>
        </Hstack>

        <NotificationTabRow />

        <FlexOneContainer
          isYScrollable={!isPending}
          className="border-b border-b-gray-200"
          ref={rootRef}
        >
          {isPending && notificationArray.length === 0 && (
            <Skeleton heightInPixel={340} className="w-full" />
          )}
          {error && <p>에러가 발생했을 때 보입니다. 추후 수정해야 합니다</p>}

          {notificationArray.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
            />
          ))}
          {hasNextPage && <div ref={targetRef} />}
        </FlexOneContainer>
        <div className="h-[45px] bg-gray-50" />
      </Vstack>
    </RoundBox>
  )
}

export default NotificationBox
