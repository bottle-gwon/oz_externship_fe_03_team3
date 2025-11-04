import queryClient from '@/lib/tanstackQueryClient'
import { useMutation } from '@tanstack/react-query'

interface SimpleMutationOptions<TPrevious, TNewOne, TData> {
  queryEndpoint: string
  mutationFnWithData: (data: TData) => void
  updateCacheForUi: (previous: TPrevious, newOne: TNewOne) => TPrevious
  handleSuccess?: () => void
  handleError?: (error: Error) => void
}

export const useSimpleMutation = <TPrevious, TNewOne, TData>(
  options: SimpleMutationOptions<TPrevious, TNewOne, TData>
) => {
  const {
    queryEndpoint,
    mutationFnWithData,
    updateCacheForUi,
    handleSuccess,
    handleError,
  } = options
  const simpleMutation = useMutation({
    mutationFn: async ({
      data,
      newOne: _newOne,
    }: {
      data: TData
      newOne?: TNewOne
    }) => mutationFnWithData(data),

    onMutate: async ({ newOne }: { data: TData; newOne: TNewOne }) => {
      await queryClient.cancelQueries({
        queryKey: [queryEndpoint],
      })

      const previous: TPrevious | undefined = queryClient.getQueryData([
        queryEndpoint,
      ])

      if (previous !== undefined) {
        const newCache = updateCacheForUi(previous, newOne)
        queryClient.setQueryData([queryEndpoint], newCache)
      }

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
