import FileDropzone from '@/components/commonInGeneral/fileDropzone/FileDropzone'
import { Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'

const ThePottFileDropzonePage = () => {
  return (
    <Container isPadded>
      <form>
        <Vstack>
          <FileDropzone />
        </Vstack>
      </form>
    </Container>
  )
}

export default ThePottFileDropzonePage
