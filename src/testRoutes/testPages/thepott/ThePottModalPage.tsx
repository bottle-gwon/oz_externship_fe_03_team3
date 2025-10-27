import Button from '@/components/commonInGeneral/button/Button'
import { Vstack } from '@/components/commonInGeneral/layout'
import Modal from '@/components/commonInGeneral/modal/Modal'
import Text from '@/components/commonInGeneral/text/Text'
import { useState } from 'react'

const ThePottModalPage = () => {
  const [isOn, setIsOn] = useState(false)
  const longIndexArray = [...Object.keys(Array(50).fill(0))]

  return (
    <>
      <Modal isOn={isOn} onClose={() => setIsOn(false)}>
        <Modal.Header>이게 헤더</Modal.Header>
        <Modal.Body className="overflow-x-hidden overflow-y-scroll">
          {longIndexArray.map((index) => (
            <Text key={index}>가나다라</Text>
          ))}
        </Modal.Body>
        <Modal.Footer>이게 푸터</Modal.Footer>
      </Modal>
      <Vstack padding="xxl">
        <Button onClick={() => setIsOn(true)}>누르면 모달 켜짐</Button>
        {longIndexArray.map((index) => (
          <Text key={index}>가나다라</Text>
        ))}
        <Button onClick={() => setIsOn(true)}>누르면 모달 켜짐</Button>
      </Vstack>
    </>
  )
}

export default ThePottModalPage
