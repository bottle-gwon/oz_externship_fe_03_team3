import api from '@/api/api'
import type { TagApiSearchParam } from '@/types'
import { useMutation, useQuery } from '@tanstack/react-query'

const queryEndpoint = '/recruitments/tags'

// get 태그 검색
const getSearchTag = async (params: TagApiSearchParam) => {
  const { keyword = '', page = 1, page_size = 5 } = params
  const newParam = new URLSearchParams()

  newParam.append('keyword', keyword) //키워드 필수로 변경됨
  newParam.append('page', String(page))
  newParam.append('page_size', String(page_size))

  const response = await api.get(`/recruitments/tags?${newParam}`)

  return response.data
}

//-------------------------tanstackQuery---------------------------------

export const useSearchTag = (params: TagApiSearchParam) => {
  return useQuery({
    queryKey: [queryEndpoint, params],
    queryFn: () => getSearchTag(params),
  })
}
