export interface recruit {
  id: number
  title: string
  content_preview: string
  due_date: string
  expected_personnel: number
  current_personnel: number
  status: 'open' | 'closed' | string
  tags: string[]
  study_group: { id: number; name: string }
  bookmark_count: number
  is_bookmarked: boolean
  views: number
  created_at: string
  author: { id: number; nickname: string }
}
