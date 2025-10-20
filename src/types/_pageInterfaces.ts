// 추천섹션 부분
export type RecommendPageType = 'recruit' | 'course'
export interface RecommendPageProps {
  type: RecommendPageType
}

// 타이틀 부분
export type TitlePageType =
  | 'recruit'
  | 'course'
  | 'detail'
  | 'create'
  | 'manage'
export interface TitlePageProps {
  type: TitlePageType
  isLoggedIn?: boolean
}
