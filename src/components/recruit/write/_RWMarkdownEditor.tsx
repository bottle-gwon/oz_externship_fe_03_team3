import FileDropLayer from '@/components/commonInGeneral/fileDropLayer/FileDropLayer'
import Labeled from '@/components/commonInGeneral/inputFamily/labeled/Labeled'
import { Hstack } from '@/components/commonInGeneral/layout'
import MarkdownEditor from '@/components/commonInGeneral/markdownEditor/MarkdownEditor'
import useStudyHubStore from '@/store/store'
import type { RecruitWriteChildrenProps } from '@/types'
import { RECRUIT_WRITE_CONFIG } from '@/utils/constants'
import { useState } from 'react'
import { Controller } from 'react-hook-form'

const Somewhere = () => {
  const [isDragEntered, setIsDragEntered] = useState(false)
  return (
    <div
      className={`relative h-[400px] w-[400px] ${isDragEntered ? 'bg-amber-100' : 'bg-blue-300'}`}
    >
      <FileDropLayer
        onFileArrayChange={(fileArray) => {
          debugger
        }}
        onDragEnterChange={setIsDragEntered}
        className="absolute top-0 left-0 h-full w-full"
      />
    </div>
  )
}

const RWMarkdownEditor = ({ errors, control }: RecruitWriteChildrenProps) => {
  const editingRecruit = useStudyHubStore((state) => state.editingRecruit)

  // TODO: 이미지 api 연결하면 이미지 개수도 다르게 세야 함

  return (
    <Labeled isRequired isInDanger={Boolean(errors.content)}>
      <Somewhere />
      <Labeled.Header>스터디 그룹 소개</Labeled.Header>
      <Hstack className="justify-between text-xs text-gray-500">
        <p>마크다운 문법을 사용할 수 있습니다</p>
        <p>이미지 {editingRecruit?.content_images.length}/5개</p>
      </Hstack>
      <Controller
        control={control}
        name="content"
        render={({ field: { onChange } }) => (
          <MarkdownEditor
            defaultValue={editingRecruit?.content}
            onChange={onChange}
          />
        )}
      />
      <Labeled.Footer>{errors?.content?.message}</Labeled.Footer>
      <Labeled.Footer>
        • 마크다운 문법: **굵게**, *기울임*, # 제목, - 목록 등
      </Labeled.Footer>
      <Labeled.Footer>
        • 이미지 추가: ![설명](이미지URL) - 최대{' '}
        {RECRUIT_WRITE_CONFIG.MAX_IMAGE}개, 각{' '}
        {RECRUIT_WRITE_CONFIG.MAX_IMAGE_FILE_SIZE} 이하
      </Labeled.Footer>
    </Labeled>
  )
}

export default RWMarkdownEditor
