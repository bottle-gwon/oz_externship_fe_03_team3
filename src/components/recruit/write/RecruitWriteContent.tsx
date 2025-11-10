import Button from '@/components/commonInGeneral/button/Button'
import {
  GridContainer,
  Hstack,
  Vstack,
} from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import { Send } from 'lucide-react'
import { useEffect, useState } from 'react'
import Divider from '@/components/commonInGeneral/divider/Divider'
import { type FieldValues } from 'react-hook-form'
import { useNavigate } from 'react-router'
import RWStudyGroupSelect from './_RWStudyGroupSelect'
import RWTagSelect from './rwTagSelect/RWTagSelect'
import TagSelectModal from '@/components/recruit/write/tagSelectModal/TagSelectModal'
import useStudyHubStore from '@/store/store'
import TitledRoundBox from '@/components/commonInProject/TitledRoundBox/TitledRoundBox'
import RWFileDropzone from './_RWFileDropzone'
import ConfirmationModal from '@/components/commonInGeneral/modal/confirmationModal/ConfirmationModal'
import RWTitleInput from './_RWTitleInput'
import RWEstimatedCostInput from './_RWEstimatedCost'
import RWDueDateInput from './_RWDueDateInput'
import RWExpectedPersonnelSelect from './_RWExpectedPersonnelSelect'
import useRecruitWrite from './_useRecruitWrite'
import RWSubHeader from './_RWSubHeader'
import RWMarkdownEditor from './_RWMarkdownEditor'
import useRecruitWriteMutation from '@/hooks/recruitWrite/useRecruitWriteMutation'

interface RecruitWriteContetProps {
  isEditing?: boolean
}

const RecruitWriteContent = ({
  isEditing = false,
}: RecruitWriteContetProps) => {
  // TODO: 마운트 시 스터디 목록 api 호출해야 함
  // TODO: 나중에 이미지 업로드와 연동해야
  const [isOn, setIsOn] = useState(false)
  const modalKey = useStudyHubStore((state) => state.modalKey)
  const setModalKey = useStudyHubStore((state) => state.setModalKey)
  const setEditingRecruit = useStudyHubStore((state) => state.setEditingRecruit)
  const editingRecruit = useStudyHubStore((state) => state.editingRecruit)

  const navigate = useNavigate()
  const { postRecruitWriteMutation, patchRecruitWriteMutation } =
    useRecruitWriteMutation()

  useEffect(() => {
    return () => setEditingRecruit(null)
  }, [setEditingRecruit])

  const { handleSubmit, register, setValue, control, errors } =
    useRecruitWrite(isEditing)

  const onSubmit = (data: FieldValues) => {
    setIsOn(true)

    const formData = new FormData()
    const { attachments, ...rest } = data
    const restEntryArray = Object.entries(rest)
    restEntryArray.forEach((entry) => formData.append(...entry))
    attachments.forEach((file: File) => formData.append('attachments', file))

    if (isEditing) {
      if (!editingRecruit) {
        throw new Error('---- 수정 중인 공고를 못 찾았어요')
      }
      patchRecruitWriteMutation.mutate({
        body: formData,
        id: editingRecruit.id,
      })
    } else {
      postRecruitWriteMutation.mutate(formData)
    }
  }

  const handleSubmitComplete = () => {
    setIsOn(false)
    navigate(-1)
  }

  return (
    <>
      <Container width="md" isPadded>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Vstack gap="xxl">
            {/* 여기 바텀 패딩이 없어야할 거 같은데 */}
            {/* isPaddedBottom 옵션 넣어달라고 하고 우선 이대로 진행하자 */}
            <RWSubHeader isEditing={isEditing} />

            <TitledRoundBox>
              <TitledRoundBox.Title>기본 정보</TitledRoundBox.Title>

              <RWTitleInput errors={errors} register={register} />
              <RWStudyGroupSelect errors={errors} control={control} />

              <GridContainer>
                <RWDueDateInput errors={errors} register={register} />
                <RWExpectedPersonnelSelect errors={errors} control={control} />
              </GridContainer>
            </TitledRoundBox>

            <TitledRoundBox>
              <TitledRoundBox.Title>공고 내용</TitledRoundBox.Title>

              <RWMarkdownEditor errors={errors} control={control} />
            </TitledRoundBox>

            <TitledRoundBox>
              <TitledRoundBox.Title>추가 정보</TitledRoundBox.Title>

              <RWEstimatedCostInput errors={errors} register={register} />
              <RWTagSelect setValue={setValue} errors={errors} />
              <RWFileDropzone errors={errors} control={control} />
            </TitledRoundBox>

            <Vstack gap="xl">
              <Divider />
              <Hstack className="justify-end">
                <Button type="button" onClick={() => navigate(-1)}>
                  취소
                </Button>
                <Button color="primary">
                  <Send size={16} />
                  공고 등록하기
                </Button>
              </Hstack>
            </Vstack>
          </Vstack>
        </form>
      </Container>

      <TagSelectModal
        isOn={modalKey === 'tagSelect'}
        onClose={() => setModalKey(null)}
      />

      <ConfirmationModal isOn={isOn} onClose={handleSubmitComplete}>
        <ConfirmationModal.Title>제출이 완료되었습니다</ConfirmationModal.Title>
        <ConfirmationModal.ButtonSection>
          <Button onClick={handleSubmitComplete}>확인</Button>
        </ConfirmationModal.ButtonSection>
      </ConfirmationModal>
    </>
  )
}

export default RecruitWriteContent
