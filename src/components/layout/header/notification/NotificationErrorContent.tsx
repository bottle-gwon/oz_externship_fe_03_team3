import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'

const NotificationErrorContent = () => {
  return (
    <RoundBox
      color="mono-dim"
      className="gap-oz-xxl flex h-[475px] w-[384px] flex-col items-center justify-center"
    >
      <h2 className="text-primary-500 text-5xl font-bold">Error</h2>
      <p>잠시 후 다시 시도해주세요</p>
    </RoundBox>
  )
}

export default NotificationErrorContent
