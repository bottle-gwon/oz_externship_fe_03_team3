import { useState } from 'react'
import Modal from './Modal'
import { Vstack } from '../layout'
import Text from '../text/Text'
import Button from '../button/Button'

const HowToUseSingleModal = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <>
      <Modal isOn={isOn} onClose={() => setIsOn(false)}>
        <Modal.Header>
          <Text>헤더에는 X 버튼이 있어요</Text>
          <Text>그리고 border-bottom이 있어요</Text>
        </Modal.Header>
        <Modal.Body>
          <Text>바디에는 border-bottom이 있어요</Text>
        </Modal.Body>
        <Modal.Footer>
          <Text>푸터에는 아무 것도 없어요. 가장 기본이에요</Text>
        </Modal.Footer>
      </Modal>

      <Vstack>
        <Button onClick={() => setIsOn(true)}>
          누르면 모달이 간단히 켜집니다
        </Button>
        <Text>페이지 콘텐츠가 여기 있다고 생각해주세요</Text>
      </Vstack>
    </>
  )
}

const HowToUseMultipleModal = () => {
  const [isBottomOn, setIsBottomOn] = useState(false)
  const [isTopOn, setIsTopOn] = useState(false)

  return (
    <>
      <Modal
        isOn={isBottomOn}
        modalZIndex={0}
        onClose={() => setIsBottomOn(false)}
      >
        <Modal.Header>아래 모달 헤더</Modal.Header>
        <Modal.Body>아래 모달 바디</Modal.Body>
        <Modal.Footer>아래 모달 푸터</Modal.Footer>
      </Modal>

      <Modal
        isOn={isTopOn}
        modalZIndex={1}
        onClose={() => setIsBottomOn(false)}
      >
        <Modal.Header>위 모달 헤더</Modal.Header>
        <Modal.Body>위 모달 바디</Modal.Body>
        <Modal.Footer>위 모달 푸터</Modal.Footer>
      </Modal>

      <Vstack>
        <Button onClick={() => setIsBottomOn(true)}>아래 모달 켜기</Button>
        <Button onClick={() => setIsTopOn(true)}>위 모달 켜기</Button>
        <Text>페이지 콘텐츠가 여기 있다고 생각해주세요</Text>
      </Vstack>
    </>
  )
}

const HowToUseModal = () => {
  return (
    <>
      <HowToUseSingleModal />
      <HowToUseMultipleModal />
    </>
  )
}

export default HowToUseModal
