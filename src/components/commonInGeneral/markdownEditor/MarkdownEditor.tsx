import './markdown.css'
import MDEditor from '@uiw/react-md-editor'
import { Hstack, Vstack } from '../layout'
import RoundBox from '../roundBox/RoundBox'
import { useEffect, useState } from 'react'
import rehypeSanitize from 'rehype-sanitize'
import { commandArray, extraCommandArray } from './_commandArray'
import markdownPlaceholder from './_markdownPlaceholder'
import type { UseFormSetValue, FieldValues } from 'react-hook-form'

interface MarkdownEditorProps {
  setValue: UseFormSetValue<FieldValues>
}

const MarkdownEditor = ({ setValue }: MarkdownEditorProps) => {
  const [text, setText] = useState<string | undefined>('')

  useEffect(() => {
    setValue('content', text)
  }, [text, setValue])

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

export default MarkdownEditor
