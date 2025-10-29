import instance from '@/lib/axiosInstance'
import { axiosLikeFetch } from '@/lib/axiosVariants'
import queryClient from '@/lib/tanstackQueryClient'
import type { RequestMethod } from '@/types'
import { useMutation } from '@tanstack/react-query'

interface SimpleMutationOptions {
  method: RequestMethod
  queryEndpoint: string
  mutateEndpoint: string
  updateCacheForUi: (previous: any, newOne: any) => any
  handleSuccess: () => void
  handleError: (error: Error) => void
}

export const useSimpleMutation = <Body, NewOne>(
  options: SimpleMutationOptions
) => {
  const {
    method,
    queryEndpoint,
    mutateEndpoint,
    updateCacheForUi,
    handleSuccess,
    handleError,
  } = options
  const simpleMutation = useMutation({
    mutationFn: async ({ body }: { body: unknown }) =>
      axiosLikeFetch(method, mutateEndpoint, body),
    onMutate: async ({ newOne }: { newOne: unknown }) => {
      await queryClient.cancelQueries({
        queryKey: [queryEndpoint],
      })

      const previous: unknown = queryClient.getQueryData([queryEndpoint])
      const newCache = updateCacheForUi(previous, newOne)
      queryClient.setQueryData([queryEndpoint], newCache)

      return { previous }
    },
    onSuccess: () => {
      if (handleSuccess) {
        handleSuccess()
      }
    },
    onError: async (error, _variables, context) => {
      if (!context) {
        return
      }
      queryClient.setQueryData([queryEndpoint], context.previous)
      if (handleError) {
        handleError(error)
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [queryEndpoint],
      })
    },
  })

  return simpleMutation
}

export default useSimpleMutation
