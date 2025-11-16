export interface LectureInStudyGroup {
  uuid: string
  title: string
  instructor: string
  discounted_price: number
  original_price: number
}

export interface StudyGroup {
  uuid: string
  name: string
  profile_img_url: string
  max_headcount: number
  start_at: string
  end_at: string
  status: string
  current_headcount: number
  is_leader: boolean
  lectures: LectureInStudyGroup[]
  total_pages: number
  total_gropus: number
}
