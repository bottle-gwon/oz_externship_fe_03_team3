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
            <section>
              <label htmlFor="">자기소개</label>
              <textarea className="resize-none" />
              <div>글자수</div>
            </section>
            <section>
              <label htmlFor="">지원 동기</label>
              <textarea className="resize-none" />
              <div>글자수</div>
            </section>
            <section>
              <label htmlFor="">스터디 목표</label>
              <textarea className="resize-none" />
              <div>글자수</div>
            </section>
            <section>
              <label htmlFor="">가능한 시간대</label>
              <textarea className="resize-none" />
              <div>글자수</div>
            </section>
            <section>
              <label htmlFor="">스터디 경험 유무</label>
              <label htmlFor="">
                <input type="checkbox" /> 스터디 참여 경험이 있습니다.
              </label>
              <div>글자수</div>
            </section>
            <section>
              <label htmlFor="">구체적인 스터디 경험</label>
              <textarea className="resize-none" />
              <div>글자수</div>
            </section>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <div>* 표시된 항목은 필수 입력 사항입니다.</div>
            <div>
              <button>취소</button>
              <button>
                <Send />
                지원서 제출
              </button>
            </div>
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
