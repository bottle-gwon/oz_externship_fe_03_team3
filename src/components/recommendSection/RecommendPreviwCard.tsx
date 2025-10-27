import CircleStar from '../../assets/circle-star.svg'
import { Hstack, Vstack } from '../commonInGeneral/layout'

const RecommendPreviewCard = () => {
  return (
    <Vstack
      padding="lg"
      className="relative h-[142px] w-full rounded-lg border border-gray-200/70 bg-white/50"
    >
      <div className="absolute -top-1 -right-1">
        <img src={CircleStar} />
      </div>

      <Hstack gap="md">
        <div className="h-8 w-12 rounded-sm bg-gray-100/90"></div>
        <Vstack gap="xs">
          <div className="h-4 w-52 rounded-sm bg-gray-100/90"></div>
          <div className="h-3 w-36 rounded-sm bg-gray-100/90"></div>
        </Vstack>
      </Hstack>
      <Vstack gap="sm">
        <div className="h-3 w-80 rounded-sm bg-gray-100/90"></div>
        <div className="h-3 w-56 rounded-sm bg-gray-100/90"></div>
      </Vstack>
      <Hstack gap="xs">
        <div className="bg-primary-100/60 h-5 w-12 rounded-sm"></div>
        <div className="bg-primary-100/60 h-5 w-16 rounded-sm"></div>
      </Hstack>
    </Vstack>
  )
}

export default RecommendPreviewCard
