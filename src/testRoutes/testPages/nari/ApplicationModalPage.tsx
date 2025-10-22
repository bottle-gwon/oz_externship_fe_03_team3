import Button from '@/components/commonInGeneral/button/Button'
import Labeled from '@/components/commonInGeneral/inputFamily/labeled/Labeled'
import Textarea from '@/components/commonInGeneral/inputFamily/textarea/Textarea'
import { Vstack } from '@/components/commonInGeneral/layout'
import Modal from '@/components/commonInGeneral/modal/Modal'
import { Send } from 'lucide-react'
import { useState } from 'react'

const ApplicationModalPage = () => {
  const [isOn, setIsOn] = useState(false)

  const [selfIntroduction, setSelfIntroduction] = useState('')
  const [motivation, setMotivation] = useState('')
  const [objective, setObjective] = useState('')
  const [availableTime, setAvailableTime] = useState('')
  const [hasStudyExperience, setHasStudyExperience] = useState(false)
  const [studyExperience, setStudyExperience] = useState('')
  const [errors, setErrors] = useState({
    selfIntroduction: false,
    motivation: false,
    objective: false,
    availableTime: false,
    studyExperience: false,
  })

  const expDisabled = !hasStudyExperience

  const basePlaceholder = {
    selfIntroduction:
      '본인에 대해 간략하게 소개해주세요. (학습 배경, 관심 분야, 현재 수준 등)',
    motivation: '이 스터디에 지원하게 된 동기를 작성해주세요.',
    objective: '이 스터디를 통해 달성하고 싶은 목표를 작성해주세요.',
    availableTime:
      '스터디 참여가 가능한 요일과 시간대를 작성해주세요. (예: 평일 19-21시, 주말 오후)',
    studyExperience: '스터디 경험이 없으시면 비워두셔도 됩니다.',
  } as const

  const dangerPlaceholder = {
    selfIntroduction: '필수 입력: 자기소개를 작성해주세요.',
    motivation: '필수 입력: 지원 동기를 작성해주세요.',
    objective: '필수 입력: 스터디 목표를 작성해주세요.',
    availableTime: '필수 입력: 가능한 시간대를 작성해주세요.',
    studyExperience: '경험을 체크했다면 간단히 작성해주세요.',
  } as const

  const TextHelper = (k: keyof typeof basePlaceholder) =>
    errors[k] ? dangerPlaceholder[k] : basePlaceholder[k]

  const markError = (next: Partial<typeof errors>) =>
    setErrors((prev) => ({ ...prev, ...next }))

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const nextErrors = {
      selfIntroduction: selfIntroduction.trim().length === 0,
      motivation: motivation.trim().length === 0,
      objective: objective.trim().length === 0,
      availableTime: availableTime.trim().length === 0,
      studyExperience:
        hasStudyExperience && studyExperience.trim().length === 0,
    }

    setErrors(nextErrors)

    const hasAnyError = Object.values(nextErrors).some(Boolean)
    if (hasAnyError) return

    setIsOn(false)
  }
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
                <Labeled isRequired>
                  <Labeled.Header>자기소개</Labeled.Header>
                </Labeled>
                <Textarea
                  value={selfIntroduction}
                  onChange={(e) => setSelfIntroduction(e.target.value)}
                  maxLength={500}
                  placeholder="본인에 대해 간략하게 소개해주세요. (학습 배경, 관심 분야, 현재 수준 등)"
                  isInDanger
                  className="w-full"
                />
                <div className="text-left text-xs text-gray-500">
                  {selfIntroduction.length}/500
                </div>
              </section>

              <section className="space-y-1">
                <Labeled isRequired>
                  <Labeled.Header>지원 동기</Labeled.Header>
                </Labeled>
                <Textarea
                  value={motivation}
                  onChange={(e) => setMotivation(e.target.value)}
                  maxLength={500}
                  placeholder="이 스터디에 지원하게 된 동기를 작성해주세요."
                  isInDanger
                  className="w-full"
                />
                <div className="text-left text-xs text-gray-500">
                  {motivation.length}/500
                </div>
              </section>

              <section className="space-y-1">
                <Labeled isRequired>
                  <Labeled.Header>스터디 목표</Labeled.Header>
                </Labeled>
                <Textarea
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                  maxLength={500}
                  placeholder="이 스터디를 통해 달성하고 싶은 목표를 작성해주세요."
                  isInDanger
                  className="w-full"
                />
                <div className="text-left text-xs text-gray-500">
                  {objective.length}/500
                </div>
              </section>

              <section className="space-y-1">
                <Labeled isRequired>
                  <Labeled.Header>가능한 시간대</Labeled.Header>
                </Labeled>
                <Textarea
                  isShort
                  value={availableTime}
                  onChange={(e) => setAvailableTime(e.target.value)}
                  maxLength={500}
                  placeholder="스터디 참여가 가능한 요일과 시간대를 작성해주세요. (예 : 평일 저녁 7-9시, 주말오후)"
                  isInDanger
                  className="w-full"
                />
                <div className="text-left text-xs text-gray-500">
                  {availableTime.length}/500
                </div>
              </section>

              <section className="space-y-1">
                <Labeled>
                  <Labeled.Header>스터디 경험 유무</Labeled.Header>
                </Labeled>
                <label className="flex items-center gap-2 p-0.5 text-sm font-medium">
                  <input
                    type="checkbox"
                    checked={hasStudyExperience}
                    onChange={(e) => setHasStudyExperience(e.target.checked)}
                  />{' '}
                  스터디 참여 경험이 있습니다.
                </label>
              </section>

              <section className="space-y-1">
                <Labeled>
                  <Labeled.Header>구체적인 스터디 경험</Labeled.Header>
                </Labeled>
                <Textarea
                  value={studyExperience}
                  onChange={(e) => setStudyExperience(e.target.value)}
                  maxLength={500}
                  disabled={expDisabled}
                  placeholder="스터디 경험이 없으시면 비워두셔도 됩니다."
                  isInDanger
                  className={[
                    'w-full',
                    expDisabled ? 'bg-gray-100' : 'bg-white',
                  ].join(' ')}
                />
                <div className="text-left text-xs text-gray-500">
                  {studyExperience.length}/500
                </div>
              </section>
            </div>
          </Modal.Body>
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
        </form>
      </Modal>

      <Vstack padding="xxl">
        <Button onClick={() => setIsOn(true)}>누르면 모달 켜짐</Button>
      </Vstack>
    </>
  )
}

export default ApplicationModalPage
