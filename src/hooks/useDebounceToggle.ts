import { useEffect, useState } from 'react'

// NOTE: delay를 설정하지 않으면 500ms로 지정됩니다
const useDebounceToggle = (boolValue: boolean, delay: number = 500) => {
  const [debouncedBoolValue, setDebouncedBoolValue] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedBoolValue(!boolValue), delay)
    return () => clearTimeout(timeout)
  }, [boolValue, delay])

  return { debouncedBoolValue }
}

export default useDebounceToggle
