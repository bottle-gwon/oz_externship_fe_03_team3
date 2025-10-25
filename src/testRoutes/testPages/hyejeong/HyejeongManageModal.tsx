import Button from '@/components/commonInGeneral/button/Button'
import { Vstack } from '@/components/commonInGeneral/layout'
import { dummyApplicantArray } from '@/components/recruit/ApplicantListDummy'
import ManageModal from '@/components/recruit/manageModal/ManageModal'
import { useState } from 'react'

const HyejeongManageModal = () => {
  const [isOn, setIsOn] = useState(false)
  const recruitContent = 'Node.js 백엔드 개발 스터디원 구합니다' // 임시 모집 공고 content, 추후 구인공고관리에서 클릭된 공고의 content로 변경 예정
  const applicantArray = dummyApplicantArray // 임시 지원자 데이터, 추후 해당 공고에 지원한 지원자 데이터로 변경 예정

  const onOpen = () => {
    setIsOn(true)
  }

  return (
    <Vstack>
      <ManageModal
        onClose={setIsOn}
        isOn={isOn}
        recruitContent={recruitContent}
        applicantArray={applicantArray}
      />
      <Button onClick={onOpen}>모달 버튼</Button>
    </Vstack>
  )
}

export default HyejeongManageModal
