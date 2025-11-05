import api from '@/api/api'
import useRecruitStore from '@/store/recruit/recruitStore'
import useStudyHubStore from '@/store/store'
import type {
  Recruit,
  RecruitmentsListResponseWithAuth,
  RecruitsResponseData,
} from '@/types'
import { textToRecruitOrdering } from '@/utils/simpleMaps'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'

const recruitsQueryEndpoint = '/recruitments'

const useRecruitsQuery = () => {
  const accessToken = useStudyHubStore((state) => state.accessToken)
  const isLoggedIn = Boolean(accessToken)

  const debounceValue = useRecruitStore((state) => state.debounceValue)
  const selectedTag = useRecruitStore((state) => state.selectedTag)
  const selectedArrangementInText = useRecruitStore(
    (state) => state.selectedArrangementInText
  )
  const setRecruitArray = useRecruitStore((state) => state.setRecruitArray)
  const setRecommendedRecruitArray = useRecruitStore(
    (state) => state.setRecommendedRecruitArray
  )
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
    useInfiniteQuery<RecruitsResponseData | RecruitmentsListResponseWithAuth>({
      queryKey: [recruitsQueryEndpoint, params, isLoggedIn],
      queryFn: async ({ pageParam = 1 }) => {
        const response = await api.get(recruitsQueryEndpoint, {
          params: { ...params, page: pageParam },
          ...(isLoggedIn && {
            headers: { Authorization: `Bearer ${accessToken}` },
          }),
        })
        // 로그인 상태에 따라 다른 타입으로 반환
        if (isLoggedIn) {
          return response.data as RecruitmentsListResponseWithAuth
        }
        return response.data as RecruitsResponseData
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const totalPages = Math.ceil(lastPage.total_count / lastPage.page_size)
        const currentPage = lastPage.page
        return currentPage < totalPages ? currentPage + 1 : null
      },
    })

  // 공고 목록 업데이트
  useEffect(() => {
    if (!data) return

    const recruitArray = data.pages.reduce((acc: Recruit[], page) => {
      return [...acc, ...page.results]
    }, [])

    setRecruitArray(recruitArray)
  }, [data, setRecruitArray])

  // 추천 공고 업데이트 (로그인 시에만)
  useEffect(() => {
    if (!data || !isLoggedIn) {
      setRecommendedRecruitArray([])
      return
    }

    const firstPage = data.pages[0]

    if ('recommendations' in firstPage) {
      setRecommendedRecruitArray(firstPage.recommendations)
    }
  }, [data, isLoggedIn, setRecommendedRecruitArray])

  useEffect(() => {
    setRequestNextPage(fetchNextPage)
  }, [setRequestNextPage, fetchNextPage])

  // 전체 공고 수
  const totalCount = data?.pages[0].total_count ?? 0

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
