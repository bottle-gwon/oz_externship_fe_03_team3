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
  difficulty: 'EASY' | 'NORMAL' | 'HARD'
  original_price: number
  discount_price: number
  platform: 'inflearn' | 'udemy'
  average_rating: number
  url_link: string
}
