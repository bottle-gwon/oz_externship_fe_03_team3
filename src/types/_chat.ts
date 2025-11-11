// 메시지 내역 조회
export interface ChatMessageListRequest {
  study_group_id: number //스터디 그룹id
  page?: number //없으면 기본값 1
  size?: number //없으면 기본값 20
}
// 채팅방 메시지
export interface ChatMessage {
  id: number
  content: string
  sender_id: number
  sender_nickname: string
  is_read: boolean
  created_at: string
  updated_at: string
}
export interface ChatMessageApiResponseData {
  messages: ChatMessage[]
  total_count: number
}

export interface ChatMessageApiResponse {
  status: string
  code: string
  message: string
  data: ChatMessageApiResponseData | null
}

export interface ChatMessagePageResponse {
  pageParams: number[]
  pages: ChatMessageApiResponse[] | null
}

export interface ChatRoomPagination {
  page: number
  page_size: number
  total_count: number
}

// 채팅방 목록
export interface ChatRoomData {
  uuid: string
  last_message_sender_nickname: string
  name: string
  last_message_content: string
  unread_message_count: number
  created_at: string
}

export interface ChatRoomApiResponseData {
  messages: ChatRoomData[]
  pagination: ChatRoomPagination
}

export interface ChatRoomApiResponse {
  status: string
  code: string
  message: string
  data: ChatRoomApiResponseData | null
}

export interface ChatRoomPageResponse {
  pageParams: number[]
  pages: ChatRoomApiResponse[] | null
}
