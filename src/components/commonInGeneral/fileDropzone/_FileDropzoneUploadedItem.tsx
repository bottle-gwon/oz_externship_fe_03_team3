import { X } from 'lucide-react'
import { Hstack } from '../layout'
import RoundBox from '../roundBox/RoundBox'
import useFileDropzoneContext from './_useFileDropzoneContext'
import { memo } from 'react'

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
        <Hstack className="justify-between">
          {file.name}
          <X onClick={handleXClick} />
        </Hstack>
      </RoundBox>
    )
  }
)

FileDropzoneUploadedItem.displayName = 'FileDropzoneUploadedItem'

export default FileDropzoneUploadedItem
