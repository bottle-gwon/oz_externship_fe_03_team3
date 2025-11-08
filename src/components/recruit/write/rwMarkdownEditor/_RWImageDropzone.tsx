// import api from '@/api/api'
import FileDropLayer from '@/components/commonInGeneral/fileDropLayer/FileDropLayer'
import useRecruitWriteStore from '@/store/recruitWrite/recruitWriteStore'
import { useState } from 'react'

// const postImage = async () => {
//   const response = await api.post('/recruitments/presigned-url')
//   const fileUrl = response.data[0].file_url
//   return fileUrl
// }

const RWImageDropzone = () => {
  const [isDragEntered, setIsDragEntered] = useState(false)
  const setInsertingTextArray = useRecruitWriteStore(
    (state) => state.setInsertingTextArray
  )
  const setReplacingArray = useRecruitWriteStore(
    (state) => state.setReplacingArray
  )

  const handleFileArrayChange = (_fileArray: File[]) => {
    // NOTE: 테스트할 땐 아래 주석을 해제해주세요
    // console.log({_fileArray})
    //   debugger
    // ---- 여기까지
    // TODO: 여기 찍히면 텍스트 인서트하자
    setInsertingTextArray(['---- 가나다라 ----', '---- 에이비비에이 ----'])
  }

  return (
    <FileDropLayer
      onFileArrayChange={handleFileArrayChange}
      onDragEnterChange={setIsDragEntered}
      className={`absolute top-0 left-0 h-full w-full ${isDragEntered ? 'bg-amber-100' : ''}`}
    />
  )
}

export default RWImageDropzone
