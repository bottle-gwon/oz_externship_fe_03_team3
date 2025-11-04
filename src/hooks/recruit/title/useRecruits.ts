import api from '@/api/api'
import useRecruitStore from '@/store/recruit/recruitStore'
import type { RecruitsResponseData } from '@/types'
import { textToRecruitOrdering } from '@/utils/simpleMaps'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

const recruitsQueryEndpoint = '/recruitments'

const useRecruitsQuery = () => {
  const [page, setPage] = useState(1)
  const debounceValue = useRecruitStore((state) => state.debounceValue)
  const selectedTag = useRecruitStore((state) => state.selectedTag)
  const selectedArrangementInText = useRecruitStore(
    (state) => state.selectedArrangementInText
  )
  const setRecruitArray = useRecruitStore((state) => state.setRecruitArray)
  const appendRecruitArray = useRecruitStore(
    (state) => state.appendRecruitArray
  )
  const setRequestNextPage = useRecruitStore(
    (state) => state.setRequestNextPage
  )
  const [params, setParams] = useState<object | null>(null)

  const { data, isPending, error } = useQuery({
    queryKey: [recruitsQueryEndpoint, params, page],
    queryFn: async () => {
      const response = await api.get<RecruitsResponseData>(
        recruitsQueryEndpoint,
        { params }
      )
      return response.data as RecruitsResponseData
    },
    placeholderData: keepPreviousData,
  })

  useEffect(() => {
    setPage(1)
    setParams({
      page_size: 10,
      keyword: debounceValue,
      tag: selectedTag,
      ordering: textToRecruitOrdering[selectedArrangementInText],
    })
  }, [debounceValue, selectedTag, selectedArrangementInText])

  useEffect(() => {
    if (!data) {
      return
    }

    if (data.page > 1) {
      appendRecruitArray(data.results)
    } else {
      setRecruitArray(data.results)
    }

    // 전체 페이지 수 계산
    const totalPages = Math.ceil(data.total_count / data.page_size)

    const requestNextPage = () => {
      if (page < totalPages) {
        setPage((prev) => prev + 1)
      }
    }

    setRequestNextPage(requestNextPage)
  }, [data, appendRecruitArray, setRecruitArray, setRequestNextPage])

  return {
    data,
    isPending,
    error,
  }
}

const useRecruits = () => {
  const recruitsQueryReturns = useRecruitsQuery()

  return { ...recruitsQueryReturns }
}

export default useRecruits
