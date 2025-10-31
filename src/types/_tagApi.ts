// 태그 타입
export interface Tag {
  id: number
  name: string
}

// 태그 검색 응답
export interface TagApiResponse {
  tags: Tag[]
  page: number
  page_size: number
  total_count: number
}

// 태그 검색 요청 파라미터
export interface TagApiSearchParam {
  keyword: string //필수로 변경됨 ////없으면 전체 조회
  page?: number //없으면 기본값 1
  page_size?: number //없으면 기본값 5
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
