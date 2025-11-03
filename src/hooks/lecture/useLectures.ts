import type { LecturesResponseData } from '@/types'
import { textToLectureOrdering } from '@/utils/simpleMaps'
import { useQuery } from '@tanstack/react-query'
import { useCallback, useEffect, useState } from 'react'
import api from '@/api/api'
import { makeUrlFromParams } from '@/utils/urls'
import useLectureStore from '@/store/lecture/lectureStore'

const queryEndpoint = '/lectures'

const useLecturesQuery = () => {
  const [nextUrlInKey, setNextUrlInKey] = useState<string | null>(null)
  const [nextUrlInReady, setNextUrlInReady] = useState<string | null>(null)

  const debounceValue = useLectureStore((state) => state.debounceValue)
  const selectedCategory = useLectureStore((state) => state.selectedCategory)
  const selectedOrderingInText = useLectureStore(
    (state) => state.selectedOrderingInText
  )
  const resetLectureArray = useLectureStore((state) => state.resetLectureArray)
  const appendLectureArray = useLectureStore(
    (state) => state.appendLectureArray
  )
  const setIsSearching = useLectureStore((state) => state.setIsSearching)
  const setRequestNextPage = useLectureStore(
    (state) => state.setRequestNextPage
  )

  const params = {
    page_size: 12,
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
  })

  useEffect(() => {
    resetLectureArray()
    setNextUrlInReady(null)

    if (debounceValue === '') {
      setIsSearching(false)
    } else {
      setIsSearching(true)
    }
  }, [debounceValue, setIsSearching, resetLectureArray])

  useEffect(() => {
    if (!data) {
      return
    }
    appendLectureArray(data.results ?? [])
    setNextUrlInReady(data.next)
  }, [data, appendLectureArray])

  useEffect(() => {
    const requestNextPage = () => setNextUrlInKey(nextUrlInReady)
    setRequestNextPage(requestNextPage)
  }, [nextUrlInReady, setRequestNextPage])

  return {
    isPending,
    error,
  }
}

const useLectures = () => {
  const lecturesQueryReturns = useLecturesQuery()

  return { ...lecturesQueryReturns }
}

export default useLectures
