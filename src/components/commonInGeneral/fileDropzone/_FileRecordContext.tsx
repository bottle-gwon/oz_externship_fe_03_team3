import type { FileRecord } from '@/types'
import { createContext } from 'react'

interface FileDropzoneContextProps {
  fileRecord: FileRecord
  setFileRecord: React.Dispatch<React.SetStateAction<FileRecord>>
}

export const FileDropzoneContext =
  createContext<FileDropzoneContextProps | null>(null)
