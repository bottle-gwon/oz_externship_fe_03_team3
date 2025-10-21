import type { Lecture } from './_lectureInterfaces'
import type { Recruit } from './_recruitInterface'

// 추천섹션
export type RecommendPageType = 'recruit' | 'lecture'

export type Recommended<T extends RecommendPageType> = T extends 'recruit'
  ? Recruit
  : Lecture

export interface RecommendPageProps<T extends RecommendPageType> {
  type: T
  recommendedArray: Recommended<T>[]
}

// 타이틀
export type TitlePageType =
  | 'recruit' // 구인 공고 리스트 페이지
  | 'lecture' // 강의 목록 리스트 페이지
  | 'detail' // 구인 공고 상세 페이지
  | 'create' // 구인 공고 작성 페이지
  | 'manage' // 구인 공고 관리 페이지
export interface TitlePageProps {
  type: TitlePageType
  isLoggedIn?: boolean
}
