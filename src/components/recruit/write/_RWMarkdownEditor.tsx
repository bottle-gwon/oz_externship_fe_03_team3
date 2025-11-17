import Labeled from '@/components/commonInGeneral/inputFamily/labeled/Labeled'
import { Hstack } from '@/components/commonInGeneral/layout'
import MarkdownEditor from '@/components/commonInGeneral/markdownEditor/MarkdownEditor'
import useStudyHubStore from '@/store/store'
import type { RecruitWriteChildrenProps, Replacing } from '@/types'
import { RECRUIT_WRITE_CONFIG } from '@/utils/constants'
import { Controller } from 'react-hook-form'
import useRecruitWriteStore from '@/store/recruitWrite/recruitWriteStore'
import postFileForPresignedUrl from './_postFileForPresignedUrl'

// NOTE: 명세서 상으론 복수의 이미지를 업로드할 수 있는데 실제론 맨 앞 것만 됩니다
// NOTE: 이 때문에 개별적으로 요청을 보냅니다
// NOTE: 이 부분은 https로만 테스트가 가능하기 때문에 배포를 하고 테스트해야 합니다

const postImages = async (fileArray: File[]) => {
  const state = useRecruitWriteStore.getState()
  const setInsertingTextArray = state.setInsertingTextArray
  const setReplacingArray = state.setReplacingArray

  const insertingPlaceholderArray = fileArray.map(
    (file) => `<!-- Uploading "${file.name}"...--><br>`
  )
  setInsertingTextArray(insertingPlaceholderArray)

  try {
    const promiseArray = fileArray.map((file) => postFileForPresignedUrl(file))
    const urlArray = await Promise.all(promiseArray)

    const replacingArray: Replacing[] = urlArray.map((url, index) => ({
      insertedText: insertingPlaceholderArray[index],
      replacingText: `<img src="${url}" />`,
    }))
    setReplacingArray(replacingArray)
  } catch {
    const replacingArray: Replacing[] = fileArray.map((file, index) => ({
      insertedText: insertingPlaceholderArray[index],
      replacingText: `<!-- ${file.name} 업로드를 실패했습니다 -->`,
    }))
    setReplacingArray(replacingArray)
  }
}

const RWMarkdownEditor = ({ errors, control }: RecruitWriteChildrenProps) => {
  const editingRecruit = useStudyHubStore((state) => state.editingRecruit)
  const insertingTextArray = useRecruitWriteStore(
    (state) => state.insertingTextArray
  )
  const replacingArray = useRecruitWriteStore((state) => state.replacingArray)

  const handleFileArrayDrop = (fileArray: File[]) => {
    postImages(fileArray)
  }

  // NOTE: 대용 코치님께서 마크다운 에디터에 넣는 이미지 수는 제한이 없다고 하셨습니다.
  return (
    <Labeled isRequired isInDanger={Boolean(errors.content)}>
      <Labeled.Header>스터디 그룹 소개</Labeled.Header>
      <Hstack className="justify-between text-xs text-gray-500">
        <p>마크다운 문법을 사용할 수 있습니다</p>
      </Hstack>
      <Controller
        control={control}
        name="content"
        render={({ field: { onChange } }) => (
          <div className="relative">
            <MarkdownEditor
              isInDanger={Boolean(errors?.content)}
              defaultValue={editingRecruit?.content}
              onChange={onChange}
              insertingTextArray={insertingTextArray}
              replacingArray={replacingArray}
              onFileArrayDrop={handleFileArrayDrop}
            />
          </div>
        )}
      />
      <Labeled.Footer>{errors?.content?.message}</Labeled.Footer>
      <Labeled.Footer>
        • 마크다운 문법: **굵게**, *기울임*, # 제목, - 목록 등
      </Labeled.Footer>
      <Labeled.Footer>
        • 이미지 추가: ![설명](이미지URL) - 각{' '}
        {RECRUIT_WRITE_CONFIG.MAX_IMAGE_FILE_SIZE} 이하
      </Labeled.Footer>
    </Labeled>
  )
}

export default RWMarkdownEditor
