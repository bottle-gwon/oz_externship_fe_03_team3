import api from '@/api/api'
import useDebounce from '@/hooks/useDebounce'
import type { RecruitArrangementInText, RecruitmentListResponse } from '@/types'
import { textToRecruitOrdering } from '@/utils/simpleMaps'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

const recruitsQueryEndpoint = '/recruitments'

const useRecruitsQuery = () => {
  const [isSearching, setIsSearching] = useState(false)
  const [page, setPage] = useState(1)
  const [searchText, setSearchText] = useState('')
  const [debounceValue, cancel] = useDebounce(searchText, 500)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [selectedOrderingInText, setSelectedOrderingInText] =
    useState<RecruitArrangementInText>('최신순')

  const params = {
    page,
    page_size: 10,
    keyword: searchText,
    tag: selectedTag,
    study_group_id: undefined,
    status: undefined,
    ordering: textToRecruitOrdering[selectedOrderingInText],
  }

  const { data, isPending, error } = useQuery({
    queryKey: [recruitsQueryEndpoint, params],
    queryFn: async () => {
      const response = await api.get<RecruitmentListResponse>(
        recruitsQueryEndpoint,
        { params }
      )
      return response.data
    },
    placeholderData: keepPreviousData,
  })

  useEffect(() => {
    setPage(1)

    if (debounceValue === '') {
      setIsSearching(false)
    } else {
      setIsSearching(true)
    }
  }, [debounceValue, selectedTag, selectedOrderingInText])

  return {
    data,
    isPending,
    error,
    searchText,
    setSearchText,
    setSelectedTag,
    setSelectedOrderingInText,
    isSearching,
    cancel,
  }
}

const useRecruits = () => {
  const recruitsQueryReturns = useRecruitsQuery()

  return { ...recruitsQueryReturns }
}

export default useRecruits
