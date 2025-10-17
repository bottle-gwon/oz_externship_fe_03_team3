// 태그 타입
export interface Tag {
  id: number
  name: string
}

// 태그 응답
export interface TagApiResponse {
  tags: Tag[]
  page: number
  page_size: number
  total_count: number
}

// 태그 post 요청
export interface TagApiRequest {
  recruitment_id: number
  tags: string[]
}

// 태그 post 요청 성공
export interface TagApiSuccess {
  recruitment_id: number
  added_tags: string[]
  message: string
}
