import queryClient from '@/lib/tanstackQueryClient'
import { useMutation } from '@tanstack/react-query'

interface SimpleMutationOptions<TPrevious, TNewOne> {
  queryEndpoint: string
  mutationFnWithBody: (body: unknown) => unknown
  updateCacheForUi: (previous: TPrevious, newOne: TNewOne) => TPrevious
  handleSuccess?: () => void
  handleError?: (error: Error) => void
}

export const useSimpleMutation = <TPrevious, TNewOne>(
  options: SimpleMutationOptions<TPrevious, TNewOne>
) => {
  const {
    queryEndpoint,
    mutationFnWithBody,
    updateCacheForUi,
    handleSuccess,
    handleError,
  } = options
  const simpleMutation = useMutation({
    mutationFn: async ({
      body,
      newOne: _newOne,
    }: {
      body: unknown
      newOne?: unknown
    }) => mutationFnWithBody(body),

    onMutate: async ({ newOne }: { body: unknown; newOne: TNewOne }) => {
      await queryClient.cancelQueries({
        queryKey: [queryEndpoint],
      })

      const previous: TPrevious | undefined = queryClient.getQueryData([
        queryEndpoint,
      ])
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
