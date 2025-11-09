import { useEffect, useRef } from 'react'

interface Options {
  root?: HTMLElement | null
  threshold?: number
  rootMargin?: string
}

const useOneWayInfinityScroll = (
  targetRef: React.RefObject<HTMLElement | null>,
  callback: () => void,
  options?: Options
) => {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const target = targetRef.current
    if (!target) return

    const { root = null, threshold = 1.0, rootMargin = '0px' } = options || {}

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            savedCallback.current()
          }
        },
        { root, threshold, rootMargin }
      )
    }

    observerRef.current.observe(target)

    return () => {
      observerRef.current?.disconnect()
      observerRef.current = null
    }
  }, [targetRef.current, options])
}

export default useOneWayInfinityScroll
