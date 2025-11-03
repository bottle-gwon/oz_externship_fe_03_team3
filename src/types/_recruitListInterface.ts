export interface RecruitmentQueryParams {
  keyword?: string
  tag?: string
  study_group_id?: number
  status?: 'open' | 'closed'
  ordering?: 'created_at' | 'views' | 'bookmarks'
  page?: number
  page_size?: number
}
