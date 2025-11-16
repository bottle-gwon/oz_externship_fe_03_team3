import ErrorDisplay from '@/components/commonInGeneral/error/ErrorDisplay'

interface ChatErrorInterface {
  message: string
}

const ChatError = ({ message }: ChatErrorInterface) => {
  return (
    <ErrorDisplay>
      <ErrorDisplay.Code>Error</ErrorDisplay.Code>
      <ErrorDisplay.Title>{message || '알 수 없는 에러'}</ErrorDisplay.Title>
    </ErrorDisplay>
  )
}

export default ChatError
