import { useState } from 'react'
import MDEditor, { commands } from '@uiw/react-md-editor'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import Container from '@/components/commonInGeneral/layout/_Container'
import rehypeSanitize from 'rehype-sanitize'

const ThePottMarkdownPage = () => {
  const [value, setValue] = useState<string | undefined>('**Hello world!!!**')

  return (
    <Container isPadded data-color-mode="light">
      <div className="wmde-markdown-var"></div>
      <RoundBox color="mono-dim" padding="none" className="overflow-hidden">
        <Hstack></Hstack>
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
            commands={[commands.codeEdit, commands.codePreview]}
            extraCommands={[
              commands.bold,
              commands.italic,
              commands.codeBlock,
              commands.link,
              commands.heading1,
              commands.unorderedListCommand,
            ]}
          />
          <div className="bg-gray-50">
            <div>마크다운 문법을 사용할 수 있습니다.</div>
            <div>예아 베이비</div>
          </div>
        </Vstack>
      </RoundBox>
    </Container>
  )
}

export default ThePottMarkdownPage
