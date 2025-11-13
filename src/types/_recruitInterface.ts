import type { RecruitWriteSchema } from '@/lib/zodSchema'
import type { FieldErrors, Control, UseFormRegister } from 'react-hook-form'

export interface RecruitTag {
  id: number
  name: string
}

export interface Recruit {
  uuid: string
  title: string
  thumbnail_img_url: string
  expected_headcount: number
  lectures: RecruitLecture[]
  tags: RecruitTag[]
  close_at: string
  views_count: number
  bookmark_count: number
  is_closed: boolean
  is_bookmarked: boolean

  //없어진 앤드포인트 임시
  id?: number
  content?: string
  current_headcount?: number
  estimated_fee?: number
  due_date?: string
  study_group?: { id: number; uuid: string; name: string }
  author?: { id: number; nickname: string; profile_img_url: string }
  created_at?: string
  updated_at?: string
}

export interface RecruitLecture {
  uuid: string
  title: string
  instructor: string
  thumbnail_img_url: string
  platform: string
  url_link: string
}

export interface RecruitTag {
  id: number
  name: string
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
  recommended_recruitments?: Recruit[]
  results: Recruit[]
  next: string
  previous: string
  count: RecruitCount
}

export interface RecruitCount {
  total: number
  open: number
  closed: number
}

// ---- recruit manage
export interface RecruitsManageResponse {
  count: { total: number; open: number; closed: number }
  previous: string | null
  next: string | null
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
  author_nickname: string
  study_group_name: string // NOTE: study_name swag 문서, 명세서에 둘 다 빠져있음, 요청 드림
  uuid: string // NOTE: id 삭제, uuid만 사용
  title: string
  content: string
  images: string[]
  attachments: RecruitDetailAttachment[] // 이게 필요하다그러니 detail 매번 요청보내야 함
  expected_headcount: number
  estimated_fee: number
  lectures: RecruitDetailLecture[] // NOTE: api 명세서에 있는데도 swag에서 빠짐, 요청 드림
  tags: RecruitTag[]
  close_at: string
  created_at: string
  views_count: number
  bookmark_count: number
  is_bookmarked: boolean
}
