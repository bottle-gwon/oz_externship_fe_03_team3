import { Hstack } from '../layout'
import { commandArray } from './_commandArray'

const MarkdownEditorToolbar = () => {
  return (
    <Hstack>
      <Hstack>{commandArray.map}</Hstack>
      <Hstack></Hstack>
    </Hstack>
  )
}

export default MarkdownEditorToolbar
