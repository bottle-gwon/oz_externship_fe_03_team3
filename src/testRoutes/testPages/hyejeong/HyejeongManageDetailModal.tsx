import Button from '@/components/commonInGeneral/button/Button'
import { Vstack } from '@/components/commonInGeneral/layout'
import ManageDetailModal from '@/components/recruit/manageDetailModal/ManageDetailModal'
import useStudyHubStore from '@/store/store'
import type { Applicant } from '@/types'

interface HyejeongManageModalProps {
  applicant: Applicant
}

const HyejeongManageModal = ({ applicant }: HyejeongManageModalProps) => {
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
        applicant={applicant} // 임의 Id
        recruitmentId="233991fc-18dd-46ca-95c8-21b4a523d9be"
      />
      <Button onClick={onOpen}>모달 버튼</Button>
    </Vstack>
  )
}

export default HyejeongManageModal
