import useStudyHubStore from '@/store/store'
import { useEffect } from 'react'

const useNoSearchResult = (
  inputRef: React.RefObject<HTMLInputElement | null>,
  setSearchText: React.Dispatch<React.SetStateAction<string>>,
  cancelDebounce?: () => void
) => {
  const isClearingSearch = useStudyHubStore((state) => state.isClearingSearch)
  const setIsClearingSearch = useStudyHubStore(
    (state) => state.setIsClearingSearch
  )
  const isFocusingSearch = useStudyHubStore((state) => state.isFocusingSearch)
  const setIsFocusingSearch = useStudyHubStore(
    (state) => state.setIsFocusingSearch
  )

  useEffect(() => {
    setSearchText('')
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

    inputRef.current.focus()
    setIsFocusingSearch(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocusingSearch])
}

export default useNoSearchResult
