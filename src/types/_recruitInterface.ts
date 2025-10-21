export interface Recruit {
  id: number
  uuid: string
  title: string
  thumbnail_img_url: string
  expected_headcount: number
  views_count: number
  bookmark_count: number
  due_date: string
  is_closed: boolean
  tags: { id: number; name: string }[]
  study_group: {
    id: number
    uuid: string
    name: string
    lectures: { id: number; title: string; instructor: string }[]
  }

  author: { id: number; nickname: string; profile_img_url: string }
  is_bookmarked: boolean
  created_at: string
}
