import Button from '@/components/commonInGeneral/button/Button'
import Labeled from '@/components/commonInGeneral/inputFamily/labeled/Labeled'
import Textarea from '@/components/commonInGeneral/inputFamily/textarea/Textarea'
import { Vstack } from '@/components/commonInGeneral/layout'
import Modal from '@/components/commonInGeneral/modal/Modal'
import { Send } from 'lucide-react'
import { useState } from 'react'
import ApplicationPoopUp from '../../components/ApplicationPoopUp'
import {
  applicationSchema,
  dangerHelperText,
  defaultApplicationValues,
  helperText,
  type ApplicationForm,
} from '@/lib/zodSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type SubmitHandler } from 'react-hook-form'

const ApplicationModalPage = () => {
  const [isOn, setIsOn] = useState(false)
  const [confirmOn, setConfirmOn] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    watch,
    reset,
  } = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
    defaultValues: defaultApplicationValues,
    mode: 'onSubmit',
  })

  const hasStudyExperience = watch('hasStudyExperience')
  const expDisabled = !hasStudyExperience

  type textFieldKey = Exclude<keyof ApplicationForm, 'hasStudyExperience'>
  const applicationText = (k: textFieldKey) =>
    errors[k] ? dangerHelperText[k] : helperText[k]

  const onSubmit: SubmitHandler<ApplicationForm> = () => setConfirmOn(true)
  // 추후 상세페이지 제작 후 api 연결

  const closeAllAndReset = () => {
    reset(defaultApplicationValues)
    setConfirmOn(false)
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
              {/* 추후 상세페이지 제작 되면 재진행 */}
            </div>
          </div>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <div className="space-y-6">
              <section className="space-y-1">
                <Labeled isRequired>
                  <Labeled.Header>자기소개</Labeled.Header>
                </Labeled>
                <Textarea
                  {...register('selfIntroduction')}
                  disabled={isSubmitting}
                  maxLength={500}
                  placeholder={applicationText('selfIntroduction')}
                  isInDanger={!!errors.selfIntroduction}
                  className="w-full"
                />
                <div className="text-left text-xs text-gray-500">
                  {(watch('selfIntroduction') ?? '').length}/500
                </div>
              </section>

              <section className="space-y-1">
                <Labeled isRequired>
                  <Labeled.Header>지원 동기</Labeled.Header>
                </Labeled>
                <Textarea
                  {...register('motivation')}
                  disabled={isSubmitting}
                  maxLength={500}
                  placeholder={applicationText('motivation')}
                  isInDanger={!!errors.motivation}
                  className="w-full"
                />
                <div className="text-left text-xs text-gray-500">
                  {(watch('motivation') ?? '').length}/500
                </div>
              </section>

              <section className="space-y-1">
                <Labeled isRequired>
                  <Labeled.Header>스터디 목표</Labeled.Header>
                </Labeled>
                <Textarea
                  {...register('objective')}
                  disabled={isSubmitting}
                  maxLength={500}
                  placeholder={applicationText('objective')}
                  isInDanger={!!errors.objective}
                  className="w-full"
                />
                <div className="text-left text-xs text-gray-500">
                  {(watch('objective') ?? '').length}/500
                </div>
              </section>

              <section className="space-y-1">
                <Labeled isRequired>
                  <Labeled.Header>가능한 시간대</Labeled.Header>
                </Labeled>
                <Textarea
                  isShort
                  {...register('availableTime')}
                  disabled={isSubmitting}
                  maxLength={500}
                  placeholder={applicationText('availableTime')}
                  isInDanger={!!errors.availableTime}
                  className="w-full"
                />
                <div className="text-left text-xs text-gray-500">
                  {(watch('availableTime') ?? '').length}/500
                </div>
              </section>

              <section className="space-y-1">
                <Labeled>
                  <Labeled.Header>스터디 경험 유무</Labeled.Header>
                </Labeled>
                <label className="flex items-center gap-2 p-0.5 text-sm font-medium">
                  <input
                    type="checkbox"
                    disabled={isSubmitting}
                    {...register('hasStudyExperience')}
                  />{' '}
                  스터디 참여 경험이 있습니다.
                </label>
              </section>

              <section className="space-y-1">
                <Labeled>
                  <Labeled.Header>구체적인 스터디 경험</Labeled.Header>
                </Labeled>
                <Textarea
                  {...register('studyExperience')}
                  maxLength={500}
                  disabled={expDisabled || isSubmitting}
                  placeholder={applicationText('studyExperience')}
                  isInDanger={!expDisabled && !!errors.studyExperience}
                  className={[
                    'w-full',
                    expDisabled ? 'bg-gray-100' : 'bg-white',
                  ].join(' ')}
                />
                <div className="text-left text-xs text-gray-500">
                  {(watch('studyExperience') ?? '').length}/500
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
                  type="button"
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
      <ApplicationPoopUp open={confirmOn} onClose={closeAllAndReset} />
    </>
  )
}

export default ApplicationModalPage
