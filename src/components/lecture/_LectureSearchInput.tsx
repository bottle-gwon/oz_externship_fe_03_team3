import { Search } from 'lucide-react'
import Input from '../commonInGeneral/inputFamily/input/Input'
import { useEffect, useRef } from 'react'
import useNoSearchResult from '@/hooks/useNoSearchResult'
import useLectureStore from '@/store/lecture/lectureStore'
import useDebounce from '@/hooks/useDebounce'

const LectureSearchInput = () => {
  const searchText = useLectureStore((state) => state.searchText)
  const setSearchText = useLectureStore((state) => state.setSearchText)
  const setDebounceValue = useLectureStore((state) => state.setDebounceValue)

  const [debounceValue, cancelDebounce] = useDebounce(searchText, 500)
  const inputRef = useRef<HTMLInputElement>(null)
  useNoSearchResult(inputRef, setSearchText, cancelDebounce)

  useEffect(() => {
    setDebounceValue(debounceValue)
  }, [debounceValue, setDebounceValue])

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
