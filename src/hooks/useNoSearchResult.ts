import useStudyHubStore from '@/store/store'
import { useEffect } from 'react'

const useNoSearchResult = (
  inputRef: React.RefObject<HTMLInputElement | null>,
  resetInput: () => void,
  resetSelect: () => void,
  cancelDebounce?: () => void
) => {
  // NOTE: 필터 초기화
  const isClearingSearch = useStudyHubStore((state) => state.isClearingSearch)
  const setIsClearingSearch = useStudyHubStore(
    (state) => state.setIsClearingSearch
  )
  // NOTE: 검색만 초기화
  const isFocusingSearch = useStudyHubStore((state) => state.isFocusingSearch)
  const setIsFocusingSearch = useStudyHubStore(
    (state) => state.setIsFocusingSearch
  )

  useEffect(() => {
    resetInput()
    resetSelect()
    setIsClearingSearch(false)

    if (!inputRef.current) {
      return
    }
    inputRef.current.focus()
    setIsFocusingSearch(false)

    if (cancelDebounce) {
      cancelDebounce()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClearingSearch])

  useEffect(() => {
    if (!inputRef.current) {
      return
    }

    resetInput()
    inputRef.current.focus()
    setIsFocusingSearch(false)

    if (cancelDebounce) {
      cancelDebounce()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocusingSearch])
}

export default useNoSearchResult
