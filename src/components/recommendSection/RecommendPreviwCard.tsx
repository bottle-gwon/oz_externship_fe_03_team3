import CircleStar from '../../assets/circle-star.svg'

const RecommendPreviewCard = () => {
  return (
    <div className="relative h-[142px] w-[372px] gap-2 rounded-lg border border-[#E5E7EB] bg-white p-4">
      <div className="absolute -top-1 -right-1">
        <img src={CircleStar} />
      </div>

      <div className="mb-3 flex">
        <div className="mr-3 h-8 w-12 rounded-sm bg-[#F3F4F6]"></div>
        <div className="flex flex-col">
          <div className="mb-1 h-4 w-52 rounded-sm bg-[#F3F4F6]"></div>
          <div className="h-3 w-36 rounded-sm bg-[#F3F4F6]"></div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="h-3 w-80 rounded-sm bg-[#F3F4F6]"></div>
        <div className="mt-2 h-3 w-56 rounded-sm bg-[#F3F4F6]"></div>
      </div>
      <div className="mt-3 flex gap-1">
        <div className="h-5 w-12 rounded-sm bg-[#FEF9C3]"></div>
        <div className="h-5 w-16 rounded-sm bg-[#FEF9C3]"></div>
      </div>
    </div>
  )
}

export default RecommendPreviewCard
