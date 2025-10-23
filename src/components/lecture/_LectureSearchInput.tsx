import { Search } from 'lucide-react'
import Input from '../commonInGeneral/inputFamily/input/Input'
import { useRef } from 'react'
import useNoSearchResult from '@/hooks/useNoSearchResult'

interface LectureSearchInputProps {
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
  cancelDebounce: () => void
}

const LectureSearchInput = ({
  searchText,
  setSearchText,
  cancelDebounce,
}: LectureSearchInputProps) => {
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
      placeholder="강의명이나 강사명으로 검색..."
      onKeyDown={handleKeyDown}
      value={searchText}
      onChange={handleChange}
    />
  )
}

export default LectureSearchInput
