import { useContext } from 'react'
import ErrorDisplayContext from './_ErrorDisplayContext'

const useErrorDisplayContext = () => {
  const context = useContext(ErrorDisplayContext)
  if (!context) {
    throw new Error('---- 콘텍스트가 없어요')
  }

  return context
}

export default useErrorDisplayContext
