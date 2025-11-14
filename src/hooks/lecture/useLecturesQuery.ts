import type { Lecture, LecturesResponseData } from '@/types'
import { textToLectureOrdering } from '@/utils/simpleMaps'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import api from '@/api/api'
import useLectureStore from '@/store/lecture/lectureStore'

const queryEndpoint = '/lectures'

// queryFn을 외부에 분리한 함수입니다
const getLecturesByPage = async (
  paramsWithoutPage: object,
  pageParam: number
) => {
  const params = { ...paramsWithoutPage, page: pageParam }
  const response = await api.get(queryEndpoint, { params })
  return response.data as LecturesResponseData
}

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
  const setRecommendedLectureArray = useLectureStore(
    (state) => state.setRecommendedLectureArray
  )
  const paramsWithoutPage = useLectureStore((state) => state.paramsWithoutPage)
  const setParamsWithoutPage = useLectureStore(
    (state) => state.setParamsWithoutPage
  )

  useEffect(() => {
    const storedParamsWithoutPage = {
      page_size: 12,
      search: debounceValue,
      category: selectedCategory,
      ordering: textToLectureOrdering[selectedOrderingInText],
    }
    setParamsWithoutPage(storedParamsWithoutPage)
  }, [
    debounceValue,
    selectedCategory,
    selectedOrderingInText,
    setParamsWithoutPage,
  ])

  const { data, isPending, error, fetchNextPage } = useInfiniteQuery({
    queryKey: [queryEndpoint, paramsWithoutPage],
    queryFn: async ({ pageParam }) =>
      getLecturesByPage(paramsWithoutPage, pageParam),
    initialPageParam: 1,
    // page는 pageParam으로 받은 응답입니다.
    // 지금 상황에선 const lagePage = {previous, next, results, ...} 입니다
    getNextPageParam: (lastPage, _allPages, lastPageParam) =>
      lastPage.next ? lastPageParam + 1 : null,
  })

  useEffect(() => {
    // data의 초깃값은 undefined입니다. 이는 무시합니다
    if (!data) {
      return
    }

    // NOTE: 캐시로 받는 데이터는 페이지별로 구분된 이중 배열로 들어가 있습니다.
    // NOTE: 그리고 이는 data.pages에 저장되어 있습니다
    // NOTE: data.pages = [ [{...}, {...}], [{...}, {...}], [{...}, {...}] ]
    const lectureArray = data.pages.reduce((acc: Lecture[], page) => {
      return [...acc, ...page.results]
    }, [])
    setLectureArray(lectureArray)

    const recommendedLectureArray = data.pages[0].recommended_lectures
    if (!recommendedLectureArray) {
      return
    }
    setRecommendedLectureArray(recommendedLectureArray)
  }, [data, setLectureArray, setRecommendedLectureArray])

  useEffect(() => {
    setRequestNextPage(fetchNextPage)
  }, [setRequestNextPage, fetchNextPage])

  return {
    isPending,
    error,
  }
}

export default useLecturesQuery
