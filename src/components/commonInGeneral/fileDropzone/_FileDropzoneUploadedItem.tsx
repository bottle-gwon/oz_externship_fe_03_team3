import { FileText, X } from 'lucide-react'
import { Hstack } from '../layout'
import RoundBox from '../roundBox/RoundBox'
import useFileDropzoneContext from './_useFileDropzoneContext'
import { memo } from 'react'
import Button from '../button/Button'

interface FifleDropzoneUploaedItemProps {
  fileId: number
  file: File
}
const FileDropzoneUploadedItem = memo(
  ({ fileId, file }: FifleDropzoneUploaedItemProps) => {
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
      <RoundBox>
        <Hstack className="gap-oz-sm items-center">
          <Hstack className="gap-oz-sm grow items-center text-sm">
            <FileText size={14} className="text-gray-400" />
            {file.name}
          </Hstack>
          <p className="text-xs text-gray-500">{size}MB</p>
          <Button variant="ghost" className="p-0">
            <X onClick={handleXClick} size={14} />
          </Button>
        </Hstack>
      </RoundBox>
    )
  }
)

FileDropzoneUploadedItem.displayName = 'FileDropzoneUploadedItem'

export default FileDropzoneUploadedItem
