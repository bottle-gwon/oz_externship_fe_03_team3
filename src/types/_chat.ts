// 메시지 내역 조회
export interface chatMessageListRequest {
  study_group_id: number //스터디 그룹id
  keyword: string // 검색 키워드
  page?: number //없으면 기본값 1
  size?: number //없으면 기본값 20
}

export interface ChatRoomPagination {
  page: number
  page_size: number
  total_count: number
}

// 채팅방
export interface ChatRoomData {
  id: number
  sender_id: number
  sender_nickname: string
  study_group_id: number
  study_name: string
  content: string
  message_counter: number
  file_url: string | null
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
