export interface recruits {
  id: number
  title: string
  thumbnail_url: string
  expected_personnel: number
  current_personnel: number
  status: string
  tags: { id: number; name: string }[]
  lectures: { name: string; instructor: string }[]
  due_date: string
  bookmark_count: number
  views: number
  created_at: string
}
