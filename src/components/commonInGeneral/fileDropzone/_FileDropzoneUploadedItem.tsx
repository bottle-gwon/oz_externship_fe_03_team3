import { FileText, X } from 'lucide-react'
import { Hstack } from '../layout'
import RoundBox from '../roundBox/RoundBox'
import useFileDropzoneContext from './_useFileDropzoneContext'
import { memo } from 'react'
import Button from '../button/Button'

interface FifleDropzoneUploaedItemProps {
  fileId: number
  file: File
  isNotValid: boolean
}
const FileDropzoneUploadedItem = memo(
  ({ fileId, file, isNotValid }: FifleDropzoneUploaedItemProps) => {
    const { setFileRecord } = useFileDropzoneContext()

    const handleXClick = () => {
      setFileRecord((prev) => {
        const copiedFileRecord = { ...prev }
        delete copiedFileRecord[fileId]
        return copiedFileRecord
      })
    }

    const size = Math.round(file.size / 10_000) / 100

    return (
      <RoundBox
        onClick={(event) => event.stopPropagation()}
        color={isNotValid ? 'danger' : 'mono-bright'}
      >
        <Hstack className="gap-oz-sm items-center">
          <Hstack className="gap-oz-sm grow items-center text-sm">
            <FileText size={14} className="text-gray-400" />
            {file.name}
          </Hstack>
          <p
            className={`text-xs ${isNotValid ? 'text-danger-500' : 'text-gray-500'}`}
          >
            {size}MB
          </p>
          <Button variant="ghost" className="p-0" type="button">
            <X onClick={handleXClick} size={14} />
          </Button>
        </Hstack>
      </RoundBox>
    )
  }
)

FileDropzoneUploadedItem.displayName = 'FileDropzoneUploadedItem'

export default FileDropzoneUploadedItem
