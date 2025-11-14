import ErrorDisplay from '@/components/commonInGeneral/error/ErrorDisplay'

const TagEmpty = () => {
  return (
    <ErrorDisplay>
      <ErrorDisplay.Title>태그가 없습니다.</ErrorDisplay.Title>

      <p>
        현재 서버에 저장된 태그가 없거나, 에러가 발생했습니다.
        <br />
        페이지에 다시 접속해 보시고 반복적으로 문제가 발생하시면 고객센터를 통해
        연락주세요.
      </p>
    </ErrorDisplay>
  )
}

export default TagEmpty
