import type { PageType } from '@/types'
import RecommendGuest from './RecommendGuest'
import RecommendUser from './RecommendUser'

const RecommendSection = () => {
  // const RecommendSection = ({ type }) => {
  const type: PageType = 'recruit' // 추후에 prop으로 받을 예정
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
