import { Vstack } from '../layout'
import RoundBox from '../roundBox/RoundBox'
import UploadIcon from '@/assets/upload.svg'

const FileDropzone = () => {
  return (
    <RoundBox color="mono-bright" padding="xl" borderStyle="dashed">
      <Vstack gap="sm" className="items-center text-gray-500">
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
