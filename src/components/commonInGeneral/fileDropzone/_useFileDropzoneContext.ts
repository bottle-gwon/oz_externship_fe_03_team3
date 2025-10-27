import { useContext } from 'react'
import { FileDropzoneContext } from './_FileRecordContext'

const useFileDropzoneContext = () => {
  const context = useContext(FileDropzoneContext)
  if (!context) {
    throw new Error('---- 콘텍스트가 없어요!')
  }

  return context
}

export default useFileDropzoneContext
