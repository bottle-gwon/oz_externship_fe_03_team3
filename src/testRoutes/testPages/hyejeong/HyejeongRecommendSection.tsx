import { Vstack } from '@/components/commonInGeneral/layout'
import RecommendSection from '@/components/recommendSection/RecommendSection'
import {
  dummyLectureRecommendArray,
  dummyRecruitRecommendArray,
} from './dummyRecommendArray'

const HyejeongRecommendSection = () => {
  return (
    <Vstack gap="xxl">
      <RecommendSection
        isLoggedIn={false}
        type="lecture"
        recommendedArray={[]}
      />
      <RecommendSection
        isLoggedIn
        type="lecture"
        recommendedArray={dummyLectureRecommendArray}
      />
      <RecommendSection
        isLoggedIn={false}
        type="recruit"
        recommendedArray={[]}
      />
      <RecommendSection
        isLoggedIn
        type="recruit"
        recommendedArray={dummyRecruitRecommendArray}
      />
    </Vstack>
  )
}

export default HyejeongRecommendSection
