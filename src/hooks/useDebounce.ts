import { useEffect, useRef, useState } from 'react'

const useDebounce = <T>(value: T, delay: number): [T, () => void] => {
  const [debounceValue, setDebounceValue] = useState<T>(value)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // 타이머 취소 (엔터 이벤트때 사용)
  const cancel = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    setDebounceValue(value)
  }

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebounceValue(value), delay)

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [value, delay])

  return [debounceValue, cancel]
}

export default useDebounce
