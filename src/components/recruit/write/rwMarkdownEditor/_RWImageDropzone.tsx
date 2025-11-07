import FileDropLayer from '@/components/commonInGeneral/fileDropLayer/FileDropLayer'
import { useState } from 'react'

const RWImageDropzone = () => {
  const [isDragEntered, setIsDragEntered] = useState(false)

  return (
    <FileDropLayer
      onFileArrayChange={(fileArray) => {}}
      onDragEnterChange={setIsDragEntered}
      className={`absolute top-0 left-0 h-full w-full ${isDragEntered ? 'bg-amber-100' : 'bg-blue-300'}`}
    />
  )
}

export default RWImageDropzone
