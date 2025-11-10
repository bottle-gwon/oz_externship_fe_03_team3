import type { Style } from '@/types'
import { useState } from 'react'

interface FileDropOptions {
  onFileArrayDrop: (fileArray: File[]) => void
}

const useFileDrop = (options: FileDropOptions) => {
  const { onFileArrayDrop } = options

  const [isDragEntered, setIsDragEntered] = useState(false)

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

  const style: Style = {
    backgroundColor: isDragEntered ? 'var(--color-primary-50)' : undefined,
  }

  return { onDragEnter, onDragOver, onDragLeave, onDrop, style }
}

export default useFileDrop
