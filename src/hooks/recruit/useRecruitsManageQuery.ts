import api from '@/api/api'
import useRecruitManageStore from '@/store/recruit/manage/recruitManageStore'
import type { Recruit, RecruitsManageResponse } from '@/types'
import {
  textToRecruitManageState,
  textToRecruitOrdering,
} from '@/utils/simpleMaps'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'

const recruitsManageQueryEndpoint = '/recruitments/my'

const useRecruitsManageQuery = () => {
  const selectedStatusInText = useRecruitManageStore(
    (state) => state.selectedStatusInText
  )
  const selectedOrderingInText = useRecruitManageStore(
    (state) => state.selectedOrderingInText
  )
  const setRecruitManageArray = useRecruitManageStore(
    (state) => state.setRecruitManageArray
  )
  const setRequestNextPage = useRecruitManageStore(
    (state) => state.setRequestNextPage
  )

  const params = useMemo(
    () => ({
      page_size: 10,
      status: textToRecruitManageState[selectedStatusInText],
      ordering: textToRecruitOrdering[selectedOrderingInText],
    }),
    [selectedStatusInText, selectedOrderingInText]
  )

  const { data, isPending, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: [recruitsManageQueryEndpoint, params],
      queryFn: async ({ pageParam = 1 }) => {
        const response = await api.get(recruitsManageQueryEndpoint, {
          params: { ...params, page: pageParam },
        })
        return response.data as RecruitsManageResponse
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const totalPages = Math.ceil(lastPage.count / lastPage.page_size)
        const currentPage = lastPage.page
        return currentPage < totalPages ? lastPage.page + 1 : null
      },
    })
  useEffect(() => {
    if (!data) return

    const recruitManageArray = data.pages.reduce((acc: Recruit[], page) => {
      return [...acc, ...page.results]
    }, [])

    setRecruitManageArray(recruitManageArray)
  }, [data, setRecruitManageArray])

  useEffect(() => {
    setRequestNextPage(() => {
      void fetchNextPage()
    })
  }, [setRequestNextPage, fetchNextPage])

  const totalCount = data?.pages?.[0]?.count ?? 0

  return {
    isPending,
    error,
    hasNextPage,
    totalCount,
  }
}

const useRecruitManage = () => {
  const recruitsManageQueryReturns = useRecruitsManageQuery()

  return { ...recruitsManageQueryReturns }
}

export default useRecruitManage
