import { useRef, useState, type ChangeEvent } from 'react'
import { Vstack } from '../layout'
import RoundBox from '../roundBox/RoundBox'
import UploadIcon from '@/assets/upload.svg'

interface LabeledFile {
  id: string
  file: File
}

const FileDropzone = () => {
  const [isDragEntered, setIsDragEntered] = useState(false)
  const [labeledFileArray, setLabeledFileArray] = useState<LabeledFile[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = () => {
    setIsDragEntered(true)
  }
  const handleDragLeave = () => {
    setIsDragEntered(false)
  }
  const handleDrop = (event: ChangeEvent) => {
    event.preventDefault()
    debugger
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
      <input ref={inputRef} hidden onChange={handleDrop} type="file" />
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
