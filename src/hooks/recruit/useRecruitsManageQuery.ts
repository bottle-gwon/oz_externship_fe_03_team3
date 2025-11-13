import api from '@/api/api'
import useRecruitManageStore from '@/store/recruit/manage/recruitManageStore'
import useStudyHubStore from '@/store/store'
import type { Recruit, RecruitsManageResponse } from '@/types'
import {
  textToRecruitManageState,
  textToRecruitOrdering,
} from '@/utils/simpleMaps'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'

const queryEndpoint = '/recruitments/mine'

const getManageByPage = async (
  paramsWithoutPage: object,
  pageParam: number
) => {
  const params = { ...paramsWithoutPage, page: pageParam }
  const response = await api.get(queryEndpoint, { params })
  return response.data as RecruitsManageResponse
}

const useRecruitsManageQuery = () => {
  const accessToken = useStudyHubStore((state) => state.accessToken)
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
  const count = useRecruitManageStore((state) => state.count)

  const params = useMemo(
    () => ({
      page_size: 10,
      status: textToRecruitManageState[selectedStatusInText],
      ordering: textToRecruitOrdering[selectedOrderingInText],
    }),
    [selectedStatusInText, selectedOrderingInText]
  )

  const { data, isPending, error, fetchNextPage } = useInfiniteQuery({
    queryKey: [queryEndpoint, paramsWithoutPage],
    queryFn: async ({ pageParam = 1 }) =>
      getManageByPage(paramsWithoutPage, pageParam),
    initialPageParam: 1,
    enabled: !!accessToken,
    getNextPageParam: (lastPage, _allPages, lastPageParam) =>
      lastPage.next ? lastPageParam + 1 : null,
  })
  useEffect(() => {
    if (!data) return

    const recruitManageArray = data.pages.reduce((acc: Recruit[], page) => {
      return [...acc, ...page.results]
    }, [])

    setRecruitManageArray(recruitManageArray)

    if (selectedStatusInText === '전체') {
      const firstCount = data.pages[0]?.count
      if (firstCount) setCount(firstCount)
    }
  }, [data, setRecruitManageArray, setCount, selectedStatusInText])

  useEffect(() => {
    setRequestNextPage(() => {
      void fetchNextPage()
    })
  }, [setRequestNextPage, fetchNextPage])

  return {
    isPending,
    error,
    count,
  }
}

const useRecruitManage = () => {
  return useRecruitsManageQuery()
}

export default useRecruitManage
