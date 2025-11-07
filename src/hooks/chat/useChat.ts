import api from '@/api/api'
import {
  type ChatRoomApiResponse,
  type ChatRoomPageResponse,
  type chatMessageListRequest,
} from '@/types/_chat'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

const chatQueryEndpoint = '/chat'
const chatRoomEndpoint = '/study-grops'

// 채팅방 리스트 가져오기
const getChatRoomList = async (page: number) => {
  const response = await api.get(`${chatQueryEndpoint}/chatrooms?page=${page}`)

  return response.data
}

// 채팅 메시지 리스트 가져오기
const getMessageList = async (params: chatMessageListRequest) => {
  const { study_group_id, keyword = '', page = 1, size = 300 } = params
  const newParam = new URLSearchParams()

  newParam.append('keyword', keyword)
  newParam.append('page', String(page))
  newParam.append('size', String(size))

  const response = await api.get(
    `${chatRoomEndpoint}/${study_group_id}/messages?${newParam}`
  )

  return response.data
}

//-------------------------tanstackQuery---------------------------------

// 채팅방 리스트 가져오기
export const useChatRoomList = () => {
  // return useQuery({
  //   queryKey: [chatQueryEndpoint, page],
  //   queryFn: () => getChatRoomList(page),
  //   placeholderData: keepPreviousData,
  // })
  return useInfiniteQuery<
    ChatRoomApiResponse,
    Error,
    ChatRoomPageResponse,
    [string],
    number
  >({
    queryKey: [chatQueryEndpoint],
    queryFn: ({ pageParam }) => getChatRoomList(pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.data) {
        const current = lastPage.data.pagination.page
        const totalPage = Math.ceil(
          lastPage.data?.pagination.total_count /
            lastPage.data?.pagination.page_size
        )

        if (current < totalPage) {
          return current + 1
        } else {
          return null
        }
      } else {
        return null
      }
    },
    initialPageParam: 1,
  })
}

// 채팅 메시지 리스트 가져오기
export const useChatRoomMessage = (params: chatMessageListRequest) => {
  return useQuery({
    queryKey: [chatRoomEndpoint, params],
    queryFn: () => getMessageList(params),
  })
}
