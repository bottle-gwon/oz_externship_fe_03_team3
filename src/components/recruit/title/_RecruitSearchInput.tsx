import Input from '@/components/commonInGeneral/inputFamily/input/Input'
import useDebounce from '@/hooks/useDebounce'
import useNoSearchResult from '@/hooks/useNoSearchResult'
// import useNoSearchResult from '@/hooks/useNoSearchResult'
import useRecruitStore from '@/store/recruit/recruitStore'
import { Search } from 'lucide-react'
import { useEffect, useRef } from 'react'

const RecruitSearchInput = () => {
  const searchText = useRecruitStore((state) => state.searchText)
  const setSearchText = useRecruitStore((state) => state.setSearchText)
  const setDebounceValue = useRecruitStore((state) => state.setDebounceValue)

  const setSelectedTag = useRecruitStore((state) => state.setSelectedTag)
  const setSelectedOrderingInText = useRecruitStore(
    (state) => state.setSelectedOrdingInText
  )
  const [debounceValue, cancelDebounce] = useDebounce(searchText, 500)
  const inputRef = useRef<HTMLInputElement>(null)

  const resetSelect = () => {
    setSelectedTag('')
    setSelectedOrderingInText('최신순')
  }
  const resetInput = () => {
    setSearchText('')
  }
  useNoSearchResult(inputRef, resetInput, resetSelect, cancelDebounce)

  useEffect(() => {
    setDebounceValue(debounceValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue])

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
