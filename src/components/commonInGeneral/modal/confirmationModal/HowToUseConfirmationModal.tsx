import { useState } from 'react'
import ConfirmationModal from './ConfirmationModal'
import Button from '../../button/Button'

const HowToUseConfirmationModal = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <>
      <ConfirmationModal isOn={isOn} onClose={() => setIsOn(false)}>
        <ConfirmationModal.Title>
          제목은 div라서 컴포넌트 넣어도 됩니다
        </ConfirmationModal.Title>
        <ConfirmationModal.Content>
          콘텐트는 div이므로 이 안에 컴포넌트를 넣어도 됩니다 여러 버튼을
          사용하고 싶을 땐 버튼 섹션에 버튼을 여럿 넣으면 됩니다
        </ConfirmationModal.Content>
        <ConfirmationModal.ButtonSection>
          <Button onClick={() => setIsOn(false)}>확인</Button>
          <Button onClick={() => setIsOn(false)} color="danger">
            삭제
          </Button>
        </ConfirmationModal.ButtonSection>
      </ConfirmationModal>

      <p>기본적으로 보이는 것</p>
    </>
  )
}

export default HowToUseConfirmationModal
