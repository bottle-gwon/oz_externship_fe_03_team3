import { useEffect, useRef, useState, type ChangeEvent } from 'react'
import { Vstack } from '../layout'
import RoundBox from '../roundBox/RoundBox'
import UploadIcon from '@/assets/upload.svg'
import { FileDropzoneContext } from './_FileRecordContext'
import FileDropzoneUploadedSection from './_FileDropzoneUploadedSection'

export type FileRecord = Record<number, File>

const FileDropzone = ({
  onChange,
  defaultFileRecord,
}: {
  onChange: (fileArray: File[]) => void
  defaultFileRecord?: FileRecord
}) => {
  const [isDragEntered, setIsDragEntered] = useState(false)
  const [fileRecord, setFileRecord] = useState<FileRecord>({})
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const fileArray = Object.values(fileRecord)
    const realFileArray = fileArray.filter((file) => file.lastModified)

    onChange(realFileArray)
  }, [fileRecord, onChange])

  useEffect(() => {
    if (!defaultFileRecord) {
      return
    }
    setFileRecord(defaultFileRecord)
  }, [defaultFileRecord])

  const addFiles = (files: FileList) => {
    let iteration = 0
    const newRecord: FileRecord = [...files]
      .slice(0, 5)
      .reduce((acc: FileRecord, file) => {
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
      <Vstack>
        <RoundBox
          color={isDragEntered ? 'primary' : 'mono-bright'}
          padding="xl"
          borderStyle="dashed"
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

          <Vstack
            gap="sm"
            className="pb-oz-lg pointer-events-none items-center text-gray-500"
            draggable={false}
          >
            <img src={UploadIcon} />
            <Vstack gap="none" className="items-center">
              <h4 className="text-sm">파일을 드래그하거나 클릭하여 업로드</h4>
              <p className="text-xs">최대 3개 파일, 각 5MB 이하</p>
            </Vstack>
          </Vstack>

          <FileDropzoneUploadedSection />
        </RoundBox>
      </Vstack>
    </FileDropzoneContext.Provider>
  )
}

export default FileDropzone
