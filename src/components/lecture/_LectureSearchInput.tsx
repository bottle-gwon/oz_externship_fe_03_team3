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
  const setIsSearching = useLectureStore((state) => state.setIsSearching)

  const [debounceValue, cancelDebounce] = useDebounce(searchText, 500)
  const inputRef = useRef<HTMLInputElement>(null)
  useNoSearchResult(inputRef, setSearchText, cancelDebounce)

  useEffect(() => {
    setDebounceValue(debounceValue)

    // 검색 관련된 로직은 최대한 각 검색란 컴포넌트에서 작성했습니다
    if (debounceValue === '') {
      setIsSearching(false)
    } else {
      setIsSearching(true)
    }
  }, [debounceValue, setDebounceValue, setIsSearching])

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
