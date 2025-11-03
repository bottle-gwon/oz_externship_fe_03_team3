// 메시지 내역 조회
export interface chatMessageListRequest {
  study_group_id: number //스터디 그룹id
  keyword: string // 검색 키워드
  page?: number //없으면 기본값 1
  size?: number //없으면 기본값 20
}
