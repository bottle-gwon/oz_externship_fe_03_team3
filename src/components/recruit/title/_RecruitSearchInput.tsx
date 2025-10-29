import Input from '@/components/commonInGeneral/inputFamily/input/Input'
import useNoSearchResult from '@/hooks/useNoSearchResult'
import { Search } from 'lucide-react'
import { useRef } from 'react'

interface RecruitSearchInputProps {
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
  cancelDebounce: () => void
}

const RecruitSearchInput = ({
  searchText,
  setSearchText,
  cancelDebounce,
}: RecruitSearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  useNoSearchResult(inputRef, setSearchText, cancelDebounce)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') {
      return
    }

    cancelDebounce()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  return (
    <Input
      ref={inputRef}
      icon={<Search size={14} />}
      placeholder="공고 제목으로 검색..."
      onKeyDown={handleKeyDown}
      value={searchText}
      onChange={handleChange}
      className="mb-oz-xl h-[50px] w-[40%]"
    />
  )
}

export default RecruitSearchInput
