import Button from '@/components/commonInGeneral/button/Button'
import { Vstack } from '@/components/commonInGeneral/layout'
import Modal from '@/components/commonInGeneral/modal/Modal'
import { Send } from 'lucide-react'
import { useState } from 'react'

const ApplicationModalPage = () => {
  const [isOn, setIsOn] = useState(false)

  const [self_introduction, setSelf_introduction] = useState('')
  const [motivation, setMotivation] = useState('')
  const [objective, setObjective] = useState('')
  const [available_time, setAvailable_time] = useState('')
  const [has_study_experience, setHas_study_experience] = useState(false)
  const [study_experience, setStudy_experience] = useState('')

  const expDisabled = !has_study_experience

  return (
    <>
      <Modal
        isOn={isOn}
        onClose={() => setIsOn(false)}
        className="overflow-y-auto"
      >
        <Modal.Header>
          <div className="space-y-1">
            <div className="text-lg font-semibold">스터디 지원서 작성</div>
            <div className="text-sm text-gray-500">
              나중에 상세페이지에서 타이틀 값받아와야해요!
            </div>
          </div>
        </Modal.Header>
        <form>
          <Modal.Body>
            <div className="space-y-6">
              <section className="space-y-1">
                <label className="flex items-center gap-1 text-sm font-medium">
                  자기소개 <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={self_introduction}
                  onChange={(e) => setSelf_introduction(e.target.value)}
                  maxLength={500}
                  placeholder="본인에 대해 간략하게 소개해주세요. (학습 배경, 관심 분야, 현재 수준 등)"
                  className="m-0 h-25 w-full resize-none rounded-md border border-gray-300 p-2 text-xs outline-none focus:ring-2"
                />
                <div className="text-left text-xs text-gray-500">
                  {self_introduction.length}/500
                </div>
              </section>

              <section className="space-y-1">
                <label className="flex items-center gap-1 text-sm font-medium">
                  지원 동기 <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={motivation}
                  onChange={(e) => setMotivation(e.target.value)}
                  maxLength={500}
                  placeholder="이 스터디에 지원하게 된 동기를 작성해주세요."
                  className="m-0 h-25 w-full resize-none rounded-md border border-gray-300 p-3 text-xs outline-none focus:ring-2"
                />
                <div className="text-left text-xs text-gray-500">
                  {motivation.length}/500
                </div>
              </section>

              <section className="space-y-1">
                <label className="flex items-center gap-1 text-sm font-medium">
                  스터디 목표 <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                  maxLength={500}
                  placeholder="이 스터디를 통해 달성하고 싶은 목표를 작성해주세요."
                  className="m-0 h-25 w-full resize-none rounded-md border border-gray-300 p-3 text-xs outline-none focus:ring-2"
                />
                <div className="text-left text-xs text-gray-500">
                  {objective.length}/500
                </div>
              </section>

              <section className="space-y-1">
                <label className="flex items-center gap-1 text-sm font-medium">
                  가능한 시간대 <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={available_time}
                  onChange={(e) => setAvailable_time(e.target.value)}
                  maxLength={500}
                  placeholder="스터디 참여가 가능한 요일과 시간대를 작성해주세요. (예 : 평일 저녁 7-9시, 주말오후)"
                  className="m-0 h-20 w-full resize-none rounded-md border border-gray-300 p-3 text-xs outline-none focus:ring-2"
                />
                <div className="text-left text-xs text-gray-500">
                  {available_time.length}/500
                </div>
              </section>

              <section className="space-y-1">
                <label className="flex items-center gap-1 text-sm font-medium">
                  스터디 경험 유무
                </label>
                <label className="flex items-center gap-2 p-0.5 text-sm font-medium">
                  <input
                    type="checkbox"
                    checked={has_study_experience}
                    onChange={(e) => setHas_study_experience(e.target.checked)}
                  />{' '}
                  스터디 참여 경험이 있습니다.
                </label>
              </section>

              <section className="space-y-1">
                <label className="flex items-center gap-1 text-sm font-medium">
                  구체적인 스터디 경험
                </label>
                <textarea
                  value={study_experience}
                  onChange={(e) => setStudy_experience(e.target.value)}
                  maxLength={500}
                  disabled={expDisabled}
                  placeholder="스터디 경험이 없으시면 비워두셔도 됩니다."
                  className={[
                    'm-0 h-25 w-full resize-none rounded-md border border-gray-300 p-3 text-xs text-gray-500 outline-none focus:ring-2',
                    expDisabled ? 'bg-gray-100' : 'bg-white',
                  ].join('')}
                />
                <div className="text-left text-xs text-gray-500">
                  {study_experience.length}/500
                </div>
              </section>
            </div>
          </Modal.Body>
        </form>
        <Modal.Footer>
          <div className="flex w-full items-center justify-between">
            <div className="text-xs text-gray-500">
              * 표시된 항목은 필수 입력 사항입니다.
            </div>
            <div className="flex gap-2">
              <Button
                color="mono"
                variant="outlined"
                status="enabled"
                size="md"
                className="text-black"
                onClick={() => setIsOn(false)}
              >
                취소
              </Button>
              <Button
                color="primary"
                variant="contained"
                status="enabled"
                size="md"
                type="submit"
              >
                <Send className="h-4 w-4" />
                지원서 제출
              </Button>
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
