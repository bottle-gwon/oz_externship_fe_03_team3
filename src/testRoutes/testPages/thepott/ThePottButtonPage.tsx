import Button from '@/components/commonInGeneral/button/Button'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'

const ThePottButtonPage = () => {
  return (
    <Vstack>
      <Hstack gap="xxl" className="p-12">
        <Button color="mono" variant="contained">
          Mono
        </Button>
        <Button color="danger" variant="contained">
          Danger
        </Button>
        <Button color="primary" variant="contained">
          Primary
        </Button>
        <Button color="success" variant="contained">
          Success
        </Button>
        <Button color="blue" variant="contained">
          Blue
        </Button>
      </Hstack>

      <Hstack gap="xxl" className="p-12">
        <Button color="mono" variant="outlined">
          Mono
        </Button>
        <Button color="danger" variant="outlined">
          Danger
        </Button>
        <Button color="primary" variant="outlined">
          Primary
        </Button>
        <Button color="success" variant="outlined">
          Success
        </Button>
        <Button color="blue" variant="outlined">
          Blue
        </Button>
      </Hstack>
    </Vstack>
  )
}

export default ThePottButtonPage
