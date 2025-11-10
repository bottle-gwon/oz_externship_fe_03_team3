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
    // 타겟 요소 없으면 중지
    if (!targetRef.current) return
    const { root = null, threshold = 1.0, rootMargin = '0px' } = options || {}

    //옵저버 없으면 생성
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

    //타겟 관찰
    observerRef.current.observe(targetRef.current)

    return () => {
      // 옵저버 해제 및 초기화
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetRef.current, options])
}

export default useOneWayInfinityScroll
