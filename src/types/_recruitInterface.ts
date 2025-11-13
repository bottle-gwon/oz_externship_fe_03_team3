import type { RecruitWriteSchema } from '@/lib/zodSchema'
import type { FieldErrors, Control, UseFormRegister } from 'react-hook-form'

export interface Recruit {
  uuid: string
  title: string
  thumbnail_img_url: string
  expected_headcount: number
  lectures: RecruitLecture[]
  tags: { id: number; name: string }[]
  close_at: string
  views_count: number
  bookmark_count: number
  is_closed: boolean
  is_bookmarked: boolean
}

export interface RecruitLecture {
  uuid: string
  title: string
  instructor: string
  thumbnail_img_url: string
  platform: string
  url_link: string
}

export interface RecruitmentQueryParams {
  keyword?: string
  tag?: string
  study_group_id?: number
  status?: 'open' | 'closed'
  ordering?: 'created_at' | 'views' | 'bookmarks'
  page?: number
  page_size?: number
}

export interface RecruitsResponseData {
  recommendations?: Recruit[]
  results: Recruit[]
  page: number
  page_size: number
  total_count: number
}

// ---- recruit manage
export interface RecruitsManageResponse {
  count: { total: number; open: number; closed: number }
  previous?: string | null
  next?: string | null
  results: Recruit[]
  status?: '' | 'open' | 'closed'
  ordering?: 'created_at' | 'bookmarks' | 'views'
  page: number
  page_size: number
  user_nickname: string
}

export type RecruitOrdering = 'created_at' | 'bookmarks' | 'views'

export type RecruitStatus = '' | 'open' | 'closed'

export const recruitArrangementInTextArray = [
  '최신순',
  '북마크 많은 순',
  '조회수 높은 순',
] as const

export type RecruitArrangementInText =
  (typeof recruitArrangementInTextArray)[number]

export const recruitConditionInTextArray = ['전체', '모집중', '마감됨'] as const

export type RecruitConditionInText =
  (typeof recruitConditionInTextArray)[number]

//---- recruit delete
export interface RecruitDelete {
  uuid: string
  is_closed: boolean
}

export type RecruitDeleteResponseData = void

// ---- recruit write
export interface RecruitWriteChildrenProps {
  errors: FieldErrors<RecruitWriteSchema>
  control?: Control<RecruitWriteSchema>
  register?: UseFormRegister<RecruitWriteSchema>
}

// ---- recruit detail
export interface RecruitDetailAttachment {
  id: number
  file_name: string
  url: string
  // TODO: api 요청해야
  size: number // <<---- 바이트 단위로 받아야 함
}

export interface RecruitDetailLecture {
  thumbnail_url: string
  name: string
  instructor: string
  link: string
  price: number
}

export interface RecruitDetail {
  // NOTE: author api 요청드림
  author_nickname: string
  study_name: string
  id: number
  title: string
  content: string
  // TODO: 이미지 api 연결하고 이부분 살펴봐야 함
  content_images: string[] // 이것도 필요하니 detail 쪽으로 가야겠네... 하지만 이미지는 아직 어떻게 하는지 모르겠다
  attachments: RecruitDetailAttachment[] // 이게 필요하다그러니 detail 매번 요청보내야 함
  expected_personnel: number
  expected_fee: number
  lectures: RecruitDetailLecture[]
  tags: string[]
  due_date: string
  created_at: string
  views: number
  bookmark_count: number
  is_bookmarked: boolean
}
