import Button from '@/components/commonInGeneral/button/Button'
import ConfirmationModal from '@/components/commonInGeneral/modal/confirmationModal/ConfirmationModal'
import useStudyHubStore from '@/store/store'
import { LogIn } from 'lucide-react'

const LoginRequiredModal = () => {
  const modalKey = useStudyHubStore((state) => state.modalKey)
  const setModalKey = useStudyHubStore((state) => state.setModalKey)

  const handleClick = () => {
    window.location.href = import.meta.env.VITE_LOGIN_PAGE_URL
  }

  return (
    <ConfirmationModal
      isOn={modalKey === 'loginRequired'}
      onClose={() => setModalKey(null)}
    >
      <ConfirmationModal.Title>로그인이 필요합니다</ConfirmationModal.Title>
      <ConfirmationModal.Content>
        로그인 페이지로 이동할까요?
      </ConfirmationModal.Content>
      <ConfirmationModal.ButtonSection>
        <Button onClick={handleClick}>
          <LogIn size={16} />
          로그인하기
        </Button>
      </ConfirmationModal.ButtonSection>
    </ConfirmationModal>
  )
}

export default LoginRequiredModal
