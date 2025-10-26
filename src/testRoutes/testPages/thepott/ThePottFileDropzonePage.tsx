import Button from '@/components/commonInGeneral/button/Button'
import FileDropzone from '@/components/commonInGeneral/fileDropzone/FileDropzone'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import { useForm } from 'react-hook-form'

const ThePottFileDropzonePage = () => {
  const { handleSubmit, setValue } = useForm()

  const onSubmit = (data: any) => {
    console.log({ data })
  }

  return (
    <Container isPadded>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Vstack>
          <FileDropzone setValue={setValue} />
        </Vstack>
        <Hstack>
          <Button>Submit</Button>
          <Button>Console.log</Button>
        </Hstack>
      </form>
    </Container>
  )
}

export default ThePottFileDropzonePage
