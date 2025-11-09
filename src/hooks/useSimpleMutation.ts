import queryClient from '@/lib/tanstackQueryClient'
import { useMutation } from '@tanstack/react-query'

interface SimpleMutationOptions<TPrevious, TNewOne, TData> {
  queryEndpoint: string
  mutationFnWithData: (data: TData) => void
  updateCacheForUi: (previous: TPrevious, newOne: TNewOne) => TPrevious
  handleSuccess?: () => void
  handleError?: (error: Error) => void
}

// NOTE: mutate 함수에 넣는 매개변수 명을 body에서 data로 바꾸고 타입을 제네릭으로 바꿨습니다
// NOTE: 제네릭 타임은 data자리에 넣는 걸 따라가기 때문에 따로 신경쓰지 않으셔도 됩니다
// NOTE: mutateFnWithData는 전달인자로 받은 data를 조작해서 url, body 등을 만들고 api 요청을 하는 함수입니다
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

    // NOTE: onMutate은 mutationFn을 실행하기 전에 실행됩니다
    // NOTE: 성공을 가정하고 캐시를 업데이트하여 화면이 빠르게 전환되게 합니다
    // NOTE: 사용하실 때 mutate 요청이 날아가지 않는다면 여기에서 오류가 나고 있을 가능성이 높습니다
    // NOTE: 그럴 땐 여기에 debug 키워드를 넣어 확인해보시기 바랍니다
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

    // NOTE: 싫패하면 저장해두고 있던 이전 캐시(context.previous)로 캐시를 되돌립니다
    onError: async (error, _variables, context) => {
      if (!context) {
        return
      }
      queryClient.setQueryData([queryEndpoint], context.previous)
      if (handleError) {
        handleError(error)
      }
    },

    // NOTE: 성공하든 실패하든 응답을 받은 뒤에는 캐시를 무효화해서 GET 요청을 새로 보냅니다
    // NOTE: 이로써 클라이언트가 가지고 있는 자료를 항상 최신 자료로 유지합니다
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [queryEndpoint],
      })
    },
  })

  return simpleMutation
}

export default useSimpleMutation
