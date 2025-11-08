import { useState, useEffect } from 'react'

interface FileDropOptions {
  onFileArrayDrop: (fileArray: File[]) => void
  onDragEnterChange: (isDragEntered: boolean) => void
}

const useFileDrop = (options: FileDropOptions) => {
  const { onFileArrayDrop, onDragEnterChange } = options

  const [isDragEntered, setIsDragEntered] = useState(false)

  useEffect(() => {
    onDragEnterChange(isDragEntered)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragEntered])

  const onDragEnter = () => {
    setIsDragEntered(true)
  }
  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    // 새 탭 안 열리게 하는 데에 필수 1/2
    event.preventDefault()
  }
  const onDragLeave = () => {
    setIsDragEntered(false)
  }
  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    // 새 탭 안 열리게 하는 데에 필수 2/2
    event.preventDefault()
    setIsDragEntered(false)

    if (event.dataTransfer) {
      const files = event.dataTransfer.files
      onFileArrayDrop([...files])
    }
  }

  return { onDragEnter, onDragOver, onDragLeave, onDrop }
}

export default useFileDrop
