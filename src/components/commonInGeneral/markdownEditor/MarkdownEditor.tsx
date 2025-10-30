import './markdown.css'
import MDEditor from '@uiw/react-md-editor'
import { Hstack, Vstack } from '../layout'
import RoundBox from '../roundBox/RoundBox'
import { memo, useEffect, useState } from 'react'
import rehypeSanitize from 'rehype-sanitize'
import { commandArray, extraCommandArray } from './_commandArray'
import markdownPlaceholder from './_markdownPlaceholder'

interface MarkdownEditorProps {
  onChange: (value: string | undefined) => void
  defaultValue?: string
}

const MarkdownEditor = memo(
  ({ onChange, defaultValue }: MarkdownEditorProps) => {
    const [text, setText] = useState<string | undefined>(defaultValue)

    useEffect(() => {
      onChange(text)
    }, [text, onChange])

    useEffect(() => {
      setText(defaultValue)
    }, [defaultValue])

    return (
      <>
        <div className="wmde-markdown-var"></div>
        <RoundBox
          color="mono-dim"
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
