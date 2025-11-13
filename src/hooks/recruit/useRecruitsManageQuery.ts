import api from '@/api/api'
import useRecruitManageStore from '@/store/recruit/manage/recruitManageStore'
import type { Recruit, RecruitsManageResponse } from '@/types'
import {
  textToRecruitManageState,
  textToRecruitOrdering,
} from '@/utils/simpleMaps'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'

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

  const setCount = useRecruitManageStore((state) => state.setCount)

  const params = useMemo(
    () => ({
      page_size: 10,
      status: textToRecruitManageState[selectedStatusInText],
      ordering: textToRecruitOrdering[selectedOrderingInText],
    }),
    [selectedStatusInText, selectedOrderingInText]
  )

  const endpoint = `/recruitments/mine`

  const { data, isPending, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: [endpoint, params],
      queryFn: async ({ pageParam = 1 }) => {
        const response = await api.get(endpoint, {
          params: { ...params, page: pageParam },
        })
        return response.data as RecruitsManageResponse
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, _allPages, lastPageParam) =>
        lastPage.next ? lastPageParam + 1 : null,
    })
  useEffect(() => {
    if (!data) return

    const recruitManageArray = data.pages.reduce((acc: Recruit[], page) => {
      return [...acc, ...page.results]
    }, [])

    setRecruitManageArray(recruitManageArray)

    const firstCount = data.pages[0]?.count
    if (firstCount) setCount(firstCount)
  }, [data, setRecruitManageArray, setCount])

  useEffect(() => {
    setRequestNextPage(() => {
      void fetchNextPage()
    })
  }, [setRequestNextPage, fetchNextPage])

  const count = data?.pages?.[0]?.count ?? { total: 0, open: 0, closed: 0 }

  return {
    isPending,
    error,
    hasNextPage,
    count,
  }
}

const useRecruitManage = () => {
  return useRecruitsManageQuery()
}

export default useRecruitManage
