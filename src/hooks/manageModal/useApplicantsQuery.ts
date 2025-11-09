import api from '@/api/api'
import useApplicantStore from '@/store/recruit/manageModal/applicantStore'
import type { Applicant, ApplicantResponseData } from '@/types'
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'

const useApplicantsQuery = (recruitmentId: number) => {
  const applicantsQueryEndpoint = `/recruitments/${recruitmentId}/applications`

  const setApplicantArray = useApplicantStore(
    (state) => state.setApplicantArray
  )
  const setRequestNextPage = useApplicantStore(
    (state) => state.setRequestNextPage
  )

  const params = {
    limit: 10,
  }

  const { data, isPending, error, fetchNextPage } = useInfiniteQuery({
    queryKey: [applicantsQueryEndpoint],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await api.get(applicantsQueryEndpoint, {
        params: { ...params, page: pageParam },
      })
      return response.data as ApplicantResponseData
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _allPages, lastPageParam) =>
      lastPage.next ? lastPageParam + 1 : null,
  })

  useEffect(() => {
    if (!data) {
      return
    }

    const applicantArray = data.pages.reduce((acc: Applicant[], page) => {
      return [...acc, ...page.results]
    }, [])
    setApplicantArray(applicantArray)
  }, [data, setApplicantArray])

  useEffect(() => {
    setRequestNextPage(fetchNextPage)
  }, [setRequestNextPage, fetchNextPage])

  const count = data?.pages[0].count ?? 0
  const queryClient = useQueryClient()

  return {
    isPending,
    error,
    count,
    queryClient,
  }
}

export default useApplicantsQuery
