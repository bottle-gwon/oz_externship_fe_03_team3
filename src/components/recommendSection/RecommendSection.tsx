import type { RecommendPageType } from '@/types'
import RecommendGuest from './RecommendGuest'
import RecommendUser from './RecommendUser'

const RecommendSection = ({ type }: { type: RecommendPageType }) => {
  // const RecommendSection = ({ type }) => {
  const isLoggedIn: boolean = true // 로그인 확인 boolean값, 추후에 변경

  return (
    <div>
      {isLoggedIn ? (
        <RecommendUser type={type} />
      ) : (
        <RecommendGuest type={type} />
      )}
    </div>
  )
}

export default RecommendSection
