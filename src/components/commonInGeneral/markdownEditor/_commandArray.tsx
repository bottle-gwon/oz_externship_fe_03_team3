import { commands } from '@uiw/react-md-editor'
import Button from '@/components/commonInGeneral/button/Button'
import { Bold } from 'lucide-react'

const customCodeEdit = { ...commands.codeEdit }
customCodeEdit.icon = <Button>작성</Button>
const customCodePreivew = { ...commands.codePreview }
customCodePreivew.icon = <Button>미리보기</Button>
export const commandArray = [customCodeEdit, customCodePreivew]

const customBold = { ...commands.bold }
customBold.icon = (
  <Button>
    <Bold />
  </Button>
)

const customItalic = { ...commands.italic }
customItalic.icon = <Button>I</Button>
const customCodeBlock = { ...commands.codeBlock }
customCodeBlock.icon = <Button>CodeBlock</Button>
const customLink = { ...commands.link }
customLink.icon = <Button>Link</Button>
const customHeading1 = { ...commands.heading1 }
customHeading1.icon = <Button>Heading1</Button>
const customUnorderedList = { ...commands.unorderedListCommand }
customUnorderedList.icon = <Button>UnorderedList</Button>

export const extraCommandArray = [
  customBold,
  customItalic,
  customCodeBlock,
  customLink,
  customHeading1,
  customUnorderedList,
]
