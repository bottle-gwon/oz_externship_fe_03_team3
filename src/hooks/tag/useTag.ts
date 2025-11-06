import api from '@/api/api'
import useTagStore from '@/store/tag/tagStore'
import type { TagApiSearchParam } from '@/types'
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import type { AxiosError } from 'axios'

const queryEndpoint = '/recruitments/tags'

// get 태그 검색
const getSearchTag = async (params: TagApiSearchParam) => {
  const { keyword = '', page = 1, page_size = 5 } = params
  const newParam = new URLSearchParams()

  newParam.append('keyword', keyword) //키워드 필수로 변경됨
  newParam.append('page', String(page))
  newParam.append('page_size', String(page_size))

  const response = await api.get(`${queryEndpoint}?${newParam}`)

  return response.data
}

// 새로운 태그 추가
// 아직 확정적이진 않아서 이부분 향후 수정할 예정입니다.
const postNewTag = async (newTag: string) => {
  const newTagParam = { tags: [newTag] }
  const response = await api.post(queryEndpoint, newTagParam)

  return response.data
}

//-------------------------tanstackQuery---------------------------------

// 태그 검색
export const useSearchTag = (params: TagApiSearchParam) => {
  return useQuery({
    queryKey: [queryEndpoint, params],
    queryFn: () => getSearchTag(params),
    placeholderData: keepPreviousData,
    // staleTime: 0, // 테스트용 안하면 로딩 안보임
  })
}

// 태그추가
// 이 부분 백엔드에서 수정중인것 같아서 향후 추가
export const useAddNewTag = () => {
  const queryClient = useQueryClient()
  const addCurrentTagArray = useTagStore((state) => state.addCurrentTagArray)
  const deleteCurrentTagArray = useTagStore(
    (state) => state.deleteCurrentTagArray
  )

  return useMutation({
    mutationFn: postNewTag,

    onMutate: (newTag: string) => {
      addCurrentTagArray(newTag)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryEndpoint] })
    },
    onError: (error: AxiosError, newTag) => {
      // 롤백
      if (!(error.response?.status === 409)) {
        deleteCurrentTagArray(newTag)
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [queryEndpoint] })
    },
  })
}
