import FruitContent from './FruitContent'
import FruitSkeleton from './FruitSkeleton'
import useFruit from './useFruit'

const FruitPage = () => {
  const { isPendingFruit } = useFruit()
  if (isPendingFruit) {
    return <FruitSkeleton />
  }

  return <FruitContent />
}

export default FruitPage
