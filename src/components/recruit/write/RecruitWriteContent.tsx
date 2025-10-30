import Button from '@/components/commonInGeneral/button/Button'
import {
  GridContainer,
  Hstack,
  Vstack,
} from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import TitleSection from '@/components/titleSection/TitleSection'
import { Send } from 'lucide-react'
import { useEffect, useState } from 'react'
import Divider from '@/components/commonInGeneral/divider/Divider'
import {
  useForm,
  type Control,
  type FieldErrors,
  type FieldValues,
  type UseFormRegister,
  type UseFormSetValue,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  recruitEditSchema,
  recruitWriteSchema,
  type RecruitWriteSchema,
} from '@/lib/zodSchema'
import { useNavigate } from 'react-router'
import RWStudyGroupSelect from './_RWStudyGroupSelect'
import RWTagSelect from './rwTagSelect/RWTagSelect'
import TagSelectModal from '@/components/recruit/write/tagSelectModal/TagSelectModal'
import useStudyHubStore from '@/store/store'
import TitledRoundBox from '@/components/commonInProject/TitledRoundBox/TitledRoundBox'
import RWFileDropzone from './_RWFileDropzone'
import ConfirmationModal from '@/components/commonInGeneral/modal/confirmationModal/ConfirmationModal'
import RWTitleInput from './_RWTitleInput'
import RWMarkdownEditor from './_RWMarkdownEditor'
import RWEstimatedCostInput from './_RWEstimatedCost'
import RWDueDateInput from './_RWDueDateInput'
import RWExpectedPersonnelSelect from './_RWExpectedPersonnelSelect'
import useRecruitWrite from './_useRecruitWrite'

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

  const navigate = useNavigate()

  useEffect(() => {
    return () => setEditingRecruit(null)
  }, [setEditingRecruit])

  const { handleSubmit, register, setValue, control, errors } =
    useRecruitWrite(isEditing)

  const onSubmit = (_data: FieldValues) => {
    setIsOn(true)
    // ---- 테스트할 땐 여기 주석을 해제해주세요
    // console.log({ _data })
    // debugger
    // ---- 여기까지
    // 아직은 하는 것 없음
    // TODO: api 연결 시 채워넣어야
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
            <TitleSection type="write" />

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
