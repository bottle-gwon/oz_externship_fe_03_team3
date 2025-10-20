import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import { Search } from 'lucide-react'

const TagSearch = () => {
  return (
    <Vstack className="h-[99px] w-[672px] justify-center border-b border-gray-200 px-6">
      <Hstack className="p-oz-md h-[50px] w-[624px] items-center justify-between rounded-md border border-gray-300">
        <Search className="size-4 text-gray-400" />
        <input
          type="text"
          placeholder="태그명으로 검색..."
          className="h-full w-[570px]"
        />
      </Hstack>
    </Vstack>
  )
}

export default TagSearch
