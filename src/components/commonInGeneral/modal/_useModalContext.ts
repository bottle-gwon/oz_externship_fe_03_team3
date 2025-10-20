import { useContext } from 'react'
import ModalContext from './_ModalContext'

const useModalContext = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('---- 콘텍스트가 없습니다!')
  }

  return context
}

export default useModalContext
