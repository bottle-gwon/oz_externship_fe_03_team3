import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import useDebounce from '@/hooks/useDebounce'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'

interface search {
  onSearch: (tagName: string) => void
}

const TagSearch = ({ onSearch }: search) => {
  const [searchText, setSearchText] = useState('')
  const [devounceValue, cancel] = useDebounce(searchText, 500)

  useEffect(() => {
    onSearch(devounceValue)
  }, [devounceValue])

  const handleKeydownEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      cancel() //디바운스 취소 후 검색

      onSearch(searchText)
    }
  }

  return (
    <Vstack className="h-[99px] w-[672px] justify-center border-b border-gray-200 px-6">
      <Hstack className="p-oz-md h-[50px] w-[624px] items-center justify-between rounded-md border border-gray-300">
        <Search className="size-4 text-gray-400" />
        <input
          type="text"
          placeholder="태그명으로 검색..."
          className="h-full w-[570px]"
          onKeyDown={handleKeydownEnter}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Hstack>
    </Vstack>
  )
}

export default TagSearch
