import api from '@/api/api'
import useStudyHubStore from '@/store/store'
import {
  type ChatMessageApiResponse,
  type ChatMessagePageResponse,
  // type ChatRoomApiResponse,
  // type ChatRoomPageResponse,
  type ChatMessageListRequest,
  type ChatRoomData,
} from '@/types/_chat'
import { CHAT_CONFIG } from '@/utils/constants'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

const chatQueryEndpoint = '/chat'

// 채팅방 리스트 가져오기
const getChatRoomList = async () => {
  // const response = await api.get(`${chatQueryEndpoint}/chatrooms?page=${page}`)
  const response = await api.get<ChatRoomData[]>(
    `${chatQueryEndpoint}/chatrooms`
  )

  return response.data
}

const getChatCounter = async () => {
  const response = await getChatRoomList()

  if (response) {
    const count = response.reduce((acc: number, cur: ChatRoomData) => {
      return acc + cur.unread_message_count
    }, 0)
    return count
  } else {
    return 0
  }
}

// 채팅 메시지 리스트 가져오기
const getMessageList = async (params: ChatMessageListRequest) => {
  const { study_group_id, page = 1, size = 20 } = params
  const newParam = new URLSearchParams()

  newParam.append('page', String(page))
  newParam.append('size', String(size))

  const response = await api.get(
    `${chatQueryEndpoint}/chatrooms/${study_group_id}/messages?${newParam}`
  )

  return response.data
}

//-------------------------tanstackQuery---------------------------------

// 채팅방 리스트 가져오기
// 현재 채팅방에 페이지 네이션 추가하면 충돌이 발생한다 해서 무한 스크롤 로직은 주석 처리 해놨습니다.
// export const useChatRoomList = () => {
//   return useInfiniteQuery<
//     ChatRoomApiResponse,
//     Error,
//     ChatRoomPageResponse,
//     [string],
//     number
//   >({
//     queryKey: [chatQueryEndpoint],
//     queryFn: ({ pageParam }) => getChatRoomList(pageParam),
//     getNextPageParam: (lastPage) => {
//       if (lastPage.data) {
//         const current = lastPage.data.pagination.page
//         const totalPage = Math.ceil(
//           lastPage.data?.pagination.total_count /
//             lastPage.data?.pagination.page_size
//         )

//         if (current < totalPage) {
//           return current + 1
//         } else {
//           return null
//         }
//       } else {
//         return null
//       }
//     },
//     initialPageParam: 1,
//   })
// }
export const useChatRoomList = () => {
  return useQuery({
    queryKey: [chatQueryEndpoint],
    queryFn: getChatRoomList,
  })
}

// 채팅 메시지 리스트 가져오기
export const useChatRoomMessage = () => {
  const chatState = useStudyHubStore((state) => state.chatState)

  // 만약 채팅방이 열리지 않은 상태면 -1을 넣어서 훅이 작동 하지 않도록 한다.(쿼리의 enabled 참고)
  const get_study_group_id =
    chatState.status === 'chatRoom' ? chatState.id : '-1'

  return useInfiniteQuery<
    ChatMessageApiResponse,
    Error,
    ChatMessagePageResponse,
    [string, string],
    ChatMessageListRequest
  >({
    queryKey: ['message', get_study_group_id],
    queryFn: ({ pageParam }) => getMessageList(pageParam),
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.next && lastPageParam?.size && lastPageParam?.page) {
        const current = lastPageParam.page
        const totalPage = Math.ceil(lastPage.count / lastPageParam.size)
        if (current < totalPage) {
          return {
            study_group_id: lastPageParam?.study_group_id,
            page: current + 1,
            size: CHAT_CONFIG.MAX_CHAT_MESSAGE,
          }
        } else {
          return null
        }
      } else {
        return null
      }
    },
    initialPageParam: {
      study_group_id: get_study_group_id,
      page: 1,
      size: CHAT_CONFIG.MAX_CHAT_MESSAGE,
    },

    enabled: get_study_group_id !== '-1',
  })
}

export const useUnreadChatCount = () => {
  const accessToken = useStudyHubStore((state) => state.accessToken)

  return useQuery({
    queryKey: ['counter'],
    queryFn: getChatCounter,
    refetchInterval() {
      // 로그인 상태가아니면 요청 안보냄
      if (!accessToken) {
        return false
      }
      return 3000 // 3초마다 요청 보내기
    },
  })
}
