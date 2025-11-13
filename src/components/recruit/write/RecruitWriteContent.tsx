import Button from '@/components/commonInGeneral/button/Button'
import {
  GridContainer,
  Hstack,
  Vstack,
} from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import { Send } from 'lucide-react'
import { useEffect } from 'react'
import Divider from '@/components/commonInGeneral/divider/Divider'
import { type FieldValues } from 'react-hook-form'
import { useNavigate } from 'react-router'
import RWStudyGroupSelect from './_RWStudyGroupSelect'
import RWTagSelect from './rwTagSelect/RWTagSelect'
import TagSelectModal from '@/components/recruit/write/tagSelectModal/TagSelectModal'
import useStudyHubStore from '@/store/store'
import TitledRoundBox from '@/components/commonInProject/TitledRoundBox/TitledRoundBox'
import RWFileDropzone from './_RWFileDropzone'
import RWTitleInput from './_RWTitleInput'
import RWEstimatedCostInput from './_RWEstimatedCost'
import RWDueDateInput from './_RWDueDateInput'
import RWExpectedPersonnelSelect from './_RWExpectedPersonnelSelect'
import useRecruitWrite from './_useRecruitWrite'
import RWSubHeader from './_RWSubHeader'
import RWMarkdownEditor from './_RWMarkdownEditor'
import useRecruitWriteMutation from '@/hooks/recruitWrite/useRecruitWriteMutation'
import { trimObject } from '@/utils/trim'

interface RecruitWriteContetProps {
  isEditing?: boolean
}

const RecruitWriteContent = ({
  isEditing = false,
}: RecruitWriteContetProps) => {
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
    const { attachments, ...rest } = data
    const trimmedRest = trimObject(rest)

    const formData = new FormData()
    const restEntryArray = Object.entries(trimmedRest)
    restEntryArray.forEach((entry) => formData.append(...entry))
    attachments.forEach((file: File) => formData.append('attachments', file))

    if (isEditing) {
      if (!editingRecruit) {
        throw new Error('---- 수정 중인 공고를 못 찾았어요')
      }
      patchRecruitWriteMutation.mutate({
        body: formData,
        uuid: editingRecruit.uuid,
      })
    } else {
      postRecruitWriteMutation.mutate(formData)
    }
  }

  const isPending =
    postRecruitWriteMutation.isPending || patchRecruitWriteMutation.isPending

  return (
    <>
      <Container width="md" isPadded>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Vstack gap="xxl">
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
              <RWTagSelect
                setValue={setValue}
                errors={errors}
                isPending={isPending}
              />
              <RWFileDropzone errors={errors} control={control} />
            </TitledRoundBox>

            <Vstack gap="xl">
              <Divider />
              <Hstack className="justify-end">
                <Button
                  type="button"
                  onClick={() => navigate(-1)}
                  status={isPending ? 'pending' : 'enabled'}
                >
                  취소
                </Button>
                <Button
                  color="primary"
                  status={isPending ? 'pending' : 'enabled'}
                >
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

      {/* NOTE: ErrorModal에서 setIsOn이 아니라 onClose를 받게 해달라고 요청해야 */}
      {/* <ErrorModal */}
      {/*   isOn={modalKey === 'recruitWriteError'} */}
      {/*   onClose={() => setModalKey(null)} */}
      {/* /> */}
    </>
  )
}

export default RecruitWriteContent
