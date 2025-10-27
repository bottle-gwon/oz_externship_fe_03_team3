export interface SimpleLecture {
  id: number
  title: string
  instructor: string
  price: number
}

export interface StudyGroup {
  id: number
  name: string
  current_headcount: number
  max_headcount: number
  is_leader: boolean
  profile_img_url: string
  start_at: string
  end_at: string
  status: string
  lectures: SimpleLecture[]
  review_count: number
  star_rating_average: number
  is_reviewed: boolean
}
