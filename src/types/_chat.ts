// 메시지 내역 조회
export interface ChatMessageListRequest {
  study_group_id: string //스터디 그룹id
  page?: number //없으면 기본값 1
  size?: number //없으면 기본값 20
}
// 채팅방 메시지
export interface ChatMessageSender {
  id: number
  nickname: string
}
export interface ChatMessage {
  type?: 'chat.message'
  id: number
  content: string
  sender: ChatMessageSender
  is_read?: boolean
  created_at: string
}
export interface ChatMessageApiResponseData {
  messages: ChatMessage[]
  pagination: ChatRoomPagination
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
export interface MessageList {
  id: number
  sender_id: number
  sender_nickname: string
  // study_group_id: number
  content: string
  // file_url: string | null
  is_read: boolean
  created_at: string
  updated_at: string
}

// 채팅방 목록

export interface ChatRoomLastMessage {
  id: number
  content: string
  sender_nickname: string
  created_at: string
}
export interface ChatRoomData {
  uuid: string
  name: string
  last_message: ChatRoomLastMessage
  unread_message_count: number
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
