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

    return (
      <RoundBox>
        <Hstack className="items-center">
          <Hstack className="gap-oz-sm grow items-center text-sm">
            <FileText size={14} className="text-gray-400" />
            {file.name}
          </Hstack>
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
