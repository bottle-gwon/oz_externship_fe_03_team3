import Skeleton from '@/components/commonInGeneral/skeleton/Skeleton'

const ChatWidgetSkeleton = () => {
  return (
    //  스켈레톤이 투명해서 뒤에 있는 버튼들이 보여서 배경색을 추가 했습니다.
    <div className="fixed right-6 bottom-24 z-2 h-[384px] w-[320px] rounded-lg bg-white">
      <Skeleton
        widthInPixel={320}
        heightInPixel={384}
        radius="lg"
        className="fixed right-6 bottom-24"
      />
    </div>
  )
}

export default ChatWidgetSkeleton
