import type { Lecture, LecturesResponseData } from '@/types'
import { textToLectureOrdering } from '@/utils/simpleMaps'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import api from '@/api/api'
import { makeUrlFromParams } from '@/utils/urls'
import useLectureStore from '@/store/lecture/lectureStore'

const queryEndpoint = '/lectures'

const useLecturesQuery = () => {
  const debounceValue = useLectureStore((state) => state.debounceValue)
  const selectedCategory = useLectureStore((state) => state.selectedCategory)
  const selectedOrderingInText = useLectureStore(
    (state) => state.selectedOrderingInText
  )
  const setLectureArray = useLectureStore((state) => state.setLectureArray)
  const setRequestNextPage = useLectureStore(
    (state) => state.setRequestNextPage
  )

  const paramsWithoutPage = {
    page_size: 12,
    search: debounceValue,
    category: selectedCategory,
    ordering: textToLectureOrdering[selectedOrderingInText],
  }

  const { data, isPending, error, fetchNextPage } = useInfiniteQuery({
    queryKey: [queryEndpoint],
    queryFn: async ({ pageParam }) => {
      const params = { ...paramsWithoutPage, page: pageParam }
      const url = makeUrlFromParams(queryEndpoint, params)
      const response = await api.get(url) // NOTE: 실제 쿼리는 in ready를 사용함
      return response.data as LecturesResponseData
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _allPages, lastPageParam) =>
      lastPage.next ? lastPageParam + 1 : null,
  })

  useEffect(() => {
    if (!data) {
      return
    }

    const lectureArray = data.pages.reduce((acc: Lecture[], page) => {
      return [...acc, ...page.results]
    }, [])
    setLectureArray(lectureArray)
  }, [data, setLectureArray])

  useEffect(() => {
    setRequestNextPage(fetchNextPage)
  }, [setRequestNextPage, fetchNextPage])

  return {
    isPending,
    error,
  }
}

export default useLecturesQuery
