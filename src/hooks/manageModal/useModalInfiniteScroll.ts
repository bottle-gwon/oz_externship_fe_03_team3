import { useRef, useCallback } from 'react'

interface UseInfiniteScrollOptions {
  hasNextPage: boolean | undefined
  isFetchingNextPage: boolean
  fetchNextPage: () => void
  offset?: number
}

const useModalInfiniteScroll = ({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  offset = 100,
}: UseInfiniteScrollOptions) => {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = useCallback(() => {
    // isFetchingNextPage 중이면 중복 호출을 막기
    if (!scrollRef.current || isFetchingNextPage) return

    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current

    // 현재 스크롤 위치(scrollTop + clientHeight)가 전체 높이(scrollHeight)의 하단 100px 이내로 들어오면 다음 페이지를 요청
    if (scrollTop + clientHeight >= scrollHeight - offset) {
      if (hasNextPage) {
        fetchNextPage()
      }
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, offset])

  return { scrollRef, handleScroll }
}

export default useModalInfiniteScroll
