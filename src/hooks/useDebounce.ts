import { useEffect, useRef, useState } from 'react'

const useDebounce = <T>(value: T, delay: number): [T, () => void] => {
  const [debounceValue, setDebounceValue] = useState<T>(value)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // 타이머 취소 (엔터 이벤트때 사용)
  const cancel = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    setDebounceValue(value) // <<---- 병권님께 여쭤보기: 취소할 때 값을 갱신하면 사용할 땐 debounceValue만 감지하면 될 것 같습니다!
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
