import { EmptyState } from './EmptyState'

export const RecommendSection = () => {
  const isLoggedIn: boolean = false

  return <div>{isLoggedIn ? <></> : <EmptyState type={'recruit'} />}</div>
}
