import Button from '@/components/commonInGeneral/button/Button'
import { Vstack } from '@/components/commonInGeneral/layout'
import ManageDetailModal from '@/components/recruit/manageDetailModal/ManageDetailModal'
import useStudyHubStore from '@/store/store'

const HyejeongManageModal = () => {
  const modalKeyArray = useStudyHubStore((state) => state.modalKeyArray)
  const setModalKeyArray = useStudyHubStore((state) => state.setModalKeyArray)

  const onOpen = () => {
    setModalKeyArray(['manageDetail'])
  }

  return (
    <Vstack>
      <ManageDetailModal
        onClose={() => setModalKeyArray([])}
        isOn={modalKeyArray.includes('manageDetail')}
        applicantId={101} // 임의 Id
      />
      <Button onClick={onOpen}>모달 버튼</Button>
    </Vstack>
  )
}

export default HyejeongManageModal
