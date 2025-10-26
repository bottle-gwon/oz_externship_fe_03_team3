import { useEffect, useRef, useState, type ChangeEvent } from 'react'
import { Hstack, Vstack } from '../layout'
import RoundBox from '../roundBox/RoundBox'
import UploadIcon from '@/assets/upload.svg'
import type { FieldValues, UseFormSetValue } from 'react-hook-form'
import Button from '../button/Button'
import { X } from 'lucide-react'

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

  let nextFileId: number = 0
  const addFiles = (files: FileList) => {
    const newRecord: FileRecord = [...files].reduce((acc: FileRecord, file) => {
      acc[nextFileId] = file
      nextFileId += 1
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
  const handleDeleteClick = (id: number) => {
    const copiedFileRecord = { ...fileRecord }
    delete copiedFileRecord[id]
    setFileRecord(copiedFileRecord)
  }

  const fileEntryArray = Object.entries(fileRecord)

  const handleDebugClick = () => {
    console.log({ fileRecord })
    debugger
  }

  return (
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
      {fileEntryArray.map((entry) => (
        <Hstack key={entry[0]}>
          <RoundBox key={entry[0]}>{entry[1].name}</RoundBox>
          <X onClick={() => handleDeleteClick(Number(entry[0]))} />
        </Hstack>
      ))}
      <p>{JSON.stringify(fileRecord)}</p>
      <Button onClick={handleDebugClick}>DEBUG</Button>
    </Vstack>
  )
}

export default FileDropzone
