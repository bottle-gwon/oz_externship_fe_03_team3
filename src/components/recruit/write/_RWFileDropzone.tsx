import FileDropzone from '@/components/commonInGeneral/fileDropzone/FileDropzone'
import Labeled from '@/components/commonInGeneral/inputFamily/labeled/Labeled'
import useStudyHubStore from '@/store/store'
import type { FileRecord, RecruitWriteChildrenProps } from '@/types'
import { useMemo } from 'react'
import { Controller } from 'react-hook-form'

const RWFileDropzone = ({ control, errors }: RecruitWriteChildrenProps) => {
  const editingRecruit = useStudyHubStore((state) => state.editingRecruit)
  const defaultFileRecord = useMemo(() => {
    if (!editingRecruit) {
      return undefined
    }

    return editingRecruit.attachments.reduce((acc: FileRecord, cur) => {
      acc[cur.id] = { size: cur.size, name: cur.file_name } as File
      return acc
    }, {})
  }, [editingRecruit])

  return (
    <Labeled isInDanger={Boolean(errors.attachments)}>
      <Labeled.Header>참고 파일 업로드</Labeled.Header>
      <Controller
        control={control}
        name="attachments"
        render={({ field: { onChange } }) => (
          <FileDropzone
            onChange={onChange}
            defaultFileRecord={defaultFileRecord}
          />
        )}
      />
      <Labeled.Footer>{errors?.attachments?.message}</Labeled.Footer>
    </Labeled>
  )
}

export default RWFileDropzone
