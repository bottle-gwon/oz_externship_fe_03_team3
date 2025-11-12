import { useQuery } from '@tanstack/react-query'

import useStudyHubStore from '@/store/store'
import api from '@/api/api'

export default function useMeQuery() {
  const accessToken = useStudyHubStore((state) => state.accessToken)
  return useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      const res = await api.get('/users/me')
      return res.data?.data ?? res.data
    },
    enabled: Boolean(accessToken),
    staleTime: 300_000,
    retry: 0,
  })
}
