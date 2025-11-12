import { Vstack } from '@/components/commonInGeneral/layout'
import Skeleton from '@/components/commonInGeneral/skeleton/Skeleton'

const ManageDetailSkeleton = () => {
  return (
    <Vstack gap="xl">
      <Skeleton heightInPixel={128} />
      <Skeleton heightInPixel={80} />

      {Array.from({ length: 5 }).map((_, idx) => (
        <Vstack gap="sm" key={idx}>
          <Skeleton heightInPixel={20} widthInPixel={70} />
          <Skeleton heightInPixel={80} />
        </Vstack>
      ))}
    </Vstack>
  )
}

export default ManageDetailSkeleton
