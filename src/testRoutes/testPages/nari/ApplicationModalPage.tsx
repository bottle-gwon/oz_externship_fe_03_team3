import Button from '@/components/commonInGeneral/button/Button'
import { Vstack } from '@/components/commonInGeneral/layout'
import Modal from '@/components/commonInGeneral/modal/Modal'
import { Send } from 'lucide-react'
import { useState } from 'react'

const ApplicationModalPage = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <>
      <Modal isOn={isOn} onClose={() => setIsOn(false)}>
        <Modal.Header>
          <div>
            <div>스터디 지원서 작성</div>
            <div>지원서 타이틀</div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <div>자기소개</div>
              <div>입력 인풋</div>
              <div>글자수</div>
            </div>
            <div>
              <div>지원 동기</div>
              <div>입력 인풋</div>
              <div>글자수</div>
            </div>
            <div>
              <div>스터디 목표</div>
              <div>입력 인풋</div>
              <div>글자수</div>
            </div>
            <div>
              <div>가능한 시간대</div>
              <div>입력 인풋</div>
              <div>글자수</div>
            </div>
            <div>
              <div>스터디 경험 유무</div>
              <div>체크박스</div>
              <div>스터디 참여 경험이 있습니다</div>
            </div>
            <div>
              <div>구체적인 스터디 경험</div>
              <div>입력 인풋</div>
              <div>글자수</div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <div>* 표시된 항목은 필수 입력 사항입니다.</div>
            <button>취소</button>
            <button>
              <Send />
              지원서 제출
            </button>
          </div>
        </Modal.Footer>
      </Modal>
      <Vstack padding="xxl">
        <Button onClick={() => setIsOn(true)}>누르면 모달 켜짐</Button>
      </Vstack>
    </>
  )
}

export default ApplicationModalPage
