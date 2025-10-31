import Button from '@/components/commonInGeneral/button/Button'
import Labeled from '@/components/commonInGeneral/inputFamily/labeled/Labeled'
import Textarea from '@/components/commonInGeneral/inputFamily/textarea/Textarea'
import { Vstack } from '@/components/commonInGeneral/layout'
import Modal from '@/components/commonInGeneral/modal/Modal'
import { Send } from 'lucide-react'
import { useState } from 'react'
import {
  applicationSchema,
  dangerHelperText,
  defaultApplicationValues,
  helperText,
  type ApplicationForm,
} from '@/lib/zodSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type SubmitHandler } from 'react-hook-form'
import ConfirmationModal from '@/components/commonInGeneral/modal/confirmationModal/ConfirmationModal'
import useStudyHubStore from '@/store/store'

const ApplicationModalPage = () => {
  const [confirmOn, setConfirmOn] = useState(false)
  const [failOn, setFailOn] = useState(false)
  // NOTE: 외부에서 이 모달을 띄우기 위해 전역 모달 상태를 사용했습니다
  const modalKey = useStudyHubStore((state) => state.modalKey)
  const setModalKey = useStudyHubStore((state) => state.setModalKey)

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

  const hasStudyExperience = watch('has_study_experience')
  const expDisabled = !hasStudyExperience

  type textFieldKey = Exclude<keyof ApplicationForm, 'has_study_experience'>
  const applicationText = (k: textFieldKey) =>
    errors[k] ? dangerHelperText[k] : helperText[k]

  const onSubmit: SubmitHandler<ApplicationForm> = (_data) => {
    try {
      //api연결 시 테스트로그 제거 및 setConfirmOn(true)주석 비활성화
      // setConfirmOn(true)
      //테스트 로그
      // console.log({ _data })
      // debugger
      throw new Error('forced-fail')
    } catch (error) {
      //api 연결 시 void error 제거
      void error
      setFailOn(true)
    }
  }
  // 추후 상세페이지 제작 후 api 연결

  const closeAllAndReset = () => {
    reset(defaultApplicationValues)
    setConfirmOn(false)
    setIsOn(false)
    setFailOn(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal isOn={modalKey === 'apply'} onClose={() => setModalKey(null)}>
          <Modal.Header>
            <div className="space-y-1">
              <div className="text-lg font-semibold">스터디 지원서 작성</div>
              <div className="text-sm text-gray-500">
                나중에 상세페이지에서 타이틀 값받아와야해요!
                {/* 추후 상세페이지 제작 되면 재진행 */}
              </div>
            </div>
          </Modal.Header>
          <Modal.Body className="overflow-x-hidden overflow-y-scroll">
            <div className="space-y-6">
              <section className="space-y-1">
                <Labeled isRequired>
                  <Labeled.Header>자기소개</Labeled.Header>
                </Labeled>
                <Textarea
                  {...register('self_introduction')}
                  disabled={isSubmitting}
                  maxLength={500}
                  placeholder={applicationText('self_introduction')}
                  isInDanger={!!errors.self_introduction}
                  className="w-full"
                />
                <div className="text-left text-xs text-gray-500">
                  {(watch('self_introduction') ?? '').length}/500
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
                  {...register('available_time')}
                  disabled={isSubmitting}
                  maxLength={500}
                  placeholder={applicationText('available_time')}
                  isInDanger={!!errors.available_time}
                  className="w-full"
                />
                <div className="text-left text-xs text-gray-500">
                  {(watch('available_time') ?? '').length}/500
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
                    {...register('has_study_experience')}
                  />{' '}
                  스터디 참여 경험이 있습니다.
                </label>
              </section>

              <section className="space-y-1">
                <Labeled>
                  <Labeled.Header>구체적인 스터디 경험</Labeled.Header>
                </Labeled>
                <Textarea
                  {...register('study_experience')}
                  maxLength={500}
                  disabled={expDisabled || isSubmitting}
                  placeholder={applicationText('study_experience')}
                  isInDanger={!expDisabled && !!errors.study_experience}
                  className={[
                    'w-full',
                    expDisabled ? 'bg-gray-100' : 'bg-white',
                  ].join(' ')}
                />
                <div className="text-left text-xs text-gray-500">
                  {(watch('study_experience') ?? '').length}/500
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
                  onClick={closeAllAndReset}
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
      </form>

      <Vstack padding="xxl">
        <Button onClick={() => setIsOn(true)}>누르면 모달 켜짐</Button>
      </Vstack>

      <ConfirmationModal isOn={confirmOn} onClose={closeAllAndReset}>
        <ConfirmationModal.Title>
          {`'스터디 제목' 의 제출이 완료되었습니다.`}
        </ConfirmationModal.Title>
        <ConfirmationModal.Content>
          {`지원한 리스트는 '마이페이지>지원내역'에서 확인할 수 있습니다.`}
        </ConfirmationModal.Content>
        <ConfirmationModal.ButtonSection>
          <Button onClick={closeAllAndReset}>확인</Button>
        </ConfirmationModal.ButtonSection>
      </ConfirmationModal>

      <ConfirmationModal isOn={failOn} onClose={() => setFailOn(false)}>
        <ConfirmationModal.Title>
          {`'스터디 제목' 의 제출에 실패하였습니다.`}
        </ConfirmationModal.Title>
        <ConfirmationModal.Content>
          {`잠시 후 다시 시도해주세요.`}
          <br />
          {`문제가 지속되면 관리자에게 문의하세요.`}
        </ConfirmationModal.Content>
        <ConfirmationModal.ButtonSection>
          <Button onClick={() => setFailOn(false)}>확인</Button>
        </ConfirmationModal.ButtonSection>
      </ConfirmationModal>
    </>
  )
}

export default ApplicationModalPage
