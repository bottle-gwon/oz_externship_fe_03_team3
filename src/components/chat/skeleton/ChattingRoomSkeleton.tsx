import { Vstack } from '@/components/commonInGeneral/layout'
import Skeleton from '@/components/commonInGeneral/skeleton/Skeleton'

const ChattingRoomSkeleton = () => {
  const sArray = Array.from({ length: 5 }, (_, i) => i + 1)
  return (
    <Vstack>
      {sArray.map((_, i) => (
        <Skeleton key={i} widthInPixel={294} heightInPixel={100} />
      ))}
    </Vstack>
  )
}

export default ChattingRoomSkeleton
