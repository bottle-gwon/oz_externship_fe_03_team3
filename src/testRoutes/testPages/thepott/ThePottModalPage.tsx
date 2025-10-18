import Button from '@/components/commonInGeneral/button/Button'
import { Vstack } from '@/components/commonInGeneral/layout'
import Text from '@/components/commonInGeneral/text/Text'
import Modal from '@/components/commonInProject/modal/Modal'
import { useState } from 'react'

const ThePottModalPage = () => {
  const [isOn, setIsOn] = useState(false)
  return (
    <>
      <Modal isOn={isOn} onBackgroundClick={() => setIsOn(false)}>
        이게 보여짐
      </Modal>
      <Vstack padding="xxl">
        <Button>누르면 모달 켜짐</Button>
        <Text>가나다라</Text>
        <Text>가나다라</Text>
        <Text>가나다라</Text>
        <Text>가나다라</Text>
        <Text>가나다라</Text>
        <Text>가나다라</Text>
      </Vstack>
    </>
  )
}

export default ThePottModalPage
