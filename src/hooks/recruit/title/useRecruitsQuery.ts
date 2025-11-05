import api from '@/api/api'
import useRecruitStore from '@/store/recruit/recruitStore'
import type { Recruit, RecruitsResponseData } from '@/types'
import { textToRecruitOrdering } from '@/utils/simpleMaps'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'

const recruitsQueryEndpoint = '/recruitments'

const useRecruitsQuery = () => {
  const debounceValue = useRecruitStore((state) => state.debounceValue)
  const selectedTag = useRecruitStore((state) => state.selectedTag)
  const selectedArrangementInText = useRecruitStore(
    (state) => state.selectedArrangementInText
  )
  const setRecruitArray = useRecruitStore((state) => state.setRecruitArray)
  const setRequestNextPage = useRecruitStore(
    (state) => state.setRequestNextPage
  )

  const params = useMemo(
    () => ({
      page_size: 10,
      keyword: debounceValue,
      tag: selectedTag,
      ordering: textToRecruitOrdering[selectedArrangementInText],
    }),
    [debounceValue, selectedTag, selectedArrangementInText]
  )

  const { data, isPending, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: [recruitsQueryEndpoint, params],
      queryFn: async ({ pageParam = 1 }) => {
        const response = await api.get(recruitsQueryEndpoint, {
          params: { ...params, page: pageParam },
        })
        return response.data as RecruitsResponseData
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const totalPages = Math.ceil(lastPage.total_count / lastPage.page_size)
        const currentPage = lastPage.page
        return currentPage < totalPages ? currentPage + 1 : null
      },
    })

  useEffect(() => {
    if (!data) return

    const recruitArray = data.pages.reduce((acc: Recruit[], page) => {
      return [...acc, ...page.results]
    }, [])

    setRecruitArray(recruitArray)
  }, [data, setRecruitArray])

  useEffect(() => {
    setRequestNextPage(fetchNextPage)
  }, [setRequestNextPage, fetchNextPage])

  // 전체 공고 수
  const totalCount = data?.pages?.[0]?.total_count ?? 0

  return {
    isPending,
    error,
    hasNextPage,
    totalCount,
  }
}

const useRecruits = () => {
  const recruitsQueryReturns = useRecruitsQuery()

  return { ...recruitsQueryReturns }
}

export default useRecruits
