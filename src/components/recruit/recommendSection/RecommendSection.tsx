import { GuestRecommend } from './Guestrecommend'

export const RecommendSection = () => {
  const isLoggedIn: boolean = false // 로그인 확인 boolean값, 추후에 변경

  return <div>{isLoggedIn ? <></> : <GuestRecommend type={'recruit'} />}</div>
}
