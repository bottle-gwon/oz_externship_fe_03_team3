import type { JSX } from 'react'
import ErrorDisplay from './ErrorDisplay'

const NotFoundContent = ({
  redirectButton,
}: {
  redirectButton?: JSX.Element
}) => {
  return (
    <ErrorDisplay>
      <ErrorDisplay.Code>404</ErrorDisplay.Code>
      <ErrorDisplay.Title>찾으시는 페이지가 없습니다</ErrorDisplay.Title>
      <p>
        방문하시려는 페이지의 주소가 잘못 입력되었거나, 삭제되어 사용하실 수
        없습니다.
        <br />
        입력하신 주소가 정확한지 다시 한 번 확인해주세요.
      </p>
      {redirectButton}
    </ErrorDisplay>
  )
}

export default NotFoundContent
