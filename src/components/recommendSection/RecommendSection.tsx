import type { Recommended, RecommendPageType } from '@/types'
import RecommendGuest from './RecommendGuest'
import RecommendUser from './RecommendUser'

interface RecommendSectionProps<T extends RecommendPageType> {
  type: RecommendPageType
  isLoggedIn: boolean
  recommendedArray: Recommended<T>[]
}

const RecommendSection = <T extends RecommendPageType>({
  type,
  isLoggedIn,
  recommendedArray,
}: RecommendSectionProps<T>) => {
  if (isLoggedIn) {
    return <RecommendUser type={type} recommendedArray={recommendedArray} />
  }

  return <RecommendGuest type={type} />
}

export default RecommendSection
