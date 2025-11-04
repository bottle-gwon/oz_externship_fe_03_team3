import Button from '@/components/commonInGeneral/button/Button'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import FlexOneContainer from '@/components/commonInGeneral/layout/_FlexOneContainer'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import dummyNotificationsResponseData from './_dummyNotificationsResponseData'
import NotificationCard from './_NotificationCard'
import NotificationTabRow from './_NotificationTabRow'

const NotificationBox = () => {
  // TODO: 현재 API로는 빈 배열만 받습니다
  // TODO: 익스프레스 서버로 간이 api를 만들어 테스트해야 합니다
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
    <RoundBox
      padding="none"
      className="overflow-hidden shadow-[0_25px_50px_-12px_rgb(0_0_0_/_0.25)]"
    >
      <Vstack className="h-[475px] w-[384px] gap-0 overflow-hidden">
        <Hstack className="p-oz-lg items-center justify-between border-b border-b-gray-200">
          <h2 className="text-lg font-semibold">알림</h2>
          <Button color="primary" variant="ghost" shape="slim">
            모두 읽음
          </Button>
        </Hstack>

        <NotificationTabRow />

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
