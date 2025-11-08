import Container from '@/components/commonInGeneral/layout/_Container'
import MarkdownEditor from '@/components/commonInGeneral/markdownEditor/MarkdownEditor'

const ThePottMarkdownPage = () => {
  return (
    <Container isPadded>
      <MarkdownEditor onFileArrayDrop={() => {}} onChange={() => {}} />
    </Container>
  )
}

export default ThePottMarkdownPage
