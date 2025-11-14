import api from '@/api/api'
import useApplicantStore from '@/store/recruit/manageModal/applicantStore'
import type { Applicant, ApplicantResponseData } from '@/types'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

const useApplicantsQuery = (recruitmentUuid: string, isOn: boolean) => {
  const applicantsQueryEndpoint = `/recruitments/${recruitmentUuid}/applications/list`

  const setApplicantArray = useApplicantStore(
    (state) => state.setApplicantArray
  )
  const setRequestNextPage = useApplicantStore(
    (state) => state.setRequestNextPage
  )

  const params = {
    page_size: 10,
  }

  const { data, isPending, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ['applicants', recruitmentUuid],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await api.get(applicantsQueryEndpoint, {
        params: { ...params, page: pageParam },
      })
      return response.data as ApplicantResponseData
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _allPages, lastPageParam) =>
      lastPage.next ? lastPageParam + 1 : null,
    enabled: isOn && !!recruitmentUuid,
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

  return {
    isPending,
    error,
    count,
  }
}

export default useApplicantsQuery
