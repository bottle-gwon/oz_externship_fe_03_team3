import { Vstack } from '@/components/commonInGeneral/layout'
import TagSkeletonCard from './TagSkeletonCard'
import Skeleton from '@/components/commonInGeneral/skeleton/Skeleton'

const TagSkeleton = () => {
  const skeletonArray = Array.from({ length: 5 }, (_, i) => i + 1)
  return (
    <Vstack padding="xl" gap="sm" className="items-center justify-center">
      <Skeleton widthInPixel={135} heightInPixel={23} className="self-start" />
      {skeletonArray.map((_, i) => (
        <TagSkeletonCard key={i} />
      ))}
    </Vstack>
  )
}

export default TagSkeleton
