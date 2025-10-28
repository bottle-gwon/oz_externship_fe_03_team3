import Button from '@/components/commonInGeneral/button/Button'
import { Vstack } from '@/components/commonInGeneral/layout'
import ConfirmationModal from '@/components/commonInGeneral/modal/confirmationModal/ConfirmationModal'
import Modal from '@/components/commonInGeneral/modal/Modal'
import Text from '@/components/commonInGeneral/text/Text'
import { useState } from 'react'

const ThePottModalPage = () => {
  const [isOn, setIsOn] = useState(false)
  const [isOn1, setIsOn1] = useState(false)
  const [isOn2, setIsOn2] = useState(false)
  const [isOn3, setIsOn3] = useState(false)
  const [isOn4, setIsOn4] = useState(false)
  const [isOn5, setIsOn5] = useState(false)
  const [isOn6, setIsOn6] = useState(false)
  const [isOn7, setIsOn7] = useState(false)
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

      <ConfirmationModal isOn={isOn1} onClose={() => setIsOn1(false)}>
        <ConfirmationModal.Title>완전 중요한 거</ConfirmationModal.Title>
        <ConfirmationModal.Content>
          으하하하 으하항 으하 으하하하 항 으하하 으하하하 으 으하하 으하하하
          으하하항 으하하하 으하하하 으하하항 으하 으하하하 으 하하
        </ConfirmationModal.Content>
        <ConfirmationModal.ButtonSection>
          <Button onClick={() => setIsOn1(false)}>확인</Button>
        </ConfirmationModal.ButtonSection>
      </ConfirmationModal>

      <ConfirmationModal isOn={isOn2} onClose={() => setIsOn2(false)}>
        <ConfirmationModal.Title>완전 중요한 거</ConfirmationModal.Title>
        <ConfirmationModal.Content>
          으하하하 으하하항 으하하하
        </ConfirmationModal.Content>
        <ConfirmationModal.ButtonSection>
          <Button onClick={() => setIsOn2(false)}>확인</Button>
          <Button onClick={() => setIsOn2(false)} color="danger">
            삭제
          </Button>
        </ConfirmationModal.ButtonSection>
      </ConfirmationModal>

      <Vstack padding="xxl">
        <Button onClick={() => setIsOn(true)}>누르면 모달 켜짐</Button>
        <Button onClick={() => setIsOn1(true)}>확인 모달</Button>
        <Button onClick={() => setIsOn2(true)}>경고 모달</Button>
        {longIndexArray.map((index) => (
          <Text key={index}>가나다라</Text>
        ))}
        <Button onClick={() => setIsOn(true)}>누르면 모달 켜짐</Button>
      </Vstack>
    </>
  )
}

export default ThePottModalPage
