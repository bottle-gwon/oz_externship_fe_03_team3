import { useCallback, useEffect, useRef, useState } from 'react'

// NOTE: delay를 설정하지 않으면 500ms로 지정됩니다
const useDebounceToggle = (initialBoolValue: boolean, delay: number = 500) => {
  const firstTimeRef = useRef(false)
  const [realTimeBoolValue, setRealTimeBoolValue] = useState(initialBoolValue)
  const [debouncedBoolValue, setDebouncedBoolValue] = useState(initialBoolValue)

  const toggleBoolValue = useCallback(() => {
    setRealTimeBoolValue((prev) => !prev)
  }, [])

  useEffect(() => {
    setRealTimeBoolValue(initialBoolValue)
  }, [initialBoolValue])

  useEffect(() => {
    // NOTE: 마운트 시의 realTimeBoolValue 감지는 넘어갑니다
    if (!firstTimeRef.current) {
      firstTimeRef.current = true
      return
    }

    // NOTE: 딜레이 이후 realTimeBoolValue와 동기화 합니다
    const timeout = setTimeout(
      () => setDebouncedBoolValue(realTimeBoolValue),
      delay
    )
    return () => clearTimeout(timeout)
  }, [realTimeBoolValue, delay])

  return { debouncedBoolValue, toggleBoolValue, realTimeBoolValue }
}

export default useDebounceToggle
