import './markdown.css'
import MDEditor, { type RefMDEditor } from '@uiw/react-md-editor'
import { Hstack, Vstack } from '../layout'
import RoundBox from '../roundBox/RoundBox'
import { memo, useEffect, useRef, useState } from 'react'
import rehypeSanitize from 'rehype-sanitize'
import { commandArray, extraCommandArray } from './_commandArray'
import markdownPlaceholder from './_markdownPlaceholder'
import type { Replacing } from '@/types'
import useFileDrop from '../fileDropLayer/useFileDrop'

interface MarkdownEditorProps {
  onChange: (value: string | undefined) => void
  defaultValue?: string
  insertingTextArray?: string[]
  replacingArray?: Replacing[]
  onFileArrayDrop: (fileArray: File[]) => void
}

const MarkdownEditor = memo(
  ({
    onChange,
    defaultValue,
    insertingTextArray,
    replacingArray,
    onFileArrayDrop,
  }: MarkdownEditorProps) => {
    const [text, setText] = useState<string | undefined>(defaultValue)
    const editorRef = useRef<RefMDEditor>(null)
    const [isDragEntered, setIsDragEntered] = useState(false)
    const fileDropProps = useFileDrop({
      onDragEnterChange: (isEntered) => setIsDragEntered(isEntered),
      onFileArrayDrop,
    })
    const [textarea, setTextarea] = useState<HTMLTextAreaElement | null>(null)

    useEffect(() => {
      onChange(text)
    }, [text, onChange])

    useEffect(() => {
      setText(defaultValue)
    }, [defaultValue])

    useEffect(() => {
      if (!insertingTextArray || insertingTextArray.length === 0) {
        return
      }

      if (!textarea) {
        return
      }

      const previousText = textarea.value
      const beforeText = previousText.slice(0, textarea.selectionStart)
      const afterText = previousText.slice(textarea.selectionStart)
      const textResult = [
        beforeText,
        '<br>',
        ...insertingTextArray,
        ...afterText,
      ].join('')
      setText(textResult)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [insertingTextArray])

    useEffect(() => {
      if (!editorRef.current || !editorRef.current.container) {
        return
      }

      const target = editorRef.current.container.querySelector('textarea')
      if (!target) {
        return
      }
      setTextarea(target)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editorRef.current])

    useEffect(() => {}, [replacingArray])

    return (
      <>
        <div className="wmde-markdown-var"></div>
        <RoundBox
          color={isDragEntered ? 'mono-dim' : 'primary'}
          padding="none"
          className="overflow-hidden"
          data-color-mode="light"
        >
          <Vstack className="gap-0">
            <MDEditor
              value={text}
              onChange={setText}
              height={284}
              visibleDragbar={false}
              previewOptions={{
                rehypePlugins: [[rehypeSanitize]],
              }}
              preview="edit"
              commands={commandArray}
              extraCommands={extraCommandArray}
              ref={editorRef}
              textareaProps={{
                placeholder: markdownPlaceholder,
              }}
              components={{
                toolbar: (command, disabled, executeCommand) => {
                  if (command.keyCommand === 'code') {
                    return (
                      <button
                        aria-label="Insert code"
                        disabled={disabled}
                        onClick={(evn) => {
                          evn.stopPropagation()
                          executeCommand(command, command.groupName)
                        }}
                      >
                        Code
                      </button>
                    )
                  }
                },
              }}
              {...fileDropProps}
            />
            <Hstack className="gap-oz-xs px-oz-lg py-oz-sm bg-gray-50 text-xs text-gray-600">
              <p>마크다운 문법을 사용할 수 있습니다.</p>
              <p>**굵게**</p>
              <p>*기울일*</p>
              <p>`코드`</p>
              <p>[링크](URL)</p>
              <p>## 제목</p>
            </Hstack>
          </Vstack>
        </RoundBox>
      </>
    )
  }
)

MarkdownEditor.displayName = 'MarkdownEditor'
export default MarkdownEditor
