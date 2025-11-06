import Input from '@/components/commonInGeneral/inputFamily/input/Input'
import { Vstack } from '@/components/commonInGeneral/layout'
import useDebounce from '@/hooks/useDebounce'
import useTagStore from '@/store/tag/tagStore'
import { Search } from 'lucide-react'
import { useEffect } from 'react'

interface search {
  onSearch: (tagName: string) => void
}

const TagSearch = ({ onSearch }: search) => {
  const tagSearch = useTagStore((state) => state.tagSearch)
  const setTagSearch = useTagStore((state) => state.setTagSearch)

  const [devounceValue, cancel] = useDebounce(tagSearch, 500)

  useEffect(() => {
    onSearch(devounceValue)
  }, [devounceValue, onSearch])

  const handleKeydownEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      cancel() //디바운스 취소 후 검색

      onSearch(tagSearch)
    }
  }

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagSearch(e.target.value.trim())
  }

  return (
    <Vstack className="-mx-6 -mt-6 h-[99px] w-[672px] items-center justify-center border-b border-gray-200">
      <Input
        icon={<Search className="size-4 text-gray-400" />}
        className="h-[50px] w-[624px]"
        placeholder="태그명으로 검색..."
        value={tagSearch}
        onKeyDown={handleKeydownEnter}
        onChange={handleKeywordChange}
      />
    </Vstack>
  )
}

export default TagSearch
