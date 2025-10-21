export interface MyRecruit {
  id: number
  uuid: string
  title: string
  thumbnail_img_url: string
  expected_headcount: number
  current_headcount: number
  is_closed: boolean
  views_count: number
  bookmark_count: number
  due_date: string
  tags: { id: number; name: string }[]
  lectures: { id: number; title: string; instructor: string }[]
  created_at: string
}
