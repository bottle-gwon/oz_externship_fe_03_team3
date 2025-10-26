import { Vstack } from '../layout'
import FileDropzoneUploadedItem from './_FileDropzoneUploadedItem'
import useFileDropzoneContext from './_useFileDropzoneContext'

const FileDropzoneUploadedSection = () => {
  const { fileRecord } = useFileDropzoneContext()
  const fileEntryArray = Object.entries(fileRecord)

  if (fileEntryArray.length === 0) {
    return null
  }

  return (
    <Vstack>
      <p>업로드된 파일:</p>
      {fileEntryArray.map((entry) => (
        <FileDropzoneUploadedItem
          key={entry[0]}
          fileId={Number(entry[0])}
          file={entry[1]}
        />
      ))}
    </Vstack>
  )
}

export default FileDropzoneUploadedSection
