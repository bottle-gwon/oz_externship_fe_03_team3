import api from '@/api/api'
import type { chatMessageListRequest } from '@/types/_chat'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

const chatQueryEndpoint = '/chat'
const chatRoomEndpoint = '/study-grops'

// 채팅방 리스트 가져오기
const getChatRoomList = async (page: number) => {
  const response = await api.get(`${chatQueryEndpoint}/rooms?page=${page}`)

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
export const useChatRoomList = (page: number) => {
  return useQuery({
    queryKey: [chatQueryEndpoint, page],
    queryFn: () => getChatRoomList(page),
    placeholderData: keepPreviousData,
  })
}

// 채팅 메시지 리스트 가져오기
export const useChatRoomMessage = (params: chatMessageListRequest) => {
  return useQuery({
    queryKey: [chatRoomEndpoint, params],
    queryFn: () => getMessageList(params),
  })
}
