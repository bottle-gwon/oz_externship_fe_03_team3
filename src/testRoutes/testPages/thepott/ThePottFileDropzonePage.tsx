import Button from '@/components/commonInGeneral/button/Button'
import FileDropzone from '@/components/commonInGeneral/fileDropzone/FileDropzone'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import { useState } from 'react'
import { useForm, type FieldValues } from 'react-hook-form'

const ThePottFileDropzonePage = () => {
  const [fieldValues, setFieldValues] = useState<FieldValues | null>(null)
  const { handleSubmit, setValue } = useForm()

  const onSubmit = (data: FieldValues) => {
    setFieldValues(data)
  }

  return (
    <Container isPadded>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Vstack>
          <FileDropzone
            onChange={(fileArray) => setValue('attachments', fileArray)}
          />
        </Vstack>
        <Hstack>
          <Button>Submit</Button>
        </Hstack>
      </form>
      <p>{JSON.stringify(fieldValues)}</p>
    </Container>
  )
}

export default ThePottFileDropzonePage
