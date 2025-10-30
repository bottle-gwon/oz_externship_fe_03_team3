import type { RecruitWriteSchema } from '@/lib/zodSchema'
import type { FieldErrors, Control, UseFormRegister } from 'react-hook-form'

export interface Recruit {
  id: number
  uuid: string
  title: string
  content: string
  thumbnail_img_url: string
  expected_headcount: number
  current_headcount: number
  estimated_fee: number
  views_count: number
  bookmark_count: number
  due_date: string
  is_closed: boolean
  tags: { id: number; name: string }[]
  lectures: { id: number; title: string; instructor: string }[]
  study_group: { id: number; uuid: string; name: string }
  author: { id: number; nickname: string; profile_img_url: string }
  is_bookmarked: boolean
  created_at: string
  updated_at: string
}

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
}

export interface RecruitDetailLecture {
  thumbnail_url: string
  name: string
  instructor: string
  link: string
  price: number
}

export interface RecruitDetail {
  // TODO: author api 요청
  author_name: string // author가 없다
  study_group_name: string // 스터디 그룹이 없다
  id: number
  title: string
  content: string
  content_images: string[]
  attachments: RecruitDetailAttachment[]
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
