import { useEffect, useState } from 'react'

const useDebounceToggle = (boolValue: boolean) => {
  const [debouncedBoolValue, setDebouncedBoolValue] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedBoolValue(!boolValue), 500)
    return () => clearTimeout(timeout)
  }, [boolValue])

  return { debouncedBoolValue }
}

export default useDebounceToggle
