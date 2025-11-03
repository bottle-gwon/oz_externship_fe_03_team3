import type { Lecture, LectureOrderingInText } from '@/types'
import { textToLectureOrdering } from '@/utils/simpleMaps'
import { useQuery } from '@tanstack/react-query'
import { useCallback, useEffect, useState } from 'react'
import api from '@/api/api'
import useDebounce from '../useDebounce'

const queryEndpoint = '/lectures'

const useLecturesQuery = () => {
  const [isSearching, setIsSearching] = useState(false)
  const [page, setPage] = useState(0)
  const [searchText, setSearchText] = useState('')
  const [debounceValue, cancel] = useDebounce(searchText, 500)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedOrderingInText, setSelectedOrderingInText] =
    useState<LectureOrderingInText>('최신순')

  useEffect(() => {
    if (debounceValue === '') {
      setIsSearching(false)
    } else {
      setIsSearching(true)
    }
  }, [debounceValue, selectedCategory, selectedOrderingInText])

  const params = {
    page,
    page_size: undefined,
    search: searchText,
    category: selectedCategory,
    ordering: textToLectureOrdering[selectedOrderingInText],
  }
  const filteredParams = Object.fromEntries(
    Object.entries(params)
      .filter((entry) => entry[1])
      .map((entry) => [entry[0], String(entry[1])])
  )
  const searchParams = new URLSearchParams(filteredParams)

  const url = `${queryEndpoint}/?${searchParams.toString()}`

  const {
    data: lectureArray,
    isPending,
    error,
  } = useQuery({
    queryKey: [queryEndpoint, params],
    queryFn: async () => {
      const response = await api.get(url)
      return response.data.results as Lecture[]
    },
  })

  const getNextPage = useCallback(() => {
    setPage((prev) => prev + 1)
  }, [])

  return {
    lectureArray,
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
