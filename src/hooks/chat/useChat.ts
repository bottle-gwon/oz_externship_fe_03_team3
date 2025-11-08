import api from '@/api/api'
import useStudyHubStore from '@/store/store'
import {
  type ChatMessageApiResponse,
  type ChatMessagePageResponse,
  type ChatRoomApiResponse,
  type ChatRoomPageResponse,
  type ChatMessageListRequest,
} from '@/types/_chat'
import { useInfiniteQuery } from '@tanstack/react-query'

const chatQueryEndpoint = '/chat'

// 채팅방 리스트 가져오기
const getChatRoomList = async (page: number) => {
  const response = await api.get(`${chatQueryEndpoint}/chatrooms?page=${page}`)

  return response.data
}

// 채팅 메시지 리스트 가져오기
const getMessageList = async (params: ChatMessageListRequest) => {
  const { study_group_id, page = 1, size = 20 } = params
  const newParam = new URLSearchParams()

  newParam.append('page', String(page))
  newParam.append('size', String(size))

  const response = await api.get(
    `${chatQueryEndpoint}/${study_group_id}/messages?${newParam}`
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
export const useChatRoomMessage = () => {
  // return useQuery({
  //   queryKey: [chatRoomEndpoint, params],
  //   queryFn: () => getMessageList(params),
  // })
  const chatState = useStudyHubStore((state) => state.chatState)

  // 만약 채팅방이 열리지 않은 상태면 -1을 넣어서 훅이 작동 하지 않도록 한다.(쿼리의 enabled 참고)
  const get_study_group_id = chatState.status === 'chatRoom' ? chatState.id : -1

  return useInfiniteQuery<
    ChatMessageApiResponse,
    Error,
    ChatMessagePageResponse,
    [string, number],
    ChatMessageListRequest
  >({
    queryKey: ['message', get_study_group_id],
    queryFn: ({ pageParam }) => getMessageList(pageParam),
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.data && lastPageParam?.size && lastPageParam?.page) {
        const current = lastPageParam.page
        const totalPage = Math.ceil(
          lastPage.data.total_count / lastPageParam.size
        )

        if (current < totalPage) {
          return {
            study_group_id: lastPageParam?.study_group_id,
            page: current + 1,
            size: 20,
          }
        } else {
          return null
        }
      } else {
        return null
      }
    },
    initialPageParam: { study_group_id: get_study_group_id, page: 1, size: 0 },

    enabled: get_study_group_id !== -1,
  })
}
