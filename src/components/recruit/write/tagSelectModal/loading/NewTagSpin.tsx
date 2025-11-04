import FullScreen from '@/components/commonInGeneral/layout/_FullScreen'
import BgSpinner from './BgSpinner'
import { Vstack } from '@/components/commonInGeneral/layout'

const NewTagSpin = () => {
  return (
    <FullScreen className="fixed top-0 right-0 z-3 bg-black opacity-50">
      <Vstack className="h-dvh w-dvw items-center justify-center">
        <BgSpinner />
      </Vstack>
    </FullScreen>
  )
}

export default NewTagSpin
