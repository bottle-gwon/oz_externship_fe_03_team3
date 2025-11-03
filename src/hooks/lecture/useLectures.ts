import type { Lecture, LectureOrderingInText } from '@/types'
import { textToLectureOrdering } from '@/utils/simpleMaps'
import { useQuery } from '@tanstack/react-query'
import { useCallback, useEffect, useState } from 'react'
import api from '@/api/api'
import useDebounce from '../useDebounce'
import { makeUrlFromParams } from '@/utils/urls'

const queryEndpoint = '/lectures'

const useLecturesQuery = () => {
  const [isSearching, setIsSearching] = useState(false)
  const [page, setPage] = useState(0)
  const [searchText, setSearchText] = useState('')
  const [debounceValue, cancel] = useDebounce(searchText, 500)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedOrderingInText, setSelectedOrderingInText] =
    useState<LectureOrderingInText>('최신순')

  const params = {
    page,
    page_size: undefined,
    search: debounceValue,
    category: selectedCategory,
    ordering: textToLectureOrdering[selectedOrderingInText],
  }
  const url = makeUrlFromParams(queryEndpoint, params)

  const { data, isPending, error } = useQuery({
    queryKey: [queryEndpoint, params],
    queryFn: async () => {
      const response = await api.get(url)
      return response.data as Record<string, Lecture[]>
    },
    placeholderData: (previousData) => previousData, // 이 부분이 없으면 새로 fetch -> 기존 것 없어짐 -> 화면 맨 위로 -> 다시 그리게 됩니다
  })

  const getNextPage = useCallback(() => {
    setPage((prev) => prev + 1)
  }, [])

  useEffect(() => {
    setPage(0)

    if (debounceValue === '') {
      setIsSearching(false)
    } else {
      setIsSearching(true)
    }
  }, [debounceValue, selectedCategory, selectedOrderingInText])

  return {
    data,
    isPending,
    error,
    getNextPage,
    searchText,
    setSearchText,
    setSelectedCategory,
    setSelectedOrderingInText,
    isSearching,
    cancel,
  }
}

const useLectures = () => {
  const lecturesQueryReturns = useLecturesQuery()

  return { ...lecturesQueryReturns }
}

export default useLectures
