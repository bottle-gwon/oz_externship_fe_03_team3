import Button from '@/components/commonInGeneral/button/Button'
import { Vstack } from '@/components/commonInGeneral/layout'
import ManageModal from '@/components/recruit/manageModal/ManageModal'
import { useState } from 'react'
import { dummyRecruitArray } from './dummy/dummyRecruitList'

const HyejeongManageModal = () => {
  const [isOn, setIsOn] = useState(false)

  const onOpen = () => {
    setIsOn(true)
  }

  return (
    <Vstack>
      <ManageModal
        onClose={setIsOn}
        isOn={isOn}
        recruit={dummyRecruitArray[0]}
      />
      <Button onClick={onOpen}>모달 버튼</Button>
    </Vstack>
  )
}

export default HyejeongManageModal
