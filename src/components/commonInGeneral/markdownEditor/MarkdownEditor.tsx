import './markdown.css'
import MDEditor from '@uiw/react-md-editor'
import { Vstack } from '../layout'
import RoundBox from '../roundBox/RoundBox'
import { useState } from 'react'
import rehypeSanitize from 'rehype-sanitize'
import { commandArray, extraCommandArray } from './_commandArray'
import markdownPlaceholder from './_markdownPlaceholder'

const MarkdownEditor = () => {
  const [value, setValue] = useState<string | undefined>('')

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
            value={value}
            onChange={setValue}
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
          <div className="bg-gray-50">
            <div>마크다운 문법을 사용할 수 있습니다.</div>
            <div>예아 베이비</div>
          </div>
        </Vstack>
      </RoundBox>
    </>
  )
}

export default MarkdownEditor
