import { Search } from 'lucide-react'
import Input from '../commonInGeneral/inputFamily/input/Input'
import { useEffect, useRef, useState } from 'react'
import useDebounce from '@/hooks/useDebounce'
import useStudyHubStore from '@/store/store'
import { dummyLectureArray } from './dummyLectureArray'

// TODO: 이건 api 연결하면서 삭제해야 함!
const dummySearchApi = (debounceValue: string) => {
  const setLectureArray = useStudyHubStore.getState().setLectureArray

  const filteredLectureArray = dummyLectureArray.filter(
    (lecture) =>
      lecture.title.includes(debounceValue) ||
      lecture.instructor.includes(debounceValue)
  )

  setLectureArray(filteredLectureArray)
}

const LectureSearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [searchText, setSearchText] = useState('')

  const isClearingSearch = useStudyHubStore((state) => state.isClearingSearch)
  const setIsClearingSearch = useStudyHubStore(
    (state) => state.setIsClearingSearch
  )
  const isFocusingSearch = useStudyHubStore((state) => state.isFocusingSearch)
  const setIsFocusingSearch = useStudyHubStore(
    (state) => state.setIsFocusingSearch
  )

  const [devounceValue, cancel] = useDebounce(searchText, 500)

  useEffect(() => {
    dummySearchApi(devounceValue)
  }, [devounceValue])

  useEffect(() => {
    setSearchText('')
    setIsClearingSearch(false)

    if (!inputRef.current) {
      return
    }
    inputRef.current.focus()
    setIsFocusingSearch(false)
  }, [isClearingSearch])

  useEffect(() => {
    if (!inputRef.current) {
      return
    }

    inputRef.current.focus()
    setIsFocusingSearch(false)
  }, [isFocusingSearch])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') {
      return
    }

    cancel()
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
