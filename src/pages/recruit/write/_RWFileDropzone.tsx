import FileDropzone from '@/components/commonInGeneral/fileDropzone/FileDropzone'
import Labeled from '@/components/commonInGeneral/inputFamily/labeled/Labeled'
import type { RecruitWriteChildrenProps } from '@/types'
import { Controller } from 'react-hook-form'

const RWFileDropzone = ({ control, errors }: RecruitWriteChildrenProps) => {
  console.log({ errors })
  return (
    <Labeled isInDanger={Boolean(errors.attachments)}>
      <Labeled.Header>참고 파일 업로드</Labeled.Header>
      <Controller
        control={control}
        name="attachments"
        render={({ field: { onChange } }) => (
          <FileDropzone onChange={onChange} />
        )}
      />
      <Labeled.Footer>{errors?.attachments?.message}</Labeled.Footer>
    </Labeled>
  )
}

export default RWFileDropzone
