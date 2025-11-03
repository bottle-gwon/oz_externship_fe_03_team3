import useStudyHubStore from '@/store/store'
import type { LectureOrdering, LectureOrderingInText } from '@/types'
import { textToLectureOrdering } from '@/utils/simpleMaps'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import useDebounce from './useDebounce'
import api from '@/api/api'

const useLecturesQuery = () => {
  const [isSearching, setIsSearching] = useState(false)
  const accessToken = useStudyHubStore((state) => state.accessToken)
  const lectureArray = useStudyHubStore((state) => state.lectureArray)
  const setLectureArray = useStudyHubStore((state) => state.setLectureArray)

  const [page, setPage] = useState(0)
  const [searchText, setSearchText] = useState('')
  const [debounceValue] = useDebounce(searchText, 500)
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
    page_size: 10,
    search: searchText,
    category: selectedCategory,
    ordering: textToLectureOrdering[selectedOrderingInText],
  }

  const endpoint = `/lectures/${params.toString()}`
  const {
    data,
    isPending: isPendingLectures,
    error: errorLectures,
  } = useQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      const response = await api.get(endpoint)
      return response.data.results
    },
  })

  useEffect(() => {
    if (!data) {
      return
    }

    setLectureArray(data)
  }, [data])

  return { isPendingLectures, errorLectures }
}

const useLectures = () => {
  const lecturesQueryReturns = useLecturesQuery()

  return { ...lecturesQueryReturns }
}
