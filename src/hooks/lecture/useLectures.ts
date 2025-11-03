import type {
  Lecture,
  LectureOrderingInText,
  LecturesResponseData,
} from '@/types'
import { textToLectureOrdering } from '@/utils/simpleMaps'
import { useQuery } from '@tanstack/react-query'
import { useCallback, useEffect, useState } from 'react'
import api from '@/api/api'
import useDebounce from '../useDebounce'
import { makeUrlFromParams } from '@/utils/urls'
import useStudyHubStore from '@/store/store'

const queryEndpoint = '/lectures'

const useLecturesQuery = () => {
  const [isSearching, setIsSearching] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [debounceValue, cancel] = useDebounce(searchText, 500)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedOrderingInText, setSelectedOrderingInText] =
    useState<LectureOrderingInText>('최신순')
  const setLectureArray = useStudyHubStore((state) => state.setLectureArray)
  const appendLectureArray = useStudyHubStore(
    (state) => state.appendLectureArray
  )
  const [nextUrlInKey, setNextUrlInKey] = useState<string | null>(null)
  const [nextUrlInReady, setNextUrlInReady] = useState<string | null>(null)

  const params = {
    page_size: undefined,
    search: debounceValue,
    category: selectedCategory,
    ordering: textToLectureOrdering[selectedOrderingInText],
  }
  const url = makeUrlFromParams(queryEndpoint, params)

  const { data, isPending, error } = useQuery({
    queryKey: [queryEndpoint, params, nextUrlInKey],
    queryFn: async () => {
      const response = await api.get(nextUrlInKey ?? url)
      return response.data as LecturesResponseData
    },
    placeholderData: (previousData) => previousData, // 이 부분이 없으면 새로 fetch -> 기존 것 없어짐 -> 화면 맨 위로 -> 다시 그리게 됩니다
  })

  useEffect(() => {
    setLectureArray([])
    setNextUrlInReady(null)

    if (debounceValue === '') {
      setIsSearching(false)
    } else {
      setIsSearching(true)
    }
  }, [debounceValue, selectedCategory, selectedOrderingInText, setLectureArray])

  useEffect(() => {
    if (!data) {
      return
    }
    appendLectureArray(data.results ?? [])
    setNextUrlInReady(data.next)
  }, [data, appendLectureArray])

  const requestNextPage = useCallback(
    () => setNextUrlInKey(nextUrlInReady),
    [nextUrlInReady]
  )

  return {
    isPending,
    error,
    searchText,
    setSearchText,
    setSelectedCategory,
    setSelectedOrderingInText,
    isSearching,
    cancel,
    requestNextPage,
  }
}

const useLectures = () => {
  const lecturesQueryReturns = useLecturesQuery()

  return { ...lecturesQueryReturns }
}

export default useLectures
