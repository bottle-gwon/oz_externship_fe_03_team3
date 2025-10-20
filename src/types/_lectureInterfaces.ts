export type Difficulty = 'EASY' | 'NORMAL' | 'HARD'

export interface LectureCategory {
  id: number
  name: string
}

export interface Lecture {
  uuid: string
  title: string
  instructor: string
  thumbnail_img_url: string
  categories: LectureCategory[]
  difficulty: Difficulty
  original_price: number
  discount_price: number
  platform: 'inflearn' | 'udemy'
  average_rating: number
  url_link: string
}
