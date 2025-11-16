import useStudyHubStore from '@/store/store'
import { useEffect } from 'react'

const useNoSearchResult = (
  inputRef: React.RefObject<HTMLInputElement | null>,
  resetInput: () => void,
  resetSelect: () => void,
  cancelDebounce?: () => void
) => {
  const isResettingFilter = useStudyHubStore((state) => state.isResettingFilter)
  const setIsClearingSearch = useStudyHubStore(
    (state) => state.setIsClearingSearch
  )
  const isResettingInput = useStudyHubStore((state) => state.isResettingInput)
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
  }, [isResettingFilter])

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
  }, [isResettingInput])
}

export default useNoSearchResult
