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
  }, [devounceValue, onSearch])

  const handleKeydownEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      cancel() //디바운스 취소 후 검색

      onSearch(searchText)
    }
  }

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value.trim())
  }

  return (
    <Vstack className="-mx-6 -mt-6 h-[99px] w-[672px] items-center justify-center border-b border-gray-200">
      <Hstack className="p-oz-md h-[50px] w-[624px] items-center justify-between rounded-md border border-gray-300">
        <Search className="size-4 text-gray-400" />
        <input
          type="text"
          placeholder="태그명으로 검색..."
          className="h-full w-[570px]"
          onKeyDown={handleKeydownEnter}
          onChange={handleKeywordChange}
        />
      </Hstack>
    </Vstack>
  )
}

export default TagSearch
