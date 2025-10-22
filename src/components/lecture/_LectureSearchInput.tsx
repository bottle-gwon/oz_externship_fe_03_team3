import { Search } from 'lucide-react'
import Input from '../commonInGeneral/inputFamily/input/Input'
import { useEffect, useState } from 'react'
import useDebounce from '@/hooks/useDebounce'

// TODO: 이건 api 연결하면서 삭제해야 함!
const dummySearchApi = () => {}

const LectureSearchInput = () => {
  const [searchText, setSearchText] = useState('')
  const [devounceValue, cancel] = useDebounce(searchText, 500)

  useEffect(() => {}, [devounceValue])

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
      icon={<Search size={14} />}
      placeholder="강의명이나 강사명으로 검색..."
      onKeyDown={handleKeyDown}
      onChange={handleChange}
    />
  )
}

export default LectureSearchInput
