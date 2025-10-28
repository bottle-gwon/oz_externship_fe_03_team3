import Button from '@/components/commonInGeneral/button/Button'
import { Vstack } from '@/components/commonInGeneral/layout'
import ManageDetailModal from '@/components/recruit/manageDetailModal/ManageDetailModal'
import { useState } from 'react'
import { dummyApplicantDetail } from './dummy/dummyApplicantDetail'

const HyejeongManageModal = () => {
  const [isOn, setIsOn] = useState(false)

  const onOpen = () => {
    setIsOn(true)
  }

  return (
    <Vstack>
      <ManageDetailModal
        onClose={setIsOn}
        isOn={isOn}
        applicant={dummyApplicantDetail}
      />
      <Button onClick={onOpen}>모달 버튼</Button>
    </Vstack>
  )
}

export default HyejeongManageModal
