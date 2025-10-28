import { Hstack } from '@/components/commonInGeneral/layout'
import { Search } from 'lucide-react'

const RecruitSearchInput = () => {
  return (
    <Hstack
      gap="none"
      className="p-oz-md mb-oz-xl h-[50px] w-[448px] items-center rounded-md border border-gray-300 bg-white"
    >
      <Search className="size-4 text-gray-400" />
      <input
        type="text"
        placeholder="공고 제목으로 검색..."
        className="m-3 w-full"
      />
    </Hstack>
  )
}

export default RecruitSearchInput
