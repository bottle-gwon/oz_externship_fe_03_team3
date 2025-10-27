import { commands } from '@uiw/react-md-editor'
import { Bold, Code, Heading1, Italic, Link, List } from 'lucide-react'

const customCodeEdit = { ...commands.codeEdit }
customCodeEdit.icon = <p>작성</p>
const customCodePreivew = { ...commands.codePreview }
customCodePreivew.icon = <p>미리보기</p>
export const commandArray = [customCodeEdit, customCodePreivew]

const customBold = { ...commands.bold }
customBold.icon = <Bold size={16} />
const customItalic = { ...commands.italic }
customItalic.icon = <Italic size={16} />
const customCodeBlock = { ...commands.codeBlock }
customCodeBlock.icon = <Code size={16} />
const customLink = { ...commands.link }
customLink.icon = <Link size={16} />
const customHeading1 = { ...commands.heading1 }
customHeading1.icon = <Heading1 size={16} />
const customUnorderedList = { ...commands.unorderedListCommand }
customUnorderedList.icon = <List size={16} />

export const extraCommandArray = [
  customBold,
  customItalic,
  customCodeBlock,
  customLink,
  customHeading1,
  customUnorderedList,
]
