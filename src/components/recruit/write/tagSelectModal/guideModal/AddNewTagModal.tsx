import Button from '@/components/commonInGeneral/button/Button'
import ConfirmationModal from '@/components/commonInGeneral/modal/confirmationModal/ConfirmationModal'
import type { TagApiFail, TagApiSuccess } from '@/types'

interface AddNewTagModalInterface {
  isOn: boolean
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>
  response: TagApiSuccess | TagApiFail
}
interface AddTagModalContentInterface {
  title: string
  content: string
}

const AddTagModalContent = ({
  title,
  content,
}: AddTagModalContentInterface) => {
  // if (isPending) {
  //   return <BgSpinner />
  // }

  return (
    <>
      <ConfirmationModal.Title>
        <h4>{title}</h4>
      </ConfirmationModal.Title>

      <ConfirmationModal.Content>
        <p>{content}</p>
      </ConfirmationModal.Content>
    </>
  )
}

// 새로운 태그 추가 할때 사용할 모달창
const AddNewTagModal = ({
  isOn,
  setIsOn,
  response,
}: AddNewTagModalInterface) => {
  const Title =
    'message' in response ? '태그 추가 성공' : '태그 추가에 실패 했습니다.'

  const Content =
    'message' in response
      ? `'${response.added_tags[0]}' 태그가 성공적으로 추가 되었습니다.`
      : response?.detail || '알 수 없는 에러 발생'

  return (
    <ConfirmationModal
      isOn={isOn}
      onClose={() => {
        setIsOn(false)
      }}
    >
      <AddTagModalContent title={Title} content={Content} />
      <ConfirmationModal.ButtonSection>
        <Button shape="wideRectangle" onClick={() => setIsOn(false)}>
          확인
        </Button>
      </ConfirmationModal.ButtonSection>
    </ConfirmationModal>
  )
}

export default AddNewTagModal
