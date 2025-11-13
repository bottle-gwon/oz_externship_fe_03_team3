import ErrorDisplay from './ErrorDisplay'

const UnknwonErrorContent = () => {
  return (
    <ErrorDisplay>
      <ErrorDisplay.Code>Error</ErrorDisplay.Code>
      <ErrorDisplay.Title>알 수 없는 에러가 발생했습니다</ErrorDisplay.Title>
      <p>잠시 후 다시 시도해주세요</p>
    </ErrorDisplay>
  )
}

export default UnknwonErrorContent
