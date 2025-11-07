import { useEffect, useRef, useState, type ChangeEvent } from 'react'
import { Vstack } from '../layout'
import RoundBox from '../roundBox/RoundBox'
import UploadIcon from '@/assets/upload.svg'
import { FileDropzoneContext } from '../fileDropzone/_FileRecordContext'
import type { DivProps, FileRecord } from '@/types'

interface FileDropLayerProps {
  onFileArrayChange: (fileArray: File[]) => void
  onDragEnterChange: (isDragEnter: boolean) => void
  defaultFileRecord?: FileRecord
}

const FileDropLayer = ({
  onFileArrayChange,
  onDragEnterChange,
  defaultFileRecord,
  ...props
}: FileDropLayerProps & DivProps) => {
  const [isDragEntered, setIsDragEntered] = useState(false)
  const [fileRecord, setFileRecord] = useState<FileRecord>({})
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const fileArray = Object.values(fileRecord)
    const realFileArray = fileArray.filter((file) => file.lastModified)
    onFileArrayChange(realFileArray)
  }, [fileRecord, onFileArrayChange])

  useEffect(() => {
    if (!defaultFileRecord) {
      return
    }
    setFileRecord(defaultFileRecord)
  }, [defaultFileRecord])

  useEffect(() => {
    onDragEnterChange(isDragEntered)
  }, [isDragEntered, onDragEnterChange])

  const addFiles = (files: FileList) => {
    let iteration = 0
    const newRecord: FileRecord = [...files].reduce((acc: FileRecord, file) => {
      acc[Date.now() + iteration] = file
      iteration += 1
      return acc
    }, {})
    setFileRecord({ ...fileRecord, ...newRecord })
  }

  const handleDragEnter = () => {
    setIsDragEntered(true)
  }
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    // 새 탭 안 열리게 하는 데에 필수 1/2
    event.preventDefault()
  }
  const handleDragLeave = () => {
    setIsDragEntered(false)
  }
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    // 새 탭 안 열리게 하는 데에 필수 2/2
    event.preventDefault()
    setIsDragEntered(false)

    if (event.dataTransfer) {
      const files = event.dataTransfer.files
      addFiles(files)
    }
  }
  const handleChangeFromClick = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (!event.target.files) {
      return
    }
    addFiles(event.target.files)
  }
  const handleClick = () => {
    inputRef.current?.click()
  }

  return (
    <FileDropzoneContext.Provider value={{ fileRecord, setFileRecord }}>
      <div
        {...props}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          ref={inputRef}
          hidden
          onChange={handleChangeFromClick}
          type="file"
          multiple
        />
      </div>
    </FileDropzoneContext.Provider>
  )
}

export default FileDropLayer
