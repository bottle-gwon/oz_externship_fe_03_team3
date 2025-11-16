import api from '@/api/api'
import useStudyHubStore from '@/store/store'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'

const useApplyMutation = () => {
  const appendModalKeyToArray = useStudyHubStore(
    (state) => state.appendModalKeyToArray
  )
  const setError = useStudyHubStore((state) => state.setError)

  const applyMutation = useMutation({
    mutationFn: ({ body, uuid }: { body: object; uuid: string }) =>
      api.post(`/recruitments/${uuid}/applications`, body),
    onError: (error) => {
      appendModalKeyToArray('applyError')
      setError(error)
    },
    onSuccess: () => {
      appendModalKeyToArray('applySuccess')
      setError(null)
    },
  })

  useEffect(() => {
    return () => setError(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { applyMutation }
}

export default useApplyMutation
