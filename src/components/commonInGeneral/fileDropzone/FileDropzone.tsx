import { useEffect, useRef, useState, type ChangeEvent } from 'react'
import { Vstack } from '../layout'
import RoundBox from '../roundBox/RoundBox'
import UploadIcon from '@/assets/upload.svg'
import type { FieldValues, UseFormSetValue } from 'react-hook-form'

type FileRecord = Record<number, File>

const FileDropzone = ({
  setValue,
}: {
  setValue: UseFormSetValue<FieldValues>
}) => {
  const [isDragEntered, setIsDragEntered] = useState(false)
  const [fileRecord, setFileRecord] = useState<FileRecord>({})
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const fileArray = Object.values(fileRecord)
    setValue('attachments', fileArray)
  }, [fileRecord, setValue])

  const addFiles = (files: FileList) => {
    const newRecord: FileRecord = [...files].reduce((acc: FileRecord, file) => {
      acc[Date.now()] = file
      return acc
    }, {})
    setFileRecord({ ...fileRecord, ...newRecord })
  }

  const handleDragOver = () => {
    setIsDragEntered(true)
  }
  const handleDragLeave = () => {
    setIsDragEntered(false)
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
    <RoundBox
      color={isDragEntered ? 'primary' : 'mono-bright'}
      padding="xl"
      borderStyle="dashed"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={handleClick}
    >
      <input
        ref={inputRef}
        hidden
        onChange={handleChangeFromClick}
        type="file"
      />
      <Vstack
        gap="sm"
        className="pointer-events-none items-center text-gray-500"
        draggable={false}
      >
        <img src={UploadIcon} />
        <Vstack gap="none" className="items-center">
          <h4 className="text-sm">파일을 드래그하거나 클릭하여 업로드</h4>
          <p className="text-xs">최대 3개 파일, 각 5MB 이하</p>
        </Vstack>
      </Vstack>
    </RoundBox>
  )
}

export default FileDropzone
