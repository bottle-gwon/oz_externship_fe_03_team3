import FileDropzone from '@/components/commonInGeneral/fileDropzone/FileDropzone'
import { Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import { useForm } from 'react-hook-form'

const ThePottFileDropzonePage = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    console.log({ data })
  }

  return (
    <Container isPadded>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Vstack>
          <FileDropzone register={register} />
        </Vstack>
      </form>
    </Container>
  )
}

export default ThePottFileDropzonePage
